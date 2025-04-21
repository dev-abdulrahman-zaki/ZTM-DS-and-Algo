// function nFacRuntimeFunc(n) {
//   for (let i = 0; i < n; i++) {
//     console.log(n);
//     nFacRuntimeFunc(n - 1);
//     console.log(n);

//   }
// }

// nFacRuntimeFunc(3);

// =============================================================================

const a = [1, 2, 3, 9]; // => 8
const b = [1, 2, 4, 4]; // => 8
const c = [1, 2, 4, 9]; // => 8

// - O(n^2)
// function getPairThatEquSum(arr, sum) {
//   console.log(arr, sum);
//   for (let i = 0; i < arr.length; i++) {
//     for (let ii = 0; ii < arr.length; ii++) {
//       console.log(arr[i] + arr[ii]);
//       if (arr[i] + arr[ii] === sum) {
//         console.log("yes");
//         return [arr[i], arr[ii]];
//       }
//     }
//   }
//   return null;
// }

// - O(n log n) - binary search (search for pair that  equals sum)
function getPairThatEquSum(arr, sum) {
  console.log(arr, sum);
  let ii = 0;
  const item = arr[ii];
  for (let i = 0; i < arr.length; i++) {
    if (item + arr[i] === sum) {
      return [item, arr[i]];
    }
  }
  return null;
}

// - O(n)
// function getPairThatEquSum(arr, sum) {
//   //   console.log(arr, sum);
//   let high = arr[arr.length - 1];
//   let low = arr[0];
//   for (let i = 0; i < arr.length; i++) {
//     if (high > sum) {
//       high = arr[arr.length - (i + 2)];
//     } else if (high + low === sum) {
//       console.log(high, low);
//       return;
//     } else {
//       console.log(high, low);
//       low = arr[i + 1];
//     }
//   }
//   return null;
// }

const x = getPairThatEquSum(b, 8);
// console.log(x);
// =============================================================================
// Given 2 arrays, create a function that let's a user know (true/false) whether these two arrays contain any common items
//For Example:
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'i'];
//should return false.
//-----------
//const array1 = ['a', 'b', 'c', 'x'];//const array2 = ['z', 'y', 'x'];
//should return true.

const array1 = ["a", "b", "c", "x"];
const array2 = ["z", "y", "x"];
// function areContainCommon(arr1, arr2) {
//   console.log(arr1, arr2);
//   const newArr = [...new Set(arr1), ...new Set(arr2)];
//   const filteredNewArr = newArr.filter((e, i, arr) => {
//     return arr.indexOf(e) === arr.lastIndexOf(e);
//   });
//   return newArr.length !== filteredNewArr.length;
// }

function areContainCommon(arr1, arr2) {
  console.log(arr1, arr2);
  const arr1Obj = {};
  arr1.forEach((e) => {
    arr1Obj[e] = true;
  });

  arr2.forEach((e) => {
    if (e in arr1Obj) {
      return true;
    }
  });
  return false;
}

function areContainCommon(arr1, arr2) {
  return arr1.some((e) => arr2.includes(e));
}

const y = areContainCommon(array1, array2);
console.log(y);
