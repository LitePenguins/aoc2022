import * as fs from 'fs';
const file = fs.readFileSync('input.txt', 'utf8');

//part 1
let total = 0;

let split = file.split("\n");
split.map((e) => {
    let firstElf = e.split(",")[0];
    let secondElf = e.split(",")[1];

    let firstElfSectionBegin = parseInt(firstElf.split("-")[0]);
    let firstElfSectionEnd = parseInt(firstElf.split("-")[1]);

    let secondElfSectionBegin = parseInt(secondElf.split("-")[0]);
    let secondElfSectionEnd = parseInt(secondElf.split("-")[1]);

    if (firstElfSectionBegin <= secondElfSectionBegin && firstElfSectionEnd >= secondElfSectionEnd) {
        total++;
    } else if (firstElfSectionBegin >= secondElfSectionBegin && firstElfSectionEnd <= secondElfSectionEnd) {
        total++;
    }
});

console.log(total);

//part 2
let newTotal = 0;
split.map((e) => {
    let firstElf = e.split(",")[0];
    let secondElf = e.split(",")[1];

    let firstElfSectionBegin = parseInt(firstElf.split("-")[0]);
    let firstElfSectionEnd = parseInt(firstElf.split("-")[1]);

    let secondElfSectionBegin = parseInt(secondElf.split("-")[0]);
    let secondElfSectionEnd = parseInt(secondElf.split("-")[1]);

    if (!(firstElfSectionBegin > secondElfSectionEnd || secondElfSectionBegin > firstElfSectionEnd)) {
        newTotal++;
    }
});

console.log(newTotal);
