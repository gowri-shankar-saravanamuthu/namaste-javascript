# Season 1 - Namaste JavaScript 📚

Welcome to Season 1 of the Namaste JavaScript course! This season covers the **fundamentals of JavaScript** including execution context, scope, closures, and functional programming concepts.

## 📖 Episode Guide

### Episode 1: Execution Context
**File:** [`notes.js`](./ep01-execution-context/notes.js)

Learn about JavaScript's Global Execution Context (GEC), how the JavaScript engine creates and manages execution contexts, and how code is executed in phases.

**Topics Covered:**
- Global Execution Context
- Memory Allocation Phase
- Code Execution Phase
- Variable and Function Declaration

---

### Episode 2: How JS Code is Executed & Call Stack
**File:** [`notes.js`](./ep02-call-stack/notes.js)

Understand how JavaScript manages function calls through the Call Stack and how the execution context is created for each function invocation.

**Topics Covered:**
- Call Stack Mechanism
- Function Execution Context
- Call Stack Operations (Push/Pop)
- Stack Overflow

---

### Episode 3: Hoisting
**File:** [`notes.js`](./ep03-hoisting/notes.js)

Discover JavaScript's hoisting behavior for variables and functions, and how variable declarations are moved to the top of the scope.

**Topics Covered:**
- Variable Hoisting
- Function Hoisting
- `undefined` vs Reference Error
- Temporal Dead Zone

---

### Episode 4: Functions and Variable Environments
**File:** [`notes.js`](./ep04-functions-and-variable-environments/notes.js)

Explore how each function creates its own variable environment and how scope chains work across nested functions.

**Topics Covered:**
- Function Scope
- Variable Environments
- Nested Function Scopes
- Scope Resolution

---

### Episode 5: Shortest JS Program, window & `this` Keyword
**File:** [`notes.js`](./ep05-shortest-js-program-window-this/notes.js)

Understand the global object (`window`), the `this` keyword in global context, and what constitutes the shortest valid JavaScript program.

**Topics Covered:**
- Global Object (`window`)
- The `this` Keyword
- Global Scope
- Shortest JS Program

---

### Episode 6: `undefined` vs Not Defined
**File:** [`ep06-undefined-vs-not-defined/notes.js`](./ep06-undefined-vs-not-defined/notes.js)

Learn the crucial difference between `undefined` (a value) and "not defined" (an error).

**Topics Covered:**
- `undefined` as a Special Value
- ReferenceError: Not Defined
- Variable Declaration vs Assignment
- Accessing Undeclared Variables

---

### Episode 7: The Scope Chain, Scope & Lexical Environment
**File:** [`ep07-scope-chain-lexical-environment/notes.js`](./ep07-scope-chain-lexical-environment/notes.js)

Master the scope chain mechanism and how JavaScript resolves variable lookups through lexical environments.

**Topics Covered:**
- Scope Chain
- Lexical Environment
- Outer Environment References
- Variable Lookup Process

---

### Episode 8: `let` & `const`, Temporal Dead Zone
**File:** [`ep08-let-const-temporal-dead-zone/notes.js`](./ep08-let-const-temporal-dead-zone/notes.js)

Explore block-scoped variables and the Temporal Dead Zone (TDZ) concept.

**Topics Covered:**
- `let` vs `const`
- Block Scope
- Temporal Dead Zone
- Hoisting Behavior of `let`/`const`

---

### Episode 9: Block Scope & Shadowing
**File:** [`ep09-block-scope-and-shadowing/notes.js`](./ep09-block-scope-and-shadowing/notes.js)

Understand block scope with `let` and `const`, and variable shadowing across scopes.

**Topics Covered:**
- Block Scope Concept
- Variable Shadowing
- Shadowing Across Scopes
- Best Practices

---

### Episode 10: Closures
**File:** [`ep10-closures/notes.js`](./ep10-closures/notes.js)

Learn one of the most important JavaScript concepts - closures - and how functions retain access to their lexical scope.

**Topics Covered:**
- Closure Definition
- Lexical Scoping
- Function Factory Pattern
- Closure Examples

---

### Episode 11: `setTimeout` + Closures Interview Question
**File:** [`ep11-settimeout-plus-closures/notes.js`](./ep11-settimeout-plus-closures/notes.js)

A classic interview question combining `setTimeout` and closures.

**Topics Covered:**
- `setTimeout` Behavior
- Closure Inside `setTimeout`
- Loop Variables (var vs let)
- Solution Approaches

---

### Episode 12: Famous Interview Questions ft. Closures
**File:** [`ep12-closures-interview-questions/notes.js`](./ep12-closures-interview-questions/notes.js)

Practice with multiple closure-based interview questions and solutions.

**Topics Covered:**
- Closure Interview Questions
- Problem-Solving Patterns
- Common Pitfalls
- Best Solutions

---

### Episode 13: First Class Functions ft. Anonymous Functions
**File:** [`ep13-first-class-functions/notes.js`](./ep13-first-class-functions/notes.js)

Understand JavaScript's first-class function support and anonymous functions.

**Topics Covered:**
- First-Class Functions
- Anonymous Functions
- Function Expressions
- Arrow Functions Introduction

---

### Episode 14: Callback Functions ft. Event Listeners
**File:** [`ep14-callback-functions-event-listeners/notes.js`](./ep14-callback-functions-event-listeners/notes.js)

Learn about callbacks and how they're used with event listeners.

**Topics Covered:**
- Callback Functions
- Event Listeners
- Asynchronous Callbacks
- Callback Hell Introduction

---

### Episode 15: Asynchronous JavaScript & Event Loop
**File:** [`ep15-async-js-event-loop/notes.js`](./ep15-async-js-event-loop/notes.js)

Dive deep into JavaScript's event loop and how asynchronous code execution works.

**Topics Covered:**
- Event Loop
- Microtask Queue
- Macrotask Queue
- Asynchronous Execution Flow

---

### Episode 16: JS Engine Exposed — Google's V8 Architecture
**File:** [`ep16-js-engine-v8-architecture/notes.js`](./ep16-js-engine-v8-architecture/notes.js)

Explore how the V8 JavaScript engine parses and executes JavaScript code.

**Topics Covered:**
- V8 Architecture
- Parsing Phase
- JIT Compilation
- Optimization

---

### Episode 17: Trust Issues with `setTimeout()`
**File:** [`ep17-trust-issues-with-settimeout/notes.js`](./ep17-trust-issues-with-settimeout/notes.js)

Understand the quirks and challenges of using `setTimeout` in JavaScript.

**Topics Covered:**
- `setTimeout` Guarantees (or Lack Thereof)
- Event Loop Integration
- Callback Delays
- Best Practices

---

### Episode 18: Higher-Order Functions ft. Functional Programming
**File:** [`ep18-higher-order-functions/notes.js`](./ep18-higher-order-functions/notes.js)

Learn about higher-order functions and functional programming paradigms in JavaScript.

**Topics Covered:**
- Higher-Order Functions
- Function Composition
- Functional Programming Concepts
- Practical Examples

---

### Episode 19: `map`, `filter` & `reduce`
**File:** [`ep19-map-filter-reduce/notes.js`](./ep19-map-filter-reduce/notes.js)

Master the essential array methods: map, filter, and reduce.

**Topics Covered:**
- `Array.prototype.map()`
- `Array.prototype.filter()`
- `Array.prototype.reduce()`
- Functional Array Operations

---

## 🚀 How to Run

To run any episode's notes:

```bash
node season-1/ep01-execution-context/notes.js
node season-1/ep02-call-stack/notes.js
# ... and so on
```

## 📊 Summary

Season 1 covers **19 episodes** of JavaScript fundamentals, from basic execution context concepts to advanced functional programming techniques. Each file contains runnable code examples and detailed explanations as comments.

## 🔗 Navigation

- [← Back to Main README](../README.md)
- [Season 2 →](../season-2/README.md)

---

**Credit:** Based on Akshay Saini's Namaste JavaScript series. All concepts belong to the original instructor.
