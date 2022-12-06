import * as fs from 'fs';
const file = fs.readFileSync('input.txt', 'utf8');

//part 1
let stacks = [
    ["B", "Z", "T"],
    ["V", "H", "T", "D", "N"],
    ["B", "F", "M", "D"],
    ["T", "J", "G", "W", "V", "Q", "L"],
    ["W", "D", "G", "P", "V", "F", "Q", "M"],
    ["V", "Z", "Q", "G", "H", "F", "S"],
    ["Z", "S", "N", "R", "L", "T", "C", "W"],
    ["Z", "H", "W", "D", "J", "N", "R", "M"],
    ["M", "Q", "L", "F", "D", "S"]
]

let part2Stack = [...stacks];

let testStack = [
    ["Z", "N"],
    ["M", "C", "D"],
    ["P"]
]

let split = file.split("\n");
split.map((e) => {
    let command = e.split(" ");
    let amount = parseInt(command[1]);
    let from = parseInt(command[3]);
    let to = parseInt(command[5]);

    for (let i = 0; i < amount; i++) {
        let popped: string = stacks[from - 1].pop() || '';
        console.log(`Popped: ${[popped]}`);
        stacks[to - 1].push(popped) || '';
    }
});

console.log(stacks);

let answerArray: string[] = [];

for (let e of stacks) {
    answerArray.push(e.pop() || '');
}

const answer = answerArray.join('');
console.log(`Part 1: ${answer}`);

//part 2
split.map((e) => {
    let command = e.split(" ");
    let amount = parseInt(command[1]);
    let from = parseInt(command[3]);
    let to = parseInt(command[5]);

    console.log(`${amount}, ${from}, ${to}`)

    let poppedArray: string[] = [];

    for (let i = 0; i < amount; i++) {
        let popped: string = part2Stack[from - 1].pop() || '';
        console.log(`Popped: ${popped}`);
        poppedArray.push(popped);
    }

    poppedArray.reverse();

    for (let i = 0; i < poppedArray.length; i++) {
        part2Stack[to - 1].push(poppedArray[i]);
    }
});

let part2AnswerArray: string[] = [];

for (let e of part2Stack) {
    part2AnswerArray.push(e.pop() || '');
}

const part2Answer = part2AnswerArray.join('');
console.log(`Part 2: ${part2Answer}`);