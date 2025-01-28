function incrementHomeScore(points) {
    const homeScoreElement = document.getElementById("home-score");
    let currentScore = parseInt(homeScoreElement.textContent);
    currentScore += points;
    homeScoreElement.textContent = currentScore;
}

function reset(team) {
    const ScoreElement = document.getElementById(`${team}-score`);
    ScoreElement.textContent = 0;
}

function incrementAwayScore (points) {
    const AwayScoreElement = document.getElementById("away-score");
    let currentScore = parseInt(AwayScoreElement.textContent);
    currentScore += points;
    AwayScoreElement.textContent = currentScore;
}