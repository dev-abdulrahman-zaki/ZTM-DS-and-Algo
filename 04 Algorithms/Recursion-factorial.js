function findFactorialRecursive(number) {
  let answer = 1;
  //  base case
  if (number === 0) return answer;
  answer *= number;
  //  recursive case
  return (answer *= findFactorialRecursive(number - 1));
}

function findFactorialIterative(number) {
  let answer = 1;
  for (let i = number; i > 0; i--) {
    answer *= i;
  }
  return answer;
}

// 5 * 4 * 3 * 2 * 1

console.log(findFactorialRecursive(5));
// console.log(findFactorialIterative(5));
