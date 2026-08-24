// ======================================================================
// EPISODE 4: HOW FUNCTIONS WORK IN JS & VARIABLE ENVIRONMENT
// ======================================================================
//
// **Playlist:** Namaste JavaScript (Season 1) — Akshay Saini
//
//
// --- What this lecture covers ---
// - A deep dive into how functions work behind the scenes in JavaScript, extending hoisting concepts to functions with parameters and local variables.
// - Introduces the concept of the **Variable Environment** — each function execution context has its own isolated variable environment.
//
//
// --- Example ---

// --- Code Example 1 ---
(function () {

  var x = 1;
  a();
  b();
  console.log(x);

  function a() {
    var x = 10;
    console.log(x);
  }
  function b() {
    var x = 100;
    console.log(x);
  }
})();
// Output:

// --- Code Example 2 ---
(function () {

  10
  100
  1
})();
//
//
// --- Key Concepts ---
// - Every time a function is invoked, a **new execution context** is created with its own memory space (variable environment) and code component.
// - Local variables inside a function (`var x` inside `a()`) are completely separate from variables of the same name in other scopes (global `x`, or `x` inside `b()`).
// - Each function call gets its own copy of local variables — even if two functions share variable names, they don't interfere with each other.
// - Same two-phase process (memory creation + code execution) happens for **every** execution context, not just the global one.
//
//
// --- Key Takeaways ---
// - Functions create their own execution context each time they're invoked.
// - Variables inside a function live in that function's own variable environment and don't leak out or clash with variables of the same name elsewhere.
// - This isolation is fundamental to how scoping works in JS.
//
