$(document).ready(init);

function init()
{
    emptyField();
    getTeamCall(getTeamCallback);
    getPlayedCall(getPlayedCallback);

    $("body").hide().fadeIn("slow");
}

function getTeamCall(callback)
{
    $.ajax(
        {
            dataType:"json",
            url:"php/getteams.php",
            success:callback
        }
    );
}

function getTeamCallback(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
        $(".teams").append('<div class="matches"><p>' +val.matches_home+ ' - ' +val.matches_away+ '<button type="submit" class="set-button" id="' +val.matches_id+ '"></p>Set</button></div>');
    });

    $(".set-button").click(function(){
        var matchId = $(this).attr("id");
        var homeGoal = $("#home-goals").val();
        var awayGoal = $("#away-goals").val();
        var spectator = $("#spectators").val();
        var homeScore1 = $("#home-score1").val();
        var homeMinute1 = $("#home-minute1").val();
        var awayScore1 = $("#away-score1").val();
        var awayMinute1 = $("#away-minute1").val();
        var homeScore2 = $("#home-score2").val();
        var homeMinute2 = $("#home-minute2").val();
        var awayScore2 = $("#away-score2").val();
        var awayMinute2 = $("#away-minute2").val();
        var homeScore3 = $("#home-score3").val();
        var homeMinute3 = $("#home-minute3").val();
        var awayScore3 = $("#away-score3").val();
        var awayMinute3 = $("#away-minute3").val();

            $.ajax(
            {
            dataType:"json",
            type:"POST",
            url :"php/insert.php",
            data : {"match-id": matchId,"home-goals": homeGoal, "away-goals": awayGoal, "spectators": spectator,
                    "home-score1": homeScore1, "away-score1": awayScore1, "home-minute1": homeMinute1, "away-minute1": awayMinute1,
                    "home-score2": homeScore2, "away-score2": awayScore2, "home-minute2": homeMinute2, "away-minute2": awayMinute2,
                    "home-score3": homeScore3, "away-score3": awayScore3, "home-minute3": homeMinute3, "away-minute3": awayMinute3},
            success : infoPosted()
            });
         });
}

function infoPosted() {
    location.reload();
}

function getPlayedCall(callback)
{
    $.ajax(
        {
            dataType:"json",
            url:"php/played.php",
            success:callback
        }
    );
}

function getPlayedCallback(data)
{
    console.log(data);

    $(".play").append('<h3>Klik op de wedstrijd voor meer info</h3>');
    $.each(data, function (i, val)
    {
        $(".play").append('<div class="played" id="' +val.matches_id+ '"><p>' +val.matches_home+ ' - ' +val.matches_away+ ' : ' +val.home_score+ '-' +val.away_score+ '</p></div>');
    });

     $(".played").click(function()
     {
        var match_id = $(this).attr("id");
        $("body").fadeOut(function()
        {
            document.location.href="php/info.php#"+match_id+"";
        })

     });
}

function emptyField()
{
    var inputTxt = $("input[type='text']");
    inputTxt.val('');
}