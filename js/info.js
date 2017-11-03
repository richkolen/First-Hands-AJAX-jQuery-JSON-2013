var map;
var url = window.location.hash;
var hash = url.substr(url.indexOf("#") + 1);

$(document).ready(init);

function init()
{
    getMatchInfo(getMatchInfoCallback);
    getScoreInfo(getScoreInfoCallback);

    $("body").hide().fadeIn("slow");
}

function getMatchInfo(callback)
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

function getMatchInfoCallback(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
        $(".match-content").append('<div class="match-info" id="' +val.matches_id+ '"><h3>' +val.matches_home+ ' - ' +val.matches_away+'</h3><p>' +val.home_score+ '-' +val.away_score+ '</p><p>'+val.spectators+'</p></div>');

        var lat = val.stadium_lat;
        var long = val.stadium_long;

        var mapOptions =
        {
            zoom:14,
            minZoom:3,
            center:new google.maps.LatLng(lat, long),
            mapTypeId:google.maps.MapTypeId.TERRAIN
        };

        map = new google.maps.Map(document.getElementById('map-canvas'), mapOptions);//Maak een map met de Google maps API.

        var myMarker = new google.maps.LatLng(lat,long);//Maak een nieuwe marker via de Google Maps API.

        //Maak een nieuwe marker via de Google Maps API en plaats de marker op de map.
        new google.maps.Marker(
            {
                position: myMarker,
                map: map,
                animation: google.maps.Animation.DROP
            });
    });
}

function getScoreInfo(callback)
{
    console.log(hash);
    $.ajax(
        {
            dataType:"json",
            type:"POST",
            data: {"match-id": hash},
            url:"score_info.php",
            success:callback
        }
    );
}

function getScoreInfoCallback(data)
{
    console.log(data);
    $.each(data, function (i, val)
    {
        $(".score-content").append('<div class="score-info" id="' +val.match_id+ '"><p>' +val.home_scorer+ ' - min: ' +val.home_minute+ ' &nbsp;&nbsp;&nbsp;  ' +val.away_scorer+ ' - min: ' +val.away_minute+ '</p></div>');
    });

    $(".score-content").append('<p><button type="submit" id="edit">Bewerk</button><button type="submit" id="back">Terug</button></p>');

    $("#edit").click(function()
    {
        $("body").fadeOut(function()
        {
            document.location.href="edit.php#"+hash+"";
        })

    });

    $("#back").click(function()
    {
        $("body").fadeOut(function()
        {
            document.location.href="../index.php";
        })

    });
}

