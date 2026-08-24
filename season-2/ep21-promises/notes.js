// ======================================================================
// EPISODE 21 (S2 EP 2): PROMISES
// ======================================================================
//
// **Playlist:** Namaste JavaScript Season 2 — Akshay Saini
//
//
// --- What this lecture covers ---
// - What a **Promise** is, how it solves Callback Hell and Inversion of Control, and the three states a Promise can be in.
//
//
// --- The e-commerce example, rewritten with Promises ---

// --- Code Example 1 ---
(function () {

  const cart = ["shoes", "pants", "kurta"];
  const promiseRef = createOrder(cart);
  // promiseRef is a PLACEHOLDER for a future value — the order details
})();
//
//
// --- Key Concepts ---
// - A **Promise** is an object representing the **eventual completion (or failure)** of an asynchronous operation and its resulting value.
// - Think of a Promise as a **placeholder/container for a future value**. It's immediately returned (synchronously), even though the actual data may arrive later (asynchronously).
// - A Promise object has:
//   - `PromiseState` — one of three states:
//     1. **Pending** — initial state, operation not completed yet.
//     2. **Fulfilled** — operation completed successfully.
//     3. **Rejected** — operation failed.
//   - `PromiseResult` — holds the resulting value once fulfilled, or the error once rejected.
// - Once a Promise settles (fulfilled or rejected), the value is **immutable** — cannot be changed by any code afterward.
// - Promises solve **Inversion of Control**: instead of passing your callback INTO another function (losing control), you attach your callback onto the Promise object itself using `.then()` — you retain control because you're calling a method on an object you own a reference to.
//
//
// --- Using `.then()` ---

// --- Code Example 2 ---
(function () {

  createOrder(cart).then(function (orderId) {
    proceedToPayment(orderId);
  });
})();
//
//
// --- Key Takeaways ---
// - A Promise is a guarantee: it will settle exactly once, either as fulfilled (with data) or rejected (with an error) — never both, never neither.
// - Promises fix the "trust issues" of plain callbacks (Inversion of Control) by giving you an object to attach handlers to, rather than handing your logic away.
// - Multiple `.then()` handlers can be attached to the same Promise, and each will get the same resolved value once it settles.
// - Next episode covers how to **create your own Promise**, chain multiple `.then()` calls, and handle errors with `.catch()`.
//
