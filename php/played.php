<?php

require '../config/config.php';

$query = "SELECT * FROM matches
          LEFT JOIN info ON matches_id = info.match_id
          WHERE home_score IS not null ORDER BY matches_id DESC";

$result = mysqli_query($db, $query);

$teams = array();

while ($row = $result->fetch_array(MYSQL_ASSOC))
{
    $test = array_push($teams, $row);
}

header("Content-Type: application/json");
echo json_encode($teams);

?>