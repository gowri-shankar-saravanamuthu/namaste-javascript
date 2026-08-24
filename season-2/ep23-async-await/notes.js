// ======================================================================
// EPISODE 23 (S2 EP 4): ASYNC AWAIT
// ======================================================================
//
// **Playlist:** Namaste JavaScript Season 2 — Akshay Saini
//
//
// --- What this lecture covers ---
// - The `async`/`await` syntax — a modern, cleaner way to work with Promises without chaining `.then()` calls.
// - How `async`/`await` works internally under the hood with the JS engine, call stack, and microtask queue.
//
//
// --- Key Concepts ---
// - The `async` keyword before a function makes it **always return a Promise** — even if you `return` a plain value, JS wraps it in a resolved Promise automatically.

// --- Code Example 1 ---
(function () {

  async function getData() {
    return "Namaste JavaScript";
  }
  const dataPromise = getData();
  dataPromise.then((res) => console.log(res)); // Namaste JavaScript
})();
// - The `await` keyword can **only be used inside an `async` function**. It pauses the execution of that async function until the Promise it's waiting on settles (resolves or rejects), then unwraps the value.

// --- Code Example 2 ---
(function () {

  async function handlePromise() {
    const data = await getData(); // waits here until Promise resolves
    console.log(data);
  }
})();
//
//
// --- Rewriting the e-commerce example with async/await ---

// --- Code Example 3 ---
(function () {

  async function handleOrder() {
    try {
      const orderId = await createOrder(cart);
      const paymentInfo = await proceedToPayment(orderId);
      console.log(paymentInfo);
    } catch (err) {
      console.log(err.message);
    }
  }
})();
// - Much more readable than chained `.then()` calls — reads like synchronous code even though it's asynchronous underneath.
//
//
// --- Error handling with async/await ---
// - Use a standard `try...catch` block around `await` calls, instead of `.catch()`.
//
//
// --- Async/await under the hood (how it really works) ---
// - `await` does **NOT** block the main thread. When an `await` is hit, the async function is suspended and **removed from the call stack**, allowing other code to run.
// - Once the awaited Promise settles, the async function's execution resumes from where it left off — placed back on the call stack via the microtask queue.
// - Internally, JS engines use something conceptually similar to **generators + Promises** to implement `async/await`.
//
//
// --- async/await vs .then/.catch ---
// - Functionally equivalent — both are built on Promises.
// - `async/await` is generally preferred because it's more readable and behaves like synchronous code, reducing nested chains.
//
//
// --- Key Takeaways ---
// - `async` functions always return a Promise.
// - `await` pauses async function execution until a Promise settles, without blocking the main thread.
// - Use `try...catch` for error handling instead of `.catch()`.
// - `async/await` is syntactic sugar over Promises — it doesn't replace them, it makes working with them cleaner.
//
