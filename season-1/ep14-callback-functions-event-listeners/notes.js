// ======================================================================
// EPISODE 14: CALLBACK FUNCTIONS IN JS FT. EVENT LISTENERS
// ======================================================================
//
// **Playlist:** Namaste JavaScript (Season 1) — Akshay Saini
//
//
// --- What this lecture covers ---
// - What **callback functions** are and why they're essential in JavaScript, a synchronous single-threaded language, for handling asynchronous-like behavior.
// - Introduction to **event listeners** and how callbacks power event-driven programming in the browser.
//
//
// --- Key Concepts ---
// - A **callback function** is a function passed as an argument to another function, to be "called back" (invoked) later — either immediately, or after some operation/delay completes.
// - Since JS is synchronous and single-threaded, callbacks give us a way to defer code execution without blocking the main thread — e.g., `setTimeout`.

// --- Code Example 1 ---
(function () {

  setTimeout(function () {
    console.log("Timer");
  }, 1000);

  function x(y) {
    console.log("x");
    y();
  }
  x(function y() {
    console.log("y");
  });
})();
//
//
// --- Event Listeners ---

// --- Code Example 2 ---
(function () {

  document.getElementById("clickMe").addEventListener("click", function xyz() {
    console.log("Button clicked");
  });
})();
// - `addEventListener` takes a callback function that runs whenever the specified event occurs.
// - Event listeners demonstrate **closures** in action: they can access variables from their enclosing scope even when triggered later, asynchronously.
//
// Example: Closures + event listeners (counter)

// --- Code Example 3 ---
(function () {

  function attachEventList() {
    var count = 0;
    document.getElementById("clickMe").addEventListener("click", function xyz() {
      console.log("Button clicked", ++count);
    });
  }
  attachEventList();
})();
// - Every click increments `count`, which persists across clicks thanks to the closure formed by the event listener callback.
//
//
// --- Important note on memory ---
// - Since event listeners form closures, they can consume significant memory if not cleaned up.
// - Use `removeEventListener()` when an event listener is no longer needed, to free up memory associated with its closure.
//
//
// --- Key Takeaways ---
// - Callbacks let us execute code after some operation completes, without blocking the thread.
// - setTimeout and event listeners are classic examples of callback usage in JS.
// - Closures are what make event listener callbacks able to "remember" surrounding state (like a counter) across multiple invocations.
// - Always remove unused event listeners to prevent memory leaks.
//
