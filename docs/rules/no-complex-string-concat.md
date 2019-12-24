# Disallow string concatenation in complex situations (no-complex-string-concat)

This helps identify cases in which string concatenation may not be the cleanest approach to building strings.

## Rule Details

The following patterns are considered warnings:

```js
var build = function(id, href, text) {
  return $( "div id='tab'><a href='" + href + "' id='" + id + "'>" + text + "</a></div>" );
};
```

The following patterns are not considered warnings:

```js
var IDize = function(id) {
  return '#' + id; // A single concatenation is acceptable
};


var build = (id, href, text) =>
  `<div id="tab"><a href="${href}" id="${id}">${text}</a></div>`;


var build = (id, href, text) => `<div id="tab">
  <a href="${href}" id="${id}">${text}</a>
</div>`;


var build = (id, href, text) => SanitizeHTML`<div id="tab">
  <a href="${href}" id="${id}">${text}</a>
</div>`;
```

## Difference from ESLint's `prefer-template`

This rule allows a single string concatenation, whereas `prefer-template` disables it entirely.


## When Not To Use It

This rule should not be used in ES3/5 environments.

If you wish to totally disallow string concatenation, use ESLint's `prefer-template` instead.

If you are using libraries or frameworks that have templating systems, you may not need this rule.
