# Namaste JavaScript — Lecture Notes Project

Notes based on **Akshay Saini's** YouTube playlists:
- **Namaste JavaScript** (Season 1) — 19 episodes
- **Namaste JavaScript Season 2** — 6 episodes released to date

Each episode has its own folder with a `notes.js` file summarizing exactly what was taught in that lecture — explanations as comments, with the code examples kept as **actual runnable JavaScript**, each wrapped in its own `(function () { ... })()` scope so multiple examples in the same file don't clash (e.g. redeclared `function x()` across examples).

Run any episode's notes directly with Node to see the output live:
```bash
node season-1/ep11-settimeout-plus-closures/notes.js
```

## 📁 Structure

```
namaste-javascript/
├── season-1/
│   ├── ep01-execution-context/
│   ├── ep02-call-stack/
│   ├── ep03-hoisting/
│   ├── ep04-functions-and-variable-environments/
│   ├── ep05-shortest-js-program-window-this/
│   ├── ep06-undefined-vs-not-defined/
│   ├── ep07-scope-chain-lexical-environment/
│   ├── ep08-let-const-temporal-dead-zone/
│   ├── ep09-block-scope-and-shadowing/
│   ├── ep10-closures/
│   ├── ep11-settimeout-plus-closures/
│   ├── ep12-closures-interview-questions/
│   ├── ep13-first-class-functions/
│   ├── ep14-callback-functions-event-listeners/
│   ├── ep15-async-js-event-loop/
│   ├── ep16-js-engine-v8-architecture/
│   ├── ep17-trust-issues-with-settimeout/
│   ├── ep18-higher-order-functions/
│   └── ep19-map-filter-reduce/
└── season-2/
    ├── ep20-callback-hell/
    ├── ep21-promises/
    ├── ep22-creating-promise-chaining-error-handling/
    ├── ep23-async-await/
    ├── ep24-promise-apis/
    └── ep25-this-keyword/
```

## 📌 Season 1 — Topic List
1. Execution Context
2. How JS Code is Executed & Call Stack
3. Hoisting (variables & functions)
4. Functions and Variable Environments
5. Shortest JS Program, window & `this` keyword
6. `undefined` vs not defined
7. The Scope Chain, Scope & Lexical Environment
8. `let` & `const`, Temporal Dead Zone
9. Block Scope & Shadowing
10. Closures
11. `setTimeout` + Closures Interview Question
12. Famous Interview Questions ft. Closures
13. First Class Functions ft. Anonymous Functions
14. Callback Functions ft. Event Listeners
15. Asynchronous JavaScript & Event Loop
16. JS Engine Exposed — Google's V8 Architecture
17. Trust Issues with `setTimeout()`
18. Higher-Order Functions ft. Functional Programming
19. `map`, `filter` & `reduce`

## 📌 Season 2 — Topic List
20. Callback Hell
21. Promises
22. Creating a Promise, Chaining & Error Handling
23. `async`/`await`
24. Promise APIs (`all`, `allSettled`, `race`, `any`) + Interview Questions
25. `this` keyword in JavaScript

> Note: Season 2 is an ongoing series by Akshay Saini — this project covers all episodes publicly released as of this writing (6 episodes). New episodes can be added as folders following the same naming pattern when released.

## 🙏 Credit
All concepts and teaching belong to **Akshay Saini** (YouTube: @akshaymarch7). These are personal study notes summarizing his lectures for revision and interview prep.
