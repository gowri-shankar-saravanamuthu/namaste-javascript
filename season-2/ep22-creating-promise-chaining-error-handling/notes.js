// ======================================================================
// EPISODE 22 (S2 EP 3): CREATING A PROMISE, CHAINING & ERROR HANDLING
// ======================================================================
//
// **Playlist:** Namaste JavaScript Season 2 — Akshay Saini
//
//
// --- What this lecture covers ---
// - How to **create your own Promise** using the `Promise` constructor.
// - How to **chain** multiple `.then()` calls together to avoid Callback Hell.
// - How to handle errors with `.catch()`.
//
//
// --- Creating a Promise ---

// --- Code Example 1 ---
(function () {

  const cart = ["shoes", "pants", "kurta"];

  function createOrder(cart) {
    return new Promise(function (resolve, reject) {
      // validation
      if (!validateCart(cart)) {
        const err = new Error("Cart is not valid");
        reject(err);
      }
      // logic for creating order
      const orderId = "12345";
      if (orderId) {
        setTimeout(function () {
          resolve(orderId); // resolves the promise with a value
        }, 5000);
      }
    });
  }
})();
// - `resolve` and `reject` are functions provided by the `Promise` constructor: call `resolve(value)` on success, `reject(error)` on failure.
//
//
// --- Chaining `.then()` ---

// --- Code Example 2 ---
(function () {

  createOrder(cart)
    .then(function (orderId) {
      return proceedToPayment(orderId);
    })
    .then(function (paymentInfo) {
      return showOrderSummary(paymentInfo);
    })
    .then(function (balance) {
      updateWalletBalance(balance);
    });
})();
// - Each `.then()` **must return** something (a value or another Promise) so the next `.then()` in the chain can receive it — this avoids the Pyramid of Doom / Callback Hell entirely by flattening the code.
// - If you forget to `return` inside a `.then()`, the next `.then()` receives `undefined`.
//
//
// --- Error Handling with `.catch()` ---

// --- Code Example 3 ---
(function () {

  createOrder(cart)
    .then(function (orderId) {
      return proceedToPayment(orderId);
    })
    .catch(function (err) {
      console.log(err.message); // catches errors from ANY preceding .then() in the chain
    });
})();
// - `.catch()` catches errors/rejections from **any** point earlier in the promise chain — a single `.catch()` at the end can handle failures from multiple steps.
// - You can also place a `.catch()` in the middle of a chain to handle an error at that specific point and continue the chain afterward.
//
//
// --- Key Takeaways ---
// - Create Promises with `new Promise((resolve, reject) => {...})`.
// - Chaining `.then()` calls (each returning a value/promise) replaces nested callbacks and solves Callback Hell.
// - `.catch()` provides centralized error handling for the whole chain.
// - This is the foundation for `async/await`, which is essentially syntactic sugar over Promises — covered next.
//
