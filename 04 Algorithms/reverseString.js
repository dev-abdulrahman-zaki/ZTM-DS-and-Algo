function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString("yoyo master"));

// let counter = 7;
// let reversedStr = "";
// function reverseStringRecursive(str) {
//   // counter = str.length;
//   if (counter < 0) {
//     return;
//   }
//   counter--;
//   // return (reversedStr += reverseStringRecursive(str));
// }

let reversedStr = "";
function reverseStringRecursive(str) {
  if (reversedStr.length === str.length) {
    return reversedStr;
  }
  reversedStr += str[str.length - reversedStr.length - 1];
  return reverseStringRecursive(str);
}

console.log(reverseStringRecursive("yoyo master"));
