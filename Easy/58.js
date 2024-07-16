//Problem 58. Length of Last Word

var lengthOfLastWord = function (s) {
  let length = 0;
  let inWord = false;
  for (let i = s.length - 1; i >= 0; i--) {
    if (s[i] !== " ") {
      length++;
      inWord = true;
    } else if (inWord) {
      break;
    }
  }
  return length;
};

const result = lengthOfLastWord("   fly me   to   the moon  ");
console.log(result);
