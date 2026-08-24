// ======================================================================
// EPISODE 15: ASYNCHRONOUS JAVASCRIPT & EVENT LOOP FROM SCRATCH
// ======================================================================
//
// **Playlist:** Namaste JavaScript (Season 1) — Akshay Saini
//
//
// --- What this lecture covers ---
// - How the browser executes asynchronous JS code, using **Web APIs**, the **Callback Queue**, the **Microtask Queue**, and the **Event Loop** — explained from first principles.
//
//
// --- Key Concepts ---
// - The JS engine alone can only run code synchronously on a single thread via the call stack. Asynchronous behaviors like `setTimeout`, DOM events, `fetch`, etc., are **not part of the JS engine itself** — they're provided by the **browser (or Node.js) runtime** via **Web APIs**.
// - **Web APIs** available in the browser: `setTimeout`, DOM APIs, `fetch`, `localStorage`, `console`, etc. — none of these are part of core JavaScript.
//
// How it works
// 1. When you call something like `setTimeout(cb, 5000)`, the callback `cb` is registered with the corresponding Web API (the browser's `setTimeout` API), and the timer starts **outside** the call stack.
// 2. `fetch()` calls register their callback with the browser's networking API.
// 3. Once the Web API's task is complete (timer expires, network response arrives, etc.), the callback is placed into a queue:
//    - **Callback Queue (Task Queue / Macrotask Queue)** — for `setTimeout`, DOM events, etc.
//    - **Microtask Queue** — for Promises' `.then()` callbacks and `MutationObserver` — this queue has **higher priority** than the callback queue.
// 4. The **Event Loop** is a continuously running process that checks: "Is the call stack empty?" If yes, it picks the first callback from the queue (microtask queue first, then callback queue) and pushes it onto the call stack for execution.
//
//
// --- Example ---

// --- Code Example 1 ---
(function () {

  console.log("start");
  setTimeout(function cbT() {
    console.log("timeout");
  }, 5000);

  fetch("https://api.example.com").then(function cbF() {
    console.log("cb1");
  });

  console.log("end");
})();
// - Output order: `start`, `end`, then eventually `cb1` (microtask, fetched instantly say) and `timeout` (after 5s), respecting queue priorities.
//
//
// --- Key Takeaways ---
// - The JS engine is single-threaded, but the browser provides Web APIs that let async operations happen "outside" the main thread.
// - The Callback Queue handles regular async callbacks (`setTimeout`, click handlers); the Microtask Queue handles Promise callbacks with higher priority.
// - The Event Loop's job is simple but crucial: keep checking if the call stack is empty, and if so, push the next task from the queues onto it.
// - This mechanism is what allows JS to behave "asynchronously" despite being single-threaded.
//
