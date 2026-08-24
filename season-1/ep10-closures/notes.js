// ======================================================================
// EPISODE 10: CLOSURES IN JS
// ======================================================================
//
// **Playlist:** Namaste JavaScript (Season 1) — Akshay Saini
//
//
// --- What this lecture covers ---
// - One of the most important and interview-favorite JS concepts: **Closures**.
// - A function bundled together with its lexical environment forms a closure.
//
//
// --- Key Concepts ---
// - A **closure** is a function that remembers the variables from the place where it was defined, regardless of where it's executed later.
// - When a function is returned from another function, it carries a reference to its outer function's variables — it doesn't just copy the values, it keeps a **live reference**.
// - Even after the outer function has finished executing (and its execution context is technically popped off the call stack), the returned inner function still has access to the outer function's variables via closure — the JS engine keeps that memory alive because it's still being referenced.
//
//
// --- Example ---

// --- Code Example 1 ---
(function () {

  function outer() {
    var a = 10;
    function inner() {
      console.log(a); // inner forms a closure over 'a'
    }
    return inner;
  }
  var closureFn = outer();
  closureFn(); // 10 — 'a' is still accessible even though outer() has finished executing
})();
//

// --- Code Example 2 ---
(function () {

  function outest() {
    var c = 20;
    function outer(param) {
      var b = 10;
      function inner() {
        console.log(b, c, param); // inner closes over b, c AND param
      }
      return inner;
    }
    return outer;
  }
  outest()("Hello")(); // 10 20 "Hello"
})();
//
//
// --- Key Takeaways ---
// - Closure = function + its lexical scope bundled together.
// - Closures let inner functions "remember" and access variables of outer functions even after the outer function has returned.
// - Closures are the mechanism behind many powerful JS patterns: data privacy/encapsulation, memoization, currying, once functions, module pattern, and more.
// - Closures also explain the famous `setTimeout` + loop interview question, covered in the next episode.
//
