# EPISODE 9: BLOCK SCOPE & SHADOWING IN JS

**Playlist:** Namaste JavaScript (Season 1) — Akshay Saini

## What this lecture covers

- What a **block** (`{ }`) is and how it creates its own scope for `let`/`const`.
- The concept of **shadowing** — when a variable declared in an inner (block) scope has the same name as one in an outer scope.

## Key Concepts

- A **block** (or compound statement) is used to group multiple JS statements into one group, denoted by `{ }`.
- `let` and `const` are **block-scoped** — they live inside a separate memory space specific to that block. `var` is **function-scoped**, not block-scoped, so it "leaks" outside blocks.
- **Shadowing**: when a variable in a block has the same name as a variable in an outer scope, the inner (block-scoped) variable "shadows"/hides the outer one — but only within that block.
- Shadowing `var` vs shadowing `let`/`const` behaves differently: shadowing a `var` inside a block actually **modifies the outer `var`** too (since `var` isn't block-scoped), whereas shadowing a `let`/`const` keeps them separate.
- **Illegal shadowing**: you cannot shadow a `let` variable with a `var` variable of the same name inside a block (this throws a `SyntaxError`). But you *can* shadow a `var` with a `let` inside a block.

## Examples

**Example 1: Let shadowing (proper)**
```javascript
(function () {
  let a = 100;
  {
    let a = 10; // shadows outer 'a' within this block only
    console.log(a); // 10
  }
  console.log(a); // 100 — outer 'a' untouched
})();
```

**Example 2: Var shadowing (modifies outer)**
```javascript
(function () {
  var b = 100;
  {
    var b = 10; // modifies same 'b' since var is function/global scoped
    console.log(b); // 10
  }
  console.log(b); // 10 — outer 'b' got overwritten!
})();
```

**Example 3: Illegal shadowing (let by var)**
```javascript
(function () {
  let c = 10;
  {
    // var c = 20; // SyntaxError: Identifier 'c' has already been declared
  }
})();
```

## Key Takeaways

- `let`/`const` are block-scoped; `var` is function/global-scoped.
- Shadowing lets an inner block variable take priority within that block without affecting the outer variable — but only for `let`/`const`.
- Mixing `var` and `let`/`const` for shadowing the same name can lead to illegal shadowing errors.
- In arrow/nested functions, shadowing (called "function scope" shadowing) works fine even when mixing `var` and `let` because functions create a whole new scope, not just a block.
