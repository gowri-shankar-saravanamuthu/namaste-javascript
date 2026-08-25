# EPISODE 7: THE SCOPE CHAIN, SCOPE & LEXICAL ENVIRONMENT

**Playlist:** Namaste JavaScript (Season 1) — Akshay Saini

## What this lecture covers

- What **scope** means in JS, and how the **scope chain** allows nested functions to access variables from their outer (parent) scopes.
- Introduces the concept of the **Lexical Environment** — the local memory of an execution context plus a reference to the lexical environment of its parent.

## Key Concepts

- **Lexical / Static Scope**: refers to the fact that a function's ability to access variables from its parent scope is determined by where the function is physically written (nested) in the code.
- Every execution context has a reference to its parent's lexical environment. This chain of references is the **Scope Chain**.
- When a variable is accessed, JS looks for it first in the local scope; if not found, it looks up the scope chain to parent scopes, all the way to the global scope. If not found anywhere, a `ReferenceError` is thrown.

## Examples

**Case 1: Separate, non-nested functions**
```javascript
(function () {
  function a() {
    console.log(b); // ReferenceError: b is not defined
  }
  var b = 10;
  a();
})();
```

**Case 2: Nested functions — inner function CAN access outer variables**
```javascript
(function () {
  function a() {
    var x = 6;
    c();
    function c() {
      console.log(x); // 6 — accessed via scope chain
    }
  }
  a();
})();
```

**Case 3: Deeply nested functions can access variables from any outer scope**
```javascript
(function () {
  function a() {
    var d = 10;
    b();
    function b() {
      c();
      function c() {
        console.log(d); // 10 — found by walking up the scope chain
      }
    }
  }
  a();
})();
```

## Key Takeaways

- Lexical environment = local memory + reference to parent's lexical environment.
- The scope chain lets inner functions access variables from all their ancestor scopes.
- Outer functions **cannot** access inner functions' variables — access only flows inward-to-outward, never the reverse.
- This is the foundation for understanding **closures** in the next few episodes.
