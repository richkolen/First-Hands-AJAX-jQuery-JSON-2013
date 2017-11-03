<?php

require '../config/config.php';

$matchId = $_POST['match-id'];

$query = "SELECT * FROM scorer_home
          JOIN scorer_away ON home_scorer_id = away_scorer_id
          WHERE scorer_away.match_id = '$matchId'";

$result = mysqli_query($db, $query);

$teams = array();

while ($row = $result->fetch_array(MYSQL_ASSOC))
{
    $test = array_push($teams, $row);
}

header("Content-Type: application/json");
echo json_encode($teams);

?>