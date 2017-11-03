var url = window.location.hash;
var hash = url.substr(url.indexOf("#") + 1);

$(document).ready(init);

function init()
{
    postInfo(postInfoCallback);
    postScore1(postScoreCallback1);
    postScore2(postScoreCallback2);
    postScore3(postScoreCallback3);

    $("body").hide().fadeIn("slow");
}

function postInfo(callback)
{
    $.ajax(
        {
            dataType:"json",
            type:"POST",
            data: {"match-id": hash},
            url:"match_info.php",
            success:callback
        }
    );
}

function postInfoCallback(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
        var homeGoal = val.home_score;
        var awayGoal =  val.away_score;
        var spectator = val.spectators;

            $("#home-goals").val(homeGoal);
            $("#away-goals").val(awayGoal);
            $("#spectators").val(spectator);
    });
}

function postScore1(callback)
{
    $.ajax(
        {
            dataType:"json",
            type:"POST",
            data: {"match-id": hash},
            url:"goal1.php",
            success:callback
        }
    );
}

function postScoreCallback1(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
        var homeScorer = val.home_scorer;
        var awayScorer =  val.away_scorer;
        var homeMinute = val.home_minute;
        var awayMinute = val.away_minute;

        $("#home-score1").val(homeScorer);
        $("#home-minute1").val(homeMinute);
        $("#away-score1").val(awayScorer);
        $("#away-minute1").val(awayMinute);

    });
}

function postScore2(callback)
{
    $.ajax(
        {
            dataType:"json",
            type:"POST",
            data: {"match-id": hash},
            url:"goal2.php",
            success:callback
        }
    );
}

function postScoreCallback2(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
        var homeScorer = val.home_scorer;
        var awayScorer =  val.away_scorer;
        var homeMinute = val.home_minute;
        var awayMinute = val.away_minute;

        $("#home-score2").val(homeScorer);
        $("#home-minute2").val(homeMinute);
        $("#away-score2").val(awayScorer);
        $("#away-minute2").val(awayMinute);

    });
}

function postScore3(callback)
{
    $.ajax(
        {
            dataType:"json",
            type:"POST",
            data: {"match-id": hash},
            url:"goal3.php",
            success:callback
        }
    );
}

function postScoreCallback3(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
        var homeScorer = val.home_scorer;
        var awayScorer =  val.away_scorer;
        var homeMinute = val.home_minute;
        var awayMinute = val.away_minute;

        $("#home-score3").val(homeScorer);
        $("#home-minute3").val(homeMinute);
        $("#away-score3").val(awayScorer);
        $("#away-minute3").val(awayMinute);
    });

    $(".send").append('<p><button type="submit" id="update">Bewerk</button></p>');

    $("#update").click(function(){
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
                url :"post-match-info.php",
                data : {"match-id": hash,"home-goals": homeGoal, "away-goals": awayGoal, "spectators": spectator,
                        "home-score1": homeScore1, "away-score1": awayScore1, "home-minute1": homeMinute1, "away-minute1": awayMinute1,
                        "home-score2": homeScore2, "away-score2": awayScore2, "home-minute2": homeMinute2, "away-minute2": awayMinute2,
                        "home-score3": homeScore3, "away-score3": awayScore3, "home-minute3": homeMinute3, "away-minute3": awayMinute3},
                success : infoPosted()
            });
    });
}

function infoPosted() {
    document.location.href="../index.php";
}


