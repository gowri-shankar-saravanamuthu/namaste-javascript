# EPISODE 3: HOISTING IN JAVASCRIPT (VARIABLES & FUNCTIONS)

**Playlist:** Namaste JavaScript (Season 1) — Akshay Saini

## What this lecture covers

- **Hoisting** is a phenomenon in JS where you can access variables and functions even before initializing/defining them, without getting an error — due to the memory creation phase of the execution context.
- One of the most famous JS interview questions and one of the most misunderstood concepts.

## Key Concepts

- **Variables** declared with `var` are hoisted and initialized with `undefined`.
- **Function declarations** are hoisted completely (with their full definition/body).
- If you try to access a variable before declaration without `var`/`let`/`const` at all, you get `ReferenceError: x is not defined`.
- If you access a `var` variable before assignment, you get `undefined` (not an error) — this is the essence of hoisting.

## Example

```javascript
(function () {
  getName(); // Namaste JavaScript
  console.log(x); // undefined
  var x = 7;
  function getName() {
    console.log("Namaste JavaScript");
  }
})();
```

- This works because in the **memory creation phase**, `x` is allocated memory and set to `undefined`, and `getName` has its entire function code stored in memory — before a single line of code is executed.
- In many other languages this would be an outright error; in JS it isn't, because of hoisting.

## Key Takeaways

- Hoisting happens because of the memory creation phase of execution context.
- `var` hoists as `undefined`; function declarations hoist with their full body.
- This sets up the foundation for understanding `let`/`const` and the Temporal Dead Zone in later episodes.
