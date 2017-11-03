<?php

require '../config/config.php';

$matchId = $_POST['match-id'];
$homeGoal = $_POST['home-goals'];
$awayGoal = $_POST['away-goals'];
$spectators = $_POST['spectators'];
$homeScorer1 = $_POST['home-score1'];
$awayScorer1 = $_POST['away-score1'];
$homeMinute1 = $_POST['home-minute1'];
$awayMinute1 = $_POST['away-minute1'];
$homeScorer2 = $_POST['home-score2'];
$awayScorer2 = $_POST['away-score2'];
$homeMinute2 = $_POST['home-minute2'];
$awayMinute2 = $_POST['away-minute2'];
$homeScorer3 = $_POST['home-score3'];
$awayScorer3 = $_POST['away-score3'];
$homeMinute3 = $_POST['home-minute3'];
$awayMinute3 = $_POST['away-minute3'];


{
    //voeg onderdelen in de database toe
    $updateQuery =  "UPDATE info SET home_score = '$homeGoal', away_score = '$awayGoal', spectators = '$spectators'
                     WHERE match_id = '$matchId';
                     UPDATE scorer_home JOIN scorer_away ON home_scorer_id = away_scorer_id
                     SET home_scorer = '$homeScorer1', home_minute = '$homeMinute1', away_scorer = '$awayScorer1', away_minute = '$awayMinute1'
                     WHERE scorer_away.match_id = '$matchId' && home_scorer_id = 1;
                     UPDATE scorer_home JOIN scorer_away ON home_scorer_id = away_scorer_id
                     SET home_scorer = '$homeScorer2', home_minute = '$homeMinute2', away_scorer = '$awayScorer2', away_minute = '$awayMinute2'
                     WHERE scorer_away.match_id = '$matchId' && home_scorer_id = 2;
                     UPDATE scorer_home JOIN scorer_away ON home_scorer_id = away_scorer_id
                     SET home_scorer = '$homeScorer3', home_minute = '$homeMinute3', away_scorer = '$awayScorer3', away_minute = '$awayMinute3'
                     WHERE scorer_away.match_id = '$matchId' && home_scorer_id = 3";




    mysqli_multi_query($db, $updateQuery);
}

mysqli_close($db); // sluit database
