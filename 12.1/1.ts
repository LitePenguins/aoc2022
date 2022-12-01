import * as fs from 'fs';
import { cursorTo } from 'readline';
const file = fs.readFileSync('input.txt', 'utf8');
// console.log(file);
let split = file.split("\n\n");
// console.log(split);
//each elf, find total
let eachTotalArr = split.map((e) => {
    //split by new line
    let calArr = e.split("\n");
    //convert to int for summation
    let calNumArr = calArr.map(Number);
    // console.log(calList);
    //sum all calories
    let result = calNumArr.reduce((acc, cur) => {
        return acc + cur;
    }, 0);
    return result;
});

// console.log(eachTotalArr);
//sort array descending
let max = eachTotalArr.sort((a, b) => { return b - a });
//return highest
console.log(max[0]);

//part 2
let top3total = 0;
for (let i = 0; i < 3; i++) {
    top3total += max[i];
}
console.log(top3total);