<?php

require '../config/config.php';

$query = "SELECT * FROM matches
          LEFT JOIN info on matches_id = info.match_id
          WHERE home_score IS null";

$result = mysqli_query($db, $query);

$teams = array();

while ($row = $result->fetch_array(MYSQL_ASSOC))
{
   $test = array_push($teams, $row);
}

header("Content-Type: application/json");
echo json_encode($teams);

?>

