function incrementHomeScore(points) {
    const homeScoreElement = document.getElementById("home-score");
    let currentScore = parseInt(homeScoreElement.textContent);
    currentScore += points;
    homeScoreElement.textContent = currentScore;
}
