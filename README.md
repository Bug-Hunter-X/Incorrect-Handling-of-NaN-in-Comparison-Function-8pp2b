# Incorrect Handling of NaN in Comparison Function

This repository demonstrates a common error in TypeScript when comparing values, specifically the incorrect handling of NaN (Not a Number). The `compare` function, while seemingly correct for typical number comparisons, fails to account for the unique properties of NaN.

## Bug Description

The `compare` function uses strict equality (`===`) to determine the relationship between two numbers. While this works for most cases, it produces an incorrect result when comparing `NaN` to itself.  `NaN === NaN` evaluates to `false`, leading to an unexpected and incorrect return value from the function. This can lead to unexpected behavior in applications where NaN values are involved.

## Solution

The solution involves using `Number.isNaN()` to explicitly check for NaN values. This function reliably determines whether a value is NaN, providing the correct comparison logic.

## How to reproduce

1. Clone the repository.
2. Navigate to the project directory.
3. Compile the TypeScript code: `tsc bug.ts`
4. Run the compiled JavaScript code: `node bug.js`
5. Observe that `compare(NaN, NaN)` returns `NaN`, indicating an error. Then, review and run `bugSolution.ts` for the corrected comparison.