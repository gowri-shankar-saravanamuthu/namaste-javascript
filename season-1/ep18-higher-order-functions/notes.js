// ======================================================================
// EPISODE 18: HIGHER-ORDER FUNCTIONS FT. FUNCTIONAL PROGRAMMING
// ======================================================================
//
// **Playlist:** Namaste JavaScript (Season 1) — Akshay Saini
//
//
// --- What this lecture covers ---
// - What **Higher-Order Functions (HOFs)** are, and an introduction to **functional programming** in JavaScript.
// - Sets up the motivation for `map`, `filter`, and `reduce`, covered in the next episode.
//
//
// --- Key Concepts ---
// - A **Higher-Order Function** is a regular function that either:
//   1. Takes another function as an argument, or
//   2. Returns a function as its result (or both).
// - The function passed in/returned is often called a **callback function**.
// - Functional programming favors writing small, **reusable**, and **composable** functions instead of repeating similar logic.
//
//
// --- Example: The problem (code duplication) ---

// --- Code Example 1 ---
(function () {

  function calculateAreaOfRadius(radiusArr) {
    const output = [];
    for (let i = 0; i < radiusArr.length; i++) {
      output.push(Math.PI * radiusArr[i] * radiusArr[i]);
    }
    return output;
  }

  function calculateCircumferenceOfRadius(radiusArr) {
    const output = [];
    for (let i = 0; i < radiusArr.length; i++) {
      output.push(2 * Math.PI * radiusArr[i]);
    }
    return output;
  }
  // Notice: both functions repeat the same looping logic
})();
//
//
// --- Example: The HOF solution ---

// --- Code Example 2 ---
(function () {

  const radiusArr = [1, 2, 3, 4];

  const area = function (radius) {
    return Math.PI * radius * radius;
  };
  const circumference = function (radius) {
    return 2 * Math.PI * radius;
  };

  function calculate(radiusArr, operation) {
    const output = [];
    for (let i = 0; i < radiusArr.length; i++) {
      output.push(operation(radiusArr[i]));
    }
    return output;
  }

  calculate(radiusArr, area);          // reusable, composable
  calculate(radiusArr, circumference); // pass different logic as callback
})();
// - `calculate` is a **higher-order function** — it abstracts the looping logic and delegates the "what to do with each item" to the passed-in callback function (`area` or `circumference`).
//
//
// --- Key Takeaways ---
// - HOFs are the backbone of functional programming in JS.
// - They enable code reuse and cleaner, more declarative code by separating "how to iterate" from "what to do with each element."
// - This concept directly leads into JS's built-in HOFs: `map`, `filter`, and `reduce` — covered in the next episode.
//
