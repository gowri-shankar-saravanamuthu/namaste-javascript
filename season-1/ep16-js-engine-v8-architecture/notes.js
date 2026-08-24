// ======================================================================
// EPISODE 16: JS ENGINE EXPOSED, GOOGLE'S V8 ARCHITECTURE
// ======================================================================
//
// **Playlist:** Namaste JavaScript (Season 1) — Akshay Saini
//
//
// --- What this lecture covers ---
// - What a **JavaScript Engine** actually is, and a walkthrough of the internal architecture of **Google's V8 Engine** (used in Chrome and Node.js).
//
//
// --- Key Concepts ---
// - A **JS Engine** is NOT a machine — it's software/program written (often in a low-level language like C++) that converts high-level JS code into low-level machine code that a computer can understand and execute.
// - Popular JS engines: **V8** (Google, used in Chrome & Node.js), **SpiderMonkey** (Firefox), **JavaScriptCore/Chakra** (Safari/older Edge), etc.
// - JS engines follow the **ECMAScript standard** — a specification/governing body that defines how a JS engine should behave.
//
// How code is processed by the engine
// 1. **Parsing**:
//    - The code is broken into **tokens** (Lexical/Tokenization phase).
//    - A syntax parser converts tokens into an **AST (Abstract Syntax Tree)** — a tree representation of the code's syntactic structure.
// 2. **Compilation**:
//    - JS uses **JIT (Just-In-Time) Compilation** — a mix of interpretation and compilation.
//    - The **Interpreter** (in V8, called **Ignition**) converts the AST into bytecode quickly, allowing code to start running fast.
//    - The **Compiler** (in V8, called **TurboFan**) optimizes "hot" (frequently executed) code paths in parallel, replacing slower bytecode with optimized machine code on the fly.
//    - This happens simultaneously with execution — hence "Just-In-Time."
// 3. **Execution**:
//    - The engine needs two components to execute code: the **Memory Heap** (where memory allocation happens) and the **Call Stack** (where execution contexts are tracked).
//    - **Garbage Collector**: cleans up unused memory automatically. V8 uses an algorithm called **Mark and Sweep**.
//
//
// --- Key Takeaways ---
// - JS engines are software, not physical machines, and convert JS into machine code.
// - V8's pipeline: Parsing (tokens → AST) → Compilation (Ignition interpreter + TurboFan JIT compiler) → Execution (Memory Heap + Call Stack) → Garbage Collection.
// - Understanding the engine internals helps explain why JS can feel fast despite being interpreted, and how memory management (and closures) actually work under the hood.
//
