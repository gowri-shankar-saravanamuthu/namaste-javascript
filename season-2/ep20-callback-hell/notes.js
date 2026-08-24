// ======================================================================
// EPISODE 20 (S2 EP 1): CALLBACK HELL
// ======================================================================
//
// **Playlist:** Namaste JavaScript Season 2 — Akshay Saini
//
//
// --- What this lecture covers ---
// - The good and bad parts of using **callbacks** in JavaScript.
// - Introduces **Callback Hell** and **Inversion of Control** — the two major problems with callbacks — as motivation for learning Promises in the next episode.
//
//
// --- Recap: Why callbacks? ---

// --- Code Example 1 ---
(function () {

  console.log("Namaste");
  setTimeout(function () {
    console.log("JavaScript");
  }, 5000);
  console.log("Season 2");
  // Namaste
  // Season 2
  // JavaScript   (after 5s delay)
})();
// - "Time, tide & JavaScript waits for none" — callbacks let us delay/defer execution of code (e.g., via `setTimeout`) without blocking the thread.
//
//
// --- The e-commerce example (real-world callback usage) ---

// --- Code Example 2 ---
(function () {

  const cart = ["shoes", "pants", "kurta"];

  api.createOrder(cart, function () {
    api.proceedToPayment(function () {
      api.showOrderSummary(function () {
        api.updateWalletBalance();
      });
    });
  });
})();
// - Order must be created **before** payment; payment must succeed **before** showing summary; summary before updating wallet — each step depends on the previous one completing.
//
//
// --- Problem 1: Callback Hell ---
// - As more dependent asynchronous steps are chained via nested callbacks, the code grows deeper and deeper to the right, forming a shape often called the **"Pyramid of Doom"**.
// - This nested structure becomes hard to read, maintain, and debug.
//
//
// --- Problem 2: Inversion of Control ---
// - When you pass a callback function into another function/API, you **lose control** over when and how many times that callback is called.
// - You are trusting the external function to call your callback correctly (exactly once, at the right time) — but you have no guarantee it will.
// - This is a real risk when working with third-party APIs/functions.
//
//
// --- Key Takeaways ---
// - Callbacks are essential for handling async operations in single-threaded JS, but they come with two significant drawbacks: **Callback Hell** (pyramid of doom) and **Inversion of Control** (losing trust/control over callback execution).
// - These problems are the direct motivation for **Promises**, which solve both issues — covered in the next episode.
//
