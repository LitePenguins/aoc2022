import * as fs from 'fs';
const file = fs.readFileSync('input.txt', 'utf8');

let total = 0;

let split = file.split("\n");
split.map((e) => {
    let matching: string[] = [];
    //first half of string as set
    let first = new Set(e.slice(0, e.length / 2).split(''));
    //second half of string as set
    let second = new Set(e.slice(e.length / 2, e.length).split(''));

    //check sets for matching 
    for (let c of first.values()) {
        if (second.has(c)) {
            matching.push(c);
        }
    }

    //a-z
    if (matching[0].charCodeAt(0) > 96 && matching[0].charCodeAt(0) < 123) {
        let priority = matching[0].charCodeAt(0) - 96;
        total += priority;
    }
    //A-Z
    else {
        let priority = matching[0].charCodeAt(0) - 38;
        total += priority;
    }
});

console.log(`Part 1 Total: ${total}`);

//part 2
let newTotal = 0;

//every 3 elves, check for same
for (let i = 0; i < split.length; i = i + 3) {
    let matching: string[] = [];

    let first = new Set(split[i]);
    let second = new Set(split[i + 1]);
    let third = new Set(split[i + 2]);

    //check all 3 sets for matching 
    for (let c of first.values()) {
        if (second.has(c) && third.has(c)) {
            matching.push(c);
        }
    }

    //a-z
    if (matching[0].charCodeAt(0) > 96 && matching[0].charCodeAt(0) < 123) {
        let priority = matching[0].charCodeAt(0) - 96;
        newTotal += priority;
    }
    //A-Z
    else {
        let priority = matching[0].charCodeAt(0) - 38;
        newTotal += priority;
    }
}

console.log(`Part 2 Total: ${newTotal}`);