import maxDivideConquer from "./max_divide_conquer.mjs";

const arrays = [[3, 1, 4, 1, 5, 9, 2], [-10, -3, -20, -1], [42], [0, 0, 0, 0]];

for (const a of arrays) {
  console.log(`Array: [${a}] => Máximo: ${maxDivideConquer(a)}`);
}
