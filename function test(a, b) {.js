function test(a, b) {
  console.log(this); // Why global object ?
  console.log(arguments);
}

const test2 = (a, b) => {
  console.log(this); // Why {} ?
  console.log(arguments);
};

console.log(test(1, 2));
console.log(test2(1, 2));
