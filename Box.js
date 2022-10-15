/* BOX SHAPE */

let n = 10;
let string = "";

for (let i = 0; i < n; i++) {
  for (let j = 0; j < n; j++) {
    string += "#";
  }

  string += "\n ";
}

console.log(string);
