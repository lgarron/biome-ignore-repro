// This code is a reduced reproduction based on: https://github.com/lgarron/clipboard-polyfill/blob/60271bcf2c3af21280db736dfa44c66abf8f85d1/src/clipboard-polyfill/promise/polyfill.ts

function finallyConstructor() {
  return this.then(
    // biome-ignore lint/complexity/useArrowFunction: repro case
    function (value) {
      /* … */
    },
    // biome-ignore lint/complexity/useArrowFunction: repro case
    function (reason) {
      /* … */
    },
  );
}

function allSettled(arr) {
  // biome-ignore lint/complexity/noUselessThisAlias: repro case
  var P = this;

  // Noted that that the following line is placed in the location automatically selected by Biome when using "Suppress rule lint/complexity/useArrowFunction".
  // biome-ignore lint/complexity/useArrowFunction: repro case
  return new P(function (_resolve, reject) {
    if (!(arr && typeof arr.length !== "undefined")) {
      return reject(
        new TypeError(
          // biome-ignore lint/style/useTemplate: repro case
          typeof arr + " error",
        ),
      );
    }
  });
}
