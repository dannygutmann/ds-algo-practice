console.group("isUnique");
// Using no data structures.
// Runs in O(n^2) time
const isUnique = str => {
  for (let i = 0; i < str.length; i++) {
    for (let j = i + 1; j < str.length; j++) {
      if (str.charAt(i) === str.charAt(j)) {
        return false;
      }
    }
  }
  return true;
};

console.log("should return true ===>  ", isUnique("abcdefghijk"));
console.log("should return fasle ===>  ", isUnique("abchjsuldayoq"));
console.groupEnd("isUnique");

console.group("checkPermutation");
const checkPermutation = (str1, str2) => {
  const sortedStr1 = str1.split("").sort();
  const sortedStr2 = str2.split("").sort();

  return sortedStr1.join("") === sortedStr2.join("");
};

console.log(
  "should return true ===>  ",
  checkPermutation("abcdefghijk", "bdfeackigjh")
);
console.log(
  "should return fasle ===>  ",
  checkPermutation("abchjsuldayoq", "acbhjsuddyovms")
);
console.groupEnd("checkPermutation");

console.group("URLify");
const URLify = (str, len) => {
  const strToArr = str.split("");
  for (let i = 0; i < len; i++) {
    if (strToArr[i] === " ") {
      strToArr[i] = "%20";
    }
  }
  return strToArr.join("");
};
console.log(
  'should return "Mr%20John%20Smith" ===>  ',
  URLify("Mr John Smith     ", 13)
);
console.log(
  'should return "Hello%20World!" ===>  ',
  URLify("Hello World!", 20)
);

console.groupEnd("URLify");

//TODO: Finish this problem
console.group("Palindrome Permutation");
// const palindromePermutation = (str) => {
//   let palindromeMap = {}

//   for(let i = 0; i < str.length; i++) {

//   }
// };

// console.log(
//   "should return true (taco cat)===>  ",
//   palindromePermutation("Tact Coa")
// );
// console.log(
//   "should return fasle ===>  ",
//   palindromePermutation("danny")
// );

console.groupEnd("Palindrome Permutation");
