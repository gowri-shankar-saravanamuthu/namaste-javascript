// ======================================================================
// EPISODE 19: MAP, FILTER & REDUCE
// ======================================================================
//
// **Playlist:** Namaste JavaScript (Season 1) — Akshay Saini
//
//
// --- What this lecture covers ---
// - JavaScript's three most important built-in **Higher-Order Functions** for working with arrays: **`map`**, **`filter`**, and **`reduce`**.
// - This is the final episode of Season 1.
//
//
// --- `map()` ---
// - Used to **transform** an array — it takes a callback function and applies it to every element, returning a **new array** of the same length.

// --- Code Example 1 ---
(function () {

  const arr = [5, 1, 3, 2, 6];
  const doubleArr = arr.map((x) => x * 2); // [10, 2, 6, 4, 12]
  const binaryArr = arr.map((x) => (x % 2 === 0 ? "Even" : "Odd"));
})();
//
//
// --- `filter()` ---
// - Used to **filter out** elements of an array based on a condition — the callback returns `true`/`false`, and only elements for which it returns `true` are kept in the new array.

// --- Code Example 2 ---
(function () {

  const arr = [5, 1, 3, 2, 6];
  const oddArr = arr.filter((x) => x % 2 !== 0); // [5, 1, 3]
})();
//
//
// --- `reduce()` ---
// - Used to **reduce** the entire array down into a **single value** (a sum, a max, an object, etc.).
// - Takes a callback `(accumulator, current) => {...}` and an optional initial value for the accumulator.

// --- Code Example 3 ---
(function () {

  const arr = [5, 1, 3, 2, 6];

  // find sum
  const sum = arr.reduce((acc, curr) => acc + curr, 0); // 17

  // find max (without using Math.max)
  const max = arr.reduce((max, curr) => (curr > max ? curr : max), 0); // 6
})();
//
//
// --- Chaining and combined use ---

// --- Code Example 4 ---
(function () {

  const users = [
    { firstName: "Alok", lastName: "Raj", age: 23 },
    { firstName: "Ashish", lastName: "Kumar", age: 29 },
    { firstName: "Ankit", lastName: "Roy", age: 29 },
    { firstName: "Pranav", lastName: "Mukherjee", age: 50 },
  ];

  // count people by age using reduce
  const report = users.reduce((acc, curr) => {
    acc[curr.age] = (acc[curr.age] || 0) + 1;
    return acc;
  }, {});
  // { 23: 1, 29: 2, 50: 1 }

  // get full names of users under 30, using map + filter chained
  const fullNamesUnder30 = users
    .filter((user) => user.age < 30)
    .map((user) => user.firstName + " " + user.lastName);
})();
//
//
// --- Key Takeaways ---
// - `map` → transforms each element (returns array of same length).
// - `filter` → selects elements matching a condition (returns array of ≤ length).
// - `reduce` → collapses the entire array into a single value.
// - All three are **Higher-Order Functions** (from Episode 18) — they take callback functions as arguments.
// - They can be **chained together** for powerful, readable data transformations — a core pattern in functional & modern JS programming.
// - This wraps up Season 1's core JS fundamentals; Season 2 goes deeper into async patterns (Promises, async/await) and `this`.
//
