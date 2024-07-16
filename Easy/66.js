const plusOne = function (digits) {
  // Start from the last digit and move towards the first digit
  for (let i = digits.length - 1; i >= 0; i--) {
    if (digits[i] < 9) {
      // If the digit is less than 9, simply increment the digit and return the array
      digits[i]++;
      return digits;
    }

    // If the digit is 9, set it to 0
    digits[i] = 0;
  }

  console.log(digits);
  // If all digits are 9, we need to add an additional digit at the beginning
  digits.unshift(1);
  return digits;
};
console.log(plusOne([9, 2, 9]));
