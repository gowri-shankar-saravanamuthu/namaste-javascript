// ======================================================================
// EPISODE 17: TRUST ISSUES WITH SETTIMEOUT()
// ======================================================================
//
// **Playlist:** Namaste JavaScript (Season 1) — Akshay Saini
//
//
// --- What this lecture covers ---
// - Why `setTimeout(callback, delay)` doesn't **guarantee** the callback runs exactly after `delay` milliseconds — it only guarantees a **minimum** delay.
//
//
// --- Key Concepts ---
// - `setTimeout` registers its callback with the browser's Web API's timer. The timer runs independently of the call stack.
// - Once the timer expires, the callback is placed in the **Callback Queue**, waiting for the **Event Loop** to push it onto the call stack.
// - The Event Loop only pushes the callback onto the call stack when the **call stack is completely empty**.
// - If the call stack is busy executing other **synchronous** code (e.g., a long-running loop) when the timer expires, the callback has to **wait** until the stack clears — even though its delay technically already elapsed.
//
//
// --- Example ---

// --- Code Example 1 ---
(function () {

  console.log("Start");
  setTimeout(function cb() {
    console.log("Callback");
  }, 5000);
  console.log("End");

  // Suppose after this a while loop runs synchronously for 10 seconds
  let startDate = new Date().getTime();
  let endDate = startDate;
  while (endDate < startDate + 10000) {
    endDate = new Date().getTime();
  }
  console.log("While expires");
})();
// Output order: `Start`, `End`, `While expires`, `Callback`
// - Even though the timer was set for 5 seconds, the callback only runs **after** the 10-second blocking while loop finishes — because the call stack was busy and the Event Loop had to wait for it to be empty.
//
//
// --- Key Takeaways ---
// - `setTimeout(cb, X)` means: "run `cb` **at least** `X` ms later, once the call stack is free" — not "run it at **exactly** `X` ms."
// - JS is single-threaded — a long-running synchronous task will **block** all pending async callbacks, including timers, no matter how short their delay was set.
// - This is why blocking the main thread with heavy synchronous code is a bad practice — it delays all queued async work.
// - Concept of "First-class trust issues" with `setTimeout(fn, 0)` too — even a 0ms delay doesn't run immediately; it still has to wait for the call stack to clear and go through the event loop.
//
