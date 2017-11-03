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

//als er velden leeg zijn
if(!empty($homeGoal) && !empty($awayGoal))
{
    mysqli_autocommit($db, FALSE); //zet veilig toevoegen uit
    //voeg onderdelen in de database toe
    $insertQuery =  "INSERT INTO info (info_id, home_score, away_score, spectators, match_id)
                     VALUES (NULL, '$homeGoal', '$awayGoal', '$spectators', '$matchId');
                     INSERT INTO scorer_home (home_scorer_id, home_scorer, home_minute, match_id)
                     VALUES (NULL, '$homeScorer1', '$homeMinute1', '$matchId');
                     INSERT INTO scorer_home (home_scorer_id, home_scorer, home_minute, match_id)
                     VALUES (NULL, '$homeScorer2', '$homeMinute2', '$matchId');
                     INSERT INTO scorer_home (home_scorer_id, home_scorer, home_minute, match_id)
                     VALUES (NULL, '$homeScorer3', '$homeMinute3', '$matchId');
                     INSERT INTO scorer_away (away_scorer_id, away_scorer, away_minute, match_id)
                     VALUES (NULL, '$awayScorer1', '$awayMinute1', '$matchId');
                     INSERT INTO scorer_away (away_scorer_id, away_scorer, away_minute, match_id)
                     VALUES (NULL, '$awayScorer2', '$awayMinute2', '$matchId');
                     INSERT INTO scorer_away (away_scorer_id, away_scorer, away_minute, match_id)
                     VALUES (NULL, '$awayScorer3', '$awayMinute3', '$matchId');
                     COMMIT";

    mysqli_autocommit($db, TRUE); //zet veilig toevoegen aan
    $result = mysqli_multi_query($db, $insertQuery); //voer meervoudige query uit
}

mysqli_close($db); // sluit database
