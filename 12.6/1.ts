import * as fs from 'fs';
const file = fs.readFileSync('input.txt', 'utf8');

//part 1
const checkUnique = (input: any) => {
    let counted = new Set();
    for (let i = 0; i < input.length; i++) {
        if (counted.has(input[i])) {
            return false;
        }
        counted.add(input[i]);
    }
    return true;
}

let split = file.split("\n");
split.map((e) => {
    for (let i = 0; i < e.length - 4; i++) {
        if (checkUnique(e.slice(i, i + 4))) {
            console.log(i + 4);
            break;
        }
    }
});

//part 2
split.map((e) => {
    for (let i = 0; i < e.length - 14; i++) {
        if (checkUnique(e.slice(i, i + 14))) {
            console.log(i + 14);
            break;
        }
    }
});