# EPISODE 11: SETTIMEOUT + CLOSURES INTERVIEW QUESTION

**Playlist:** Namaste JavaScript (Season 1) — Akshay Saini

## What this lecture covers

- A famous JS interview question combining `setTimeout` and closures: printing numbers 1 to 5 with a 1-second delay between each, using a loop.

## The Problem

```javascript
(function () {
  function x() {
    for (var i = 1; i <= 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
  }
  x();
})();
```

- **Expected**: 1, 2, 3, 4, 5 (one per second)
- **Actual output**: 6, 6, 6, 6, 6

### Why?

- `var` is function-scoped, so there's only **one copy** of `i` shared by all 5 timer callbacks (a closure over the same reference).
- By the time any `setTimeout` callback actually runs (after the delay), the loop has already finished, and `i` has become `6`.
- All 5 callbacks close over the **same** `i`, and they all read its final value: `6`.

## The Fix (using `let`)

```javascript
(function () {
  function x() {
    for (let i = 1; i <= 5; i++) {
      setTimeout(function () {
        console.log(i);
      }, i * 1000);
    }
  }
  x();
})();
```

- `let` is **block-scoped**, so a **new copy of `i`** is created for **each iteration** of the loop.
- Each `setTimeout` callback closes over its own separate `i`, correctly printing 1, 2, 3, 4, 5.

## Fix using `var` (without switching to `let`)

```javascript
(function () {
  function x() {
    for (var i = 1; i <= 5; i++) {
      function close(i) {
        setTimeout(function () {
          console.log(i);
        }, i * 1000);
      }
      close(i); // create a new function scope per iteration to capture 'i'
    }
  }
  x();
})();
```

## Key Takeaways

- This question tests deep understanding of closures + block scope vs function scope.
- `let` creates a new binding per loop iteration; `var` does not.
- If you must use `var`, wrap the logic in a helper function invocation to force a new scope per iteration and capture the current value of `i`.
