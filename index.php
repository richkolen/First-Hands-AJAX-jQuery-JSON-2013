<!DOCTYPE HTML>
<html>
<head>
    <link rel="stylesheet" type="text/css" href="css/style.css">
</head>
<body>
    <div class="play"></div>

    <div class="content">
        <div class="content-form">
            <form method="post" action="">
                <p>
                    <input id="home-goals" type="text" placeholder="thuisscore">&nbsp;&nbsp;&nbsp;
                    - <input id="away-goals" type="text" placeholder="uitscore">
                </p>

                <p>
                    <input id="spectators" type="text" placeholder="toeschouwers">
                </p>

                <p>
                    <input id="home-score1" type="text" placeholder="scorer">
                    <input id="home-minute1" type="text" placeholder="min">
                    <input id="away-score1" type="text" placeholder="scorer">
                    <input id="away-minute1" type="text" placeholder="min">
                </p>

                <p>
                    <input id="home-score2" type="text" placeholder="scorer">
                    <input id="home-minute2" type="text" placeholder="min">
                    <input id="away-score2" type="text" placeholder="scorer">
                    <input id="away-minute2" type="text" placeholder="min">
                </p>

                <p>
                    <input id="home-score3" type="text" placeholder="scorer">
                    <input id="home-minute3" type="text" placeholder="min">
                    <input id="away-score3" type="text" placeholder="scorer">
                    <input id="away-minute3" type="text" placeholder="min">
                </p>
            </form>
        </div>

        <div class="teams"></div>
    </div>
<script src="js/jquery-1.9.1.js"></script>
<script src="js/match.js"></script>
</body>
</html>