# `biome-ignore` issue repro

Reproduce as follows:

```shell
git clone https://github.com/lgarron/biome-ignore-repro && cd biome-ignore-repro
npm install
npx @biomejs/biome check
```

The `// biome-ignore lint/complexity/useArrowFunction` line in `allSettled(…)` is ignored and the corresponding error still occurs.

## Biome output

```
╭─── /Users/lgarron/Code/git/github.com/lgarron/biome-ignore-repro ───────────────────────────────────────────────────────────────────────────────────────────────
├─  main  | ✔ 
├─ lgarron@Germain
│ npx biome check
┴
/Users/lgarron/Code/git/github.com/lgarron/biome-ignore-repro/repro.ts:20:16 lint/complexity/useArrowFunction  FIXABLE  ━━━━━━━━━━

  ✖ This function expression can be turned into an arrow function.
  
    18 │   // Noted that that the following line is placed in the location automatically selected by Biome when using "Suppress rule lint/complexity/useArrowFunction".
    19 │   // biome-ignore lint/complexity/useArrowFunction: repro case
  > 20 │   return new P(function (_resolve, reject) {
       │                ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
  > 21 │     if (!(arr && typeof arr.length !== "undefined")) {
        ...
  > 28 │     }
  > 29 │   });
       │   ^
    30 │ }
    31 │ 
  
  ℹ Function expressions that don't use this can be turned into arrow functions.
  
  ℹ Safe fix: Use an arrow function instead.
  
    18 18 │     // Noted that that the following line is placed in the location automatically selected by Biome when using "Suppress rule lint/complexity/useArrowFunction".
    19 19 │     // biome-ignore lint/complexity/useArrowFunction: repro case
    20    │ - ··return·new·P(function·(_resolve,·reject)·{
       20 │ + ··return·new·P((_resolve,·reject)·=>·{
    21 21 │       if (!(arr && typeof arr.length !== "undefined")) {
    22 22 │         return reject(
  

/Users/lgarron/Code/git/github.com/lgarron/biome-ignore-repro/repro.ts:19:3 suppressions/unused ━━━━━━━━━━

  ⚠ Suppression comment has no effect. Remove the suppression or make sure you are suppressing the correct rule.
  
    18 │   // Noted that that the following line is placed in the location automatically selected by Biome when using "Suppress rule lint/complexity/useArrowFunction".
  > 19 │   // biome-ignore lint/complexity/useArrowFunction: repro case
       │   ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^
    20 │   return new P(function (_resolve, reject) {
    21 │     if (!(arr && typeof arr.length !== "undefined")) {
  

Checked 4 files in 3ms. No fixes applied.
Found 1 error.
Found 1 warning.
check ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

  ✖ Some errors were emitted while running checks.
  

┬
├─ ❌ [1] command status
╰─── ⏱️ 0.275s ───────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
```
