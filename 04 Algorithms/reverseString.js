function reverseString(str) {
  let reversedStr = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversedStr += str[i];
  }
  return reversedStr;
}

console.log(reverseString("yoyo master"));

let reversedStr = "";
function reverseStringRecursive(str) {
  if (reversedStr.length === str.length) {
    return reversedStr;
  }
  reversedStr += str[str.length - reversedStr.length - 1];
  return reverseStringRecursive(str);
}

// another solution:
function reverseStringRecursive(str) { 
  if (str === "") {
    return "";
  } else {
    return reverseStringRecursive(str.substr(1)) + str.charAt(0);
  }
}

console.log(reverseStringRecursive("yoyo master"));
