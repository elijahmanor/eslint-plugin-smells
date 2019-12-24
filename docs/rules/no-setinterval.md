# Prevent use of `setInterval`  (no-setinterval)

SetInterval may not behave as expected when it contains processes that may be asynchronous. An alternative approach may be to use callbacks or call setTimeout recursively.

## Rule Details

The following patterns are considered warnings:

```js
// processes are not always logged in order
setInterval(function() {
  console.log('start setInterval');
  someLongProcess(getRandomInt(2000, 4000));
}, 3000)

function someLongProcess(duration) {
  setTimeout(
    function() { console.log('long process: ' + duration); },
    duration
  );
}
```

The following patterns are not considered warnings:

```js
// callback approach logs these in order
setTimeout(function timer() {
  console.log('start setTimeout')
  someLongProcess(getRandomInt(2000, 4000), function () {
    setTimeout(timer, 3000)
  });
}, 2000);

function someLongProcess(duration, callback) {
  setTimeout(function() {
    console.log('long process: ' + duration);
    callback();
  }, duration);
}
```

## When Not To Use It

If you don't find setInterval problematic, turn this rule off.
