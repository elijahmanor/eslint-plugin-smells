# Prevent Extreme Chaining (no-complex-chaining)

This helps identify extreme chaining. When methods are chained extensively, errors in one step of the chain can cause unexpected behavior for other steps.

## Rule Details

The following patterns are considered warnings:

```js
$(document).ready(function() {
  $('.Component')
    .find('button')
      .addClass('Component-button--action')
      .click(function() { alert('HEY!'); })
    .end()
    .mouseenter(function() { $(this).addClass('Component--over'); })
    .mouseleave(function() { $(this).removeClass('Component--over');})
    .addClass('initialized');
});
```

The following patterns are not considered warnings:

```js
$(document).on('mouseenter mouseleave', '.Component', function(e){
  $(this).toggleClass('Component--over', e.type === 'mouseenter');
});

$(document).on('click', '.Component button', function(e) {
  alert('HEY!');
});

$(document).ready(function() {
  $('.Component button').addClass('Component-button--action');
});
```

## When Not To Use It

Do not use this rule if you find yourself in need of long chains.
