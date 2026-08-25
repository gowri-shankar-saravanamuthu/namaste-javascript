# EPISODE 13: FIRST CLASS FUNCTIONS FT. ANONYMOUS FUNCTIONS

**Playlist:** Namaste JavaScript (Season 1) — Akshay Saini

## What this lecture covers

- **First-class functions** (also called "first-class citizens") — a concept where functions in JS can be treated like any other value.
- The difference between **function statements**, **function expressions**, **anonymous functions**, **named function expressions**, and **arrow functions** (early intro).

## Key Concepts

### Function Statement (Declaration)
```javascript
function a() { console.log("a called"); }
```
- Hoisted fully — can be called before its definition in code.

### Function Expression
```javascript
var b = function () { console.log("b called"); };
```
- Not hoisted the same way — `b` is `undefined` until this line runs
- Calling `b()` before this line throws `TypeError: b is not a function`.

### Anonymous Function
```javascript
function () {} // SyntaxError: Function statements require a function name
```
- A function without a name
- Cannot be used standalone as a statement (syntax error) — must be used where a value is expected, e.g., assigned to a variable.

### Named Function Expression
```javascript
var c = function xyz() { console.log("xyz called"); };
c(); // works
xyz(); // ReferenceError: xyz is not defined
```
- A function expression with a name, but that name is only accessible **inside** the function itself, not outside.

### Parameters vs Arguments
- **Parameters** are the labels in the function definition
- **Arguments** are the actual values passed during a function call

### First-Class Functions
```javascript
function fn() {}
console.log(fn); // ƒ fn() {}    — can be logged
var x = function () {};
console.log(x); // can be assigned

function outer(param) { param(); } // can be passed as argument
outer(function () { console.log("passed as argument"); });
```
- Functions can be passed as arguments to other functions
- Functions can be returned from other functions
- Functions can be assigned to variables
- Functions can be treated as values, just like numbers or strings

## Key Takeaways

- Function statements are hoisted with their full body; function expressions are not.
- Anonymous functions can't exist as standalone statements — they need to be assigned or passed somewhere.
- Named function expressions scope their name only within themselves.
- Because JS treats functions as first-class citizens, we can pass functions around like any other value — this is the foundation for callbacks, higher-order functions, and functional programming.
