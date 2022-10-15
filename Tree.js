/* TREE SHAPE */

let n = 8;
let string = "";

for (let i = 0; i <= n; i++) {
  for (let j = 1; j <= n - i; j++) {
    string += " ";
  }

  for (let k = 0; k < 2 * i - 1; k++) {
    string += "#";
  }
  string += "\n";
}
for (let y = 1; y <= 6; y++) {
  string += "      ##";
  string += "\n";
}

console.log(string);
