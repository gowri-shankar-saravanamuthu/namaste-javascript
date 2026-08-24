// ======================================================================
// EPISODE 2: HOW JS CODE IS EXECUTED & CALL STACK
// ======================================================================
//
// **Playlist:** Namaste JavaScript (Season 1) — Akshay Saini
//
//
// --- What this lecture covers ---
// - How JavaScript manages the creation and deletion of multiple execution contexts using the **Call Stack**.
// - Every time a function is invoked, a new execution context is created and **pushed** onto the call stack. When the function finishes, its execution context is **popped** off.
//
//
// --- Key Concepts ---
// - The **Global Execution Context (GEC)** sits at the bottom of the call stack and is created first.
// - Each function call creates its own **Function Execution Context (FEC)**, pushed on top of the stack.
// - The call stack maintains the **order of execution** of execution contexts (LIFO — Last In, First Out).
// - Other names for the call stack: Program Stack, Control Stack, Runtime Stack, Machine Stack, Execution Context Stack.
// - When the whole program finishes, the GEC is popped off and the call stack becomes empty.
//
//
// --- Example ---

// --- Code Example 1 ---
(function () {

  function a() {
    var x = 10;
    b();
  }
  function b() {
    var y = 20;
  }
  a();
})();
// Call stack progression:
// 1. `GEC` pushed
// 2. `a()` pushed → `[GEC, a]`
// 3. `b()` pushed → `[GEC, a, b]`
// 4. `b()` finishes → popped → `[GEC, a]`
// 5. `a()` finishes → popped → `[GEC]`
// 6. Program ends → `GEC` popped → `[]`
//
//
// --- Key Takeaways ---
// - The call stack keeps track of where the program is in its execution.
// - It manages execution contexts in a strict LIFO order.
// - Understanding the call stack is essential for understanding recursion, stack overflow errors, and async behavior later (event loop).
//
