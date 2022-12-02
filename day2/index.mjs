import fs from "fs";

const inputArr = fs.readFileSync("input.txt", "utf-8").split("\n");

const moves = {
  A: "rock",
  X: "rock",
  B: "paper",
  Y: "paper",
  C: "scissors",
  Z: "scissors",
};

const moveScores = {
  rock: 1,
  paper: 2,
  scissors: 3,
};

const outcomes = {
  X: "lose",
  Y: "draw",
  Z: "win",
};

const outcomeScores = {
  win: 6,
  draw: 3,
};

const wins = {
  rock: "scissors",
  scissors: "paper",
  paper: "rock",
};

const loses = Object.fromEntries(
  Object.entries(wins).map(([key, value]) => [value, key])
);

function getScore(round) {
  const [opponentMove, playerMove] = round
    .split(" ")
    .map((move) => moves[move]);

  if (playerMove === opponentMove) {
    return moveScores[playerMove] + outcomeScores["draw"];
  }

  if (wins[playerMove] === opponentMove) {
    return moveScores[playerMove] + outcomeScores["win"];
  }

  return moveScores[playerMove];
}

function getScorePartTwo(round) {
  const opponentMove = moves[round.split(" ")[0]];
  const outcomeCode = round.split(" ")[1];
  const requiredOutcome = outcomes[outcomeCode];

  if (requiredOutcome === "draw") {
    return moveScores[opponentMove] + outcomeScores["draw"];
  }

  if (requiredOutcome === "win") {
    return moveScores[loses[opponentMove]] + outcomeScores["win"];
  }

  if (requiredOutcome === "lose") {
    return moveScores[wins[opponentMove]];
  }
}

function partOne() {
  const result = inputArr
    .map((round) => getScore(round))
    .reduce((acc, cur) => acc + cur);

  console.log(result);
}

function partTwo() {
  const result = inputArr
    .map((round) => getScorePartTwo(round))
    .reduce((acc, cur) => acc + cur);

  console.log(result);
}

partOne();
partTwo();
