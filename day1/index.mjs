import fs from "fs";

const dataArr = fs
  .readFileSync("input.txt", "utf8")
  .split("\n")
  .map((el) => Number(el));

let elfIndex = 0;
const sums = [];

for (const number of dataArr) {
  if (!number) elfIndex++;
  if (!sums[elfIndex]) sums[elfIndex] = Number(number);
  else sums[elfIndex] += Number(number);
}

// answer 1: highest sum
const result = Math.max(...sums);

// answer 2
sums.sort((a, b) => a - b);
const top3 = sums
  .reverse()
  .slice(0, 3)
  .reduce((acc, cur) => acc + cur);

console.log(top3)