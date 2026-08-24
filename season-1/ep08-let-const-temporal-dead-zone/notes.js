// ======================================================================
// EPISODE 8: LET & CONST IN JS, TEMPORAL DEAD ZONE
// ======================================================================
//
// **Playlist:** Namaste JavaScript (Season 1) — Akshay Saini
//
//
// --- What this lecture covers ---
// - How `let` and `const` are hoisted differently from `var`.
// - Introduces the **Temporal Dead Zone (TDZ)** — the time between hoisting and actual initialization of a `let`/`const` variable.
//
//
// --- Key Concepts ---
// - `let` and `const` declarations **are** hoisted (contrary to popular belief), but they are placed in a separate memory space than `var`, and are **not initialized** with `undefined`. They remain **uninitialized** until the line of code where they're declared is executed.
// - **Temporal Dead Zone**: the time between when a `let`/`const` variable is hoisted and when it is actually initialized with a value. Accessing the variable during this period throws a `ReferenceError`.
// - `const` must be initialized with a value at the time of declaration — you can't declare a `const` without assigning it.
// - `const` variables cannot be reassigned once initialized.
// - Attempting to access `var` before declaration gives `undefined`; attempting to access `let`/`const` before declaration gives a `ReferenceError` (specifically "Cannot access 'x' before initialization").
//
//
// --- Example ---

// --- Code Example 1 ---
(function () {

  console.log(a); // undefined (var — hoisted with undefined)
  console.log(b); // ReferenceError: Cannot access 'b' before initialization (TDZ)
  var a = 10;
  let b = 20;
})();
//

// --- Code Example 2 ---
(function () {

  let c;
  console.log(c); // undefined (declared without assignment — allowed for let)

  // const d;     // SyntaxError: Missing initializer in const declaration (commented out so file stays runnable)
})();
//
//
// --- Why TDZ matters (security angle) ---
// - Shorter TDZ = less risk. Reduce the number of lines between the start of scope and where the variable is declared, since accessing it in the TDZ throws errors.
//
//
// --- Key Takeaways ---
// - `let`/`const` are hoisted but stay uninitialized in the TDZ until their declaration line runs.
// - Accessing them in the TDZ → `ReferenceError`.
// - `const` must be assigned immediately and cannot be reassigned.
// - Prefer `let`/`const` over `var` for safer, more predictable code.
//
