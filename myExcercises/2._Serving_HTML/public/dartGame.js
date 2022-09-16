let score;
let playerOne;
let playerTwo;

export function initPlayers(playerOneInit,playerTwoInit){
    playerOne = playerOneInit;
    playerTwo = playerTwoInit;

}

export function initScore(scoreInit = 101) {
    score = scoreInit;
}

export function initGame() {
    console.log(playerOne,playerTwo);
    console.log("Game starts with score...", score);
}