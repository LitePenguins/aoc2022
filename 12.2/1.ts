import * as fs from 'fs';
const file = fs.readFileSync('input.txt', 'utf8');
// console.log(file);

enum Outcome {
    Lost = 0,
    Draw = 3,
    Won = 6,
}

enum Shape {
    Rock = 1,
    Paper = 2,
    Scissors = 3,
}
let totalScore = 0;

let split = file.split("\n");
split.map((e) => {
    let moves = e.split(" ");
    moves[1] = moves[1].replace(/(\r\n|\n|\r)/gm, "");

    // console.log(moves);
    // console.log(moves[1]);
    if (moves[0] == "A") {
        if (moves[1] == "X") {
            totalScore += Outcome.Draw + Shape.Rock;
        } else if (moves[1] == "Y") {
            totalScore += Outcome.Won + Shape.Paper;
        } else {
            totalScore += Outcome.Lost + Shape.Scissors;
        }
    } else if (moves[0] == "B") {
        if (moves[1] == "X") {
            totalScore += Outcome.Lost + Shape.Rock;
        } else if (moves[1] == "Y") {
            totalScore += Outcome.Draw + Shape.Paper;
        } else {
            totalScore += Outcome.Won + Shape.Scissors;
        }
    } else {
        if (moves[1] == "X") {
            totalScore += Outcome.Won + Shape.Rock;
        } else if (moves[1] == "Y") {
            totalScore += Outcome.Lost + Shape.Paper;
        } else {
            totalScore += Outcome.Draw + Shape.Scissors;
        }
    }
});

//Part 1
console.log(totalScore);

//Part 2
let newTotalScore = 0;
split.map((e) => {
    let moves = e.split(" ");
    moves[1] = moves[1].replace(/(\r\n|\n|\r)/gm, "");

    // console.log(moves);
    // console.log(moves[1]);
    if (moves[0] == "A") {//rock
        if (moves[1] == "X") {
            newTotalScore += Outcome.Lost + Shape.Scissors;
        } else if (moves[1] == "Y") {
            newTotalScore += Outcome.Draw + Shape.Rock;
        } else {
            newTotalScore += Outcome.Won + Shape.Paper;
        }
    } else if (moves[0] == "B") {//paper
        if (moves[1] == "X") {
            newTotalScore += Outcome.Lost + Shape.Rock;
        } else if (moves[1] == "Y") {
            newTotalScore += Outcome.Draw + Shape.Paper;
        } else {
            newTotalScore += Outcome.Won + Shape.Scissors;
        }
    } else {
        if (moves[1] == "X") {//scissors
            newTotalScore += Outcome.Lost + Shape.Paper;
        } else if (moves[1] == "Y") {
            newTotalScore += Outcome.Draw + Shape.Scissors;
        } else {
            newTotalScore += Outcome.Won + Shape.Rock;
        }
    }
});
console.log(newTotalScore);
