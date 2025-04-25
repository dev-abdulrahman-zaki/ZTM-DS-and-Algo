function test(a, b) {
  console.log(this);
  console.log(arguments);
}

const test2 = (a, b) => {
  console.log(this);
  console.log(arguments);
};

console.log(test(1, 2));
console.log(test2(1, 2));
