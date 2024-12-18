function compare(a, b) {
  if (a === b) {
    return 0; // Correct
  } else if (a > b) {
    return 1; // Correct
  } else {
    return -1; // Correct
  }
}

console.log(compare(NaN, NaN)); // Output: NaN - Incorrect
console.log(compare(0, -0)); // Output: 0 - Correct
console.log(compare(-0, 0)); // Output: 0 - Correct