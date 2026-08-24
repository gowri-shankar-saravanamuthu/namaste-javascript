// ======================================================================
// EPISODE 24 (S2 EP 5): PROMISE APIS (ALL, ALLSETTLED, RACE, ANY) + INTERVIEW QUESTIONS
// ======================================================================
//
// **Playlist:** Namaste JavaScript Season 2 — Akshay Saini
//
//
// --- What this lecture covers ---
// - The four static Promise combinator methods: `Promise.all()`, `Promise.allSettled()`, `Promise.race()`, and `Promise.any()` — used when working with **multiple promises at once**.
// - Follow-up interview questions on each.
//
//
// --- `Promise.all()` ---
// - Takes an array of promises. Resolves when **all** promises resolve, returning an array of their results (in the same order).
// - If **any one** promise rejects, `Promise.all()` immediately rejects with that error — "fail fast" behavior — even if other promises are still pending.

// --- Code Example 1 ---
(function () {

  Promise.all([p1, p2, p3])
    .then((results) => console.log(results))
    .catch((err) => console.log(err));
})();
//
//
// --- `Promise.allSettled()` ---
// - Takes an array of promises. Waits for **all** promises to settle (either resolved or rejected) — never rejects itself.
// - Returns an array of objects describing each outcome: `{status: "fulfilled", value: ...}` or `{status: "rejected", reason: ...}`.

// --- Code Example 2 ---
(function () {

  Promise.allSettled([p1, p2, p3]).then((results) => console.log(results));
})();
//
//
// --- `Promise.race()` ---
// - Takes an array of promises. Settles (resolves or rejects) as soon as the **first** promise among them settles — whichever finishes first, wins, regardless of success or failure.

// --- Code Example 3 ---
(function () {

  Promise.race([p1, p2, p3]).then((res) => console.log(res)).catch((err) => console.log(err));
})();
//
//
// --- `Promise.any()` ---
// - Takes an array of promises. Resolves as soon as **any one** promise **fulfills** (ignores rejections along the way).
// - Only rejects if **all** promises reject — in that case it throws an `AggregateError` containing all the individual errors.

// --- Code Example 4 ---
(function () {

  Promise.any([p1, p2, p3]).then((res) => console.log(res)).catch((err) => console.log(err.errors));
})();
//
//
// --- Comparison Table ---
// | API | Resolves when | Rejects when |
// |---|---|---|
// | `Promise.all` | all promises fulfill | any one rejects (fails fast) |
// | `Promise.allSettled` | all promises settle (either way) | never rejects |
// | `Promise.race` | first promise settles (fulfilled or rejected) | first promise settles as rejected |
// | `Promise.any` | first promise fulfills | all promises reject |
//
//
// --- Key Takeaways ---
// - These combinators are essential for handling multiple concurrent async operations.
// - Choose based on the requirement: need everything to succeed → `all`; need results regardless of failure → `allSettled`; need the fastest response → `race`; need the first successful response → `any`.
// - Common interview questions test the precise resolve/reject behavior differences between these four APIs.
//
