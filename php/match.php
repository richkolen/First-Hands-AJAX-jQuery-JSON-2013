<?php

require '../config/config.php';

$matchApiUrl = 'http://docent.cmi.hr.nl/moora/imp03/api';

$methods = array('/wedstrijden?league=PremierLeague&club=Arsenal');

$method = $methods[0];

$data = json_decode(file_get_contents($matchApiUrl.$method));

foreach($data as $items)
{
    $homeclub = $items->homeClub;
    $awayclub = $items->awayClub;
    $stadium = $items->stadium;
    $city = $items->city;

    $query =  "INSERT INTO matches (matches_home, matches_away, matches_stadium, matches_city)
                 VALUES ('$homeclub', '$awayclub', '$stadium', '$city')";

    mysqli_query($db, $query);

}





