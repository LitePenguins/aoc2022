import * as fs from 'fs';

//part 1
class Node {
    nodeValue: string;
    nodeSize: number;
    nodeChildren: Node[];

    constructor(value: string) {
        this.nodeValue = value;
        this.nodeChildren = [];
        this.nodeSize = 0;
    }
}

const file = fs.readFileSync('test.txt', 'utf8');

let stack: Node[] = [];
let answer = 0;
let smallest = 30000000;

const split = file.split("\n");
split.map((e) => {
    const commandLine = e.split(" ");
    if (commandLine[0] == "$") {
        const command = commandLine[1];
        console.log(`Command: ${command}`);
        switch (command) {
            case "cd": {
                const directory = commandLine[2].replace(/(\r\n|\n|\r)/gm, "");;
                console.log(`Directory: ${directory}`);

                if (directory == "..") {
                    //go back
                    let last = stack.pop();
                    //add to top of stack's file size
                    stack[stack.length - 1].nodeSize += last?.nodeSize || 0;

                    if ((last?.nodeSize || 0) <= 100000) {
                        answer += last?.nodeSize || 0;
                    }

                    // if (((last?.nodeSize || 0) >= 30000000) && ((last?.nodeSize || 0) < answer)) {
                    //     smallest = last?.nodeSize || 0;
                    // }
                } else {
                    //new directory
                    const newNode = new Node(directory);
                    stack.push(newNode);
                }
                break;
            }

            case "ls": {
                //ignore?
                break;
            }

            default: {
                break;
            }
        }
    } else if (commandLine[0] == "dir") {
        // ignore?
        console.log(`dir ${commandLine[1].replace(/(\r\n|\n|\r)/gm, "")} from ls`);
    } else {
        //file, so add to current directory's file size and output current file size
        stack[stack.length - 1].nodeSize += parseInt(commandLine[0]);
        console.log(`{${stack[stack.length - 1].nodeValue} node size: ${stack[stack.length - 1].nodeSize} } `)
    }
});

//last 2 directories of stack
while (stack.length > 1) {
    let last = stack.pop();
    stack[stack.length - 1].nodeSize += last?.nodeSize || 0;

    if ((last?.nodeSize || 0) <= 100000) {
        answer += last?.nodeSize || 0;
    }

    // if (((last?.nodeSize || 0) >= 30000000) && ((last?.nodeSize || 0) < answer)) {
    //     smallest = last?.nodeSize || 0;
    // }
}

console.log(stack);
console.log(`Sum of total sizes of directories <= 100000: ${answer}`);

//part 2
// console.log(smallest)
