function incrementHomeScore(points) {
    const homeScoreElement = document.getElementById("home-score");
    let currentScore = parseInt(homeScoreElement.textContent);
    currentScore += points;
    homeScoreElement.textContent = currentScore;
}

const homeButtons = document.querySelectorAll("#home .score-btn");
homeButtons.forEach(button => { 
    button.addEventListener("click", (event) => {
        const points = parseInt(event.target.textContent.replace("+", ""));
        incrementHomeScore(points);
    });
})