// ======================================================================
// EPISODE 1: HOW JAVASCRIPT WORKS & EXECUTION CONTEXT
// ======================================================================
//
// **Playlist:** Namaste JavaScript (Season 1) — Akshay Saini
//
//
// --- What this lecture covers ---
// - Everything in JavaScript happens inside an **Execution Context**. Think of it as a big sealed container/box in which the whole JS program runs.
// - The Execution Context has two components:
//   1. **Memory Component (Variable Environment)** — where all variables and functions are stored as key-value pairs.
//   2. **Code Component (Thread of Execution)** — where code is executed one line at a time.
// - JavaScript is a **synchronous, single-threaded language** — it can only execute one command at a time, in a specific order.
//
//
// --- Key Concepts ---
// - The moment a JS program/file runs, a **Global Execution Context (GEC)** is created.
// - The GEC is created in two phases:
//   1. **Memory Creation Phase**: JS allocates memory to all variables and functions. Variables are assigned `undefined`; functions get the entire function code copied into memory.
//   2. **Code Execution Phase**: Code runs line by line, and variables get their actual assigned values; functions are invoked and create their own new execution contexts.
//
//
// --- Example ---

// --- Code Example 1 ---
(function () {

  var n = 2;
  function square(num) {
    var ans = num * num;
    return ans;
  }
  var square2 = square(n);
  var square4 = square(4);
})();
// - Memory phase: `n: undefined`, `square: {function code}`, `square2: undefined`, `square4: undefined`
// - Execution phase: `n = 2`; when `square(n)` is invoked, a new execution context is created for the function with its own memory and code phases.
//
//
// --- Key Takeaways ---
// - JS runs everything inside execution contexts.
// - Each execution context has a memory (variable) and code (thread of execution) component.
// - Understanding execution context is the foundation for understanding hoisting, scope, closures, and the call stack.
//
