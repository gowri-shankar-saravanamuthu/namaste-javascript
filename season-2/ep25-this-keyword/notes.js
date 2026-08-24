// ======================================================================
// EPISODE 25 (S2 EP 6): `THIS` KEYWORD IN JAVASCRIPT
// ======================================================================
//
// **Playlist:** Namaste JavaScript Season 2 — Akshay Saini
//
//
// --- What this lecture covers ---
// - A deep, complete dive into the `this` keyword — how its value is determined depending on **where and how** it's used/invoked.
//
//
// --- Key Concepts by Context ---
//
// 1. `this` in the Global Space

// --- Code Example 1 ---
(function () {

  console.log(this); // window object (in browsers)
})();
//
// 2. `this` inside a Function (regular function call)
// - In **non-strict mode**: `this` refers to the `window`/global object (this is called **"this substitution"** — JS substitutes `undefined`/`null` with the global object).
// - In **strict mode**: `this` is `undefined`.

// --- Code Example 2 ---
(function () {

  function x() {
    console.log(this); // undefined in strict mode; window otherwise
  }
  x();
  window.x(); // also refers to global object
})();
//
// 3. `this` inside a Method (object method call)
// - `this` refers to the object the method is called on (the object before the dot).

// --- Code Example 3 ---
(function () {

  const obj = {
    a: 10,
    x: function () {
      console.log(this.a); // 10 — this === obj
    },
  };
  obj.x();
})();
//
// 4. `call`, `apply`, `bind` — explicitly setting `this`

// --- Code Example 4 ---
(function () {

  const student = {
    name: "Alok",
    printName: function () {
      console.log(this.name);
    },
  };
  student.printName(); // Alok

  const student2 = { name: "Kajal" };
  student.printName.call(student2); // Kajal — `call` sets 'this' explicitly
})();
// - `call(thisArg, arg1, arg2, ...)` — invokes immediately with individual arguments.
// - `apply(thisArg, [args])` — invokes immediately with arguments as an array.
// - `bind(thisArg, ...)` — returns a **new function** with `this` permanently bound (doesn't invoke immediately).
//
// 5. `this` inside Arrow Functions
// - Arrow functions **do not have their own `this`**. They pick up `this` from their **enclosing lexical context** (where they're written, not where they're called).

// --- Code Example 5 ---
(function () {

  const obj = {
    a: 10,
    x: () => {
      console.log(this); // NOT obj — refers to the enclosing (global/window) scope's this
    },
  };
  obj.x();

  const obj2 = {
    a: 10,
    x: function () {
      const y = () => {
        console.log(this); // this refers to obj2 — inherited from enclosing function x
      };
      y();
    },
  };
  obj2.x();
})();
//
// 6. `this` inside a Class
// - Inside class methods and constructors, `this` refers to the **current instance** of the class.
//
// 7. `this` in DOM Event Handlers

// --- Code Example 6 ---
(function () {

  document.getElementById("btn").addEventListener("click", function () {
    console.log(this); // refers to the button element (HTML element that fired the event)
  });
})();
//
//
// --- Key Takeaways ---
// - `this` is dynamic — its value depends on **how a function is called**, not where it's defined (except arrow functions).
// - Global scope: `this === window`.
// - Regular function call: `this` is `window` (non-strict) or `undefined` (strict).
// - Method call: `this` is the object before the dot.
// - `call`/`apply`/`bind` let you explicitly control what `this` refers to.
// - Arrow functions inherit `this` lexically from their surrounding scope — never bind their own.
// - This is one of the trickiest and most interview-tested JS topics — understanding all these rules together is key to mastering it.
//
