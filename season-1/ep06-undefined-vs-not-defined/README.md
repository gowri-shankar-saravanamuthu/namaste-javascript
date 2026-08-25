# EPISODE 6: UNDEFINED VS NOT DEFINED IN JS

**Playlist:** Namaste JavaScript (Season 1) — Akshay Saini

## What this lecture covers

- Clarifies the difference between `undefined` and "not defined" — a very commonly confused pair of terms.
- JavaScript is a **loosely-typed / weakly-typed language** — a variable can hold values of any data type over its lifetime.

## Key Concepts

- **`undefined`**: Memory has been allocated for the variable (during the memory creation phase), but no value has been assigned to it yet. It's a special placeholder value, and also a type in JavaScript.
- **Not defined**: The variable doesn't even exist in memory — it was never declared. Accessing it throws a `ReferenceError`.
- Assigning `undefined` to a variable explicitly (`var a = undefined`) is technically allowed but considered **bad practice**, since JS itself uses `undefined` as its own placeholder and it becomes confusing.

## Example

```javascript
(function () {
  var a;
  console.log(a); // undefined
  a = 10;
  console.log(a); // 10
  a = "Hello World!";
  console.log(a); // Hello World! (dynamically typed)

  console.log(b); // Uncaught ReferenceError: b is not defined
})();
```

## Key Takeaways

- `undefined` ≠ `not defined`. `undefined` means "declared but no value assigned"; "not defined" means "never declared at all."
- JS engines allocate `undefined` during the memory creation phase of hoisting.
- Avoid manually assigning `undefined` to variables in your code.
