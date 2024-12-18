function compare(a, b) {
  if (Number.isNaN(a) && Number.isNaN(b)) {
    return 0; // Correct handling of NaN
  } else if (a === b) {
    return 0; // Correct
  } else if (a > b) {
    return 1; // Correct
  } else {
    return -1; // Correct
  }
}

console.log(compare(NaN, NaN)); // Output: 0 - Correct
console.log(compare(0, -0)); // Output: 0 - Correct
console.log(compare(-0, 0)); // Output: 0 - Correct