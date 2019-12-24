# Prevent assignment of `this` to a variable (no-this-assign)

Sometimes developers will assign `this` to a variable so that other contexts can access its value. This is often a sign that the developer doesn't know alternative solutions.

## Rule Details

The following patterns are considered warnings:

```js
Person.prototype.brush = function() {
  var that = this; // Smelly code

  this.teeth.forEach(function(tooth) {
    that.clean(tooth);
  });

  console.log('brushed');
};
```

The following patterns are not considered warnings:

```js
// Bind `this`
Person.prototype.brush = function {
  this.teeth.forEach(function(tooth) {
    this.clean(tooth);
  }.bind(this)); // Use .bind() to change context

  console.log('brushed');
};


// `thisArg` parameter in Arrow functions
Person.prototype.brush = function {
  this.teeth.forEach(function(tooth) {
    this.clean(tooth);
  }, this); // Use "thisArg" parameter

  console.log('brushed');
};


// Arrow Functions
Person.prototype.brush = function() {
  this.teeth.forEach(tooth => { // Use ES6 Arrow Function to bind `this`
    this.clean(tooth);
  });

  console.log('brushed');
};


// Functional Programming
Person.prototype.brush = function() {
  this.teeth.forEach(this.clean.bind(this)); // Bind `this` if clean needs it
  console.log('brushed')
};
```

## When Not To Use It

If you intentionally assign `this` to a variable or use ESLint's `consistent-this` to establish acceptable `this` variable names, then you can disable this rule.
