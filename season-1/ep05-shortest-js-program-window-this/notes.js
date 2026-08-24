// ======================================================================
// EPISODE 5: SHORTEST JS PROGRAM, WINDOW & THIS KEYWORD
// ======================================================================
//
// **Playlist:** Namaste JavaScript (Season 1) — Akshay Saini
//
//
// --- What this lecture covers ---
// - The **shortest JS program** is an empty file — yet the JS engine still does a lot of work behind the scenes.
// - Even with an empty file, JS creates the **Global Execution Context (GEC)**, a **global object** (`window` in browsers), and a **`this`** variable.
//
//
// --- Key Concepts ---
// - The `window` object is created in the global space and contains many built-in functions and variables that can be accessed from anywhere in the program.
// - At the global level, `this === window` (in browsers).
// - Every JS engine creates a global object — it's called `window` in browsers, but has different names in other environments (e.g., `global` in Node.js).
// - Any variable created in the **global scope** gets attached to the global object (`window`).
//
//
// --- Example ---

// --- Code Example 1 ---
(function () {

  var a = 10;
  function b() {
    var x = 10;
  }
  console.log(window.a); // 10
  console.log(a);        // 10
  console.log(this.a);   // 10
})();
//
//
// --- Key Takeaways ---
// - Along with the Global Execution Context, JS also sets up a global object (`window`) and a `this` keyword pointing to it.
// - Global variables become properties of the `window` object.
// - This lays the groundwork for later, deeper exploration of the `this` keyword (covered fully in Season 2).
//
