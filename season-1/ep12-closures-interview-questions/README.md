# EPISODE 12: FAMOUS INTERVIEW QUESTIONS FT. CLOSURES

**Playlist:** Namaste JavaScript (Season 1) — Akshay Saini

## What this lecture covers

- A rapid-fire set of the most commonly-asked JS interview questions built around closures, testing conceptual understanding rather than memorization.

## Topics/Questions covered

1. **What is a closure?** — a function along with reference to its outer/lexical environment forms a closure. (Recap from Ep. 10.)
2. **Advantages of closures**:
   - Module design pattern (data privacy/encapsulation)
   - Currying
   - Memoization
   - Data hiding and encapsulation
   - `setTimeout` behavior (as seen in Ep. 11)
3. **Disadvantages of closures**:
   - **Over-consumption of memory** — since closed-over variables aren't garbage collected as long as the closure exists.
   - Each closure keeps a reference to its outer scope's variables, so if not handled carefully, this can lead to **memory leaks**.
   - Modern JS engines (like V8) use "smart" garbage collection — via an algorithm called **Garbage Collection (Mark & Sweep)** — to clean up variables that are no longer referenced by any closure.

## Examples

**Example 1: Data hiding using closures (bad way)**
```javascript
(function () {
  // Without closures — anyone can modify counter directly (bad)
  var count = 0;
  function increment() {
    count++;
  }
})();
```

**Example 2: Data hiding with closures (good way)**
```javascript
(function () {
  // With closures — counter is private, only accessible via returned functions
  function counter() {
    var count = 0;
    return function increment() {
      count++;
      console.log(count);
    };
  }
  var counter1 = counter();
  counter1(); // 1
  counter1(); // 2

  var counter2 = counter(); // independent closure, separate 'count'
  counter2(); // 1
})();
```

**Example 3: Constructor function approach (encapsulation with closures)**
```javascript
(function () {
  function Counter() {
    var count = 0;
    this.incrementCounter = function () {
      count++;
      console.log(count);
    };
    this.decrementCounter = function () {
      count--;
      console.log(count);
    };
  }
  var counter1 = new Counter();
  counter1.incrementCounter(); // 1
  counter1.incrementCounter(); // 2
  counter1.decrementCounter(); // 1
})();
```

## Key Takeaways

- Closures enable powerful patterns like data privacy, currying, and memoization.
- The main downside is potential memory overuse if not managed — mitigated by the JS engine's garbage collector.
- Interviewers love asking "predict the output" questions around closures because they reveal true understanding of scope and execution context.
