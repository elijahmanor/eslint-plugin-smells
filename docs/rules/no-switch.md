# Prevent use of `switch` statement (no-switch)

This helps identify uses of `switch` in your codebase. You can either warn for any use of `switch` or for uses that include more than 1 line of code per `case` statement.

## Rule Details

The following patterns are considered warnings:

```js
switch () {
  case: break;
  default: break;
}

function getPetTreat(pet) {
  var food;

  switch (pet) {
    case 'cat':
      food = 'tuna';
      break;
    case 'lizard':
      food = 'crickets';
      break;
    default:
      food = 'we don\'t know';
  }

  return food
}
```

The following patterns are not considered warnings:

```js
function getPetTreat(pet) {
  var petTreats = {
    cat: 'tuna',
    lizard: 'crickets',
  };
  return petTreats[pet] || 'we don\'t know';
}
```

## When Not To Use It

If you are okay with the use of `switch` in your code, then you don't need this rule. If you like this rule, but there are some instance that do use a `switch`, then you can conditionally ignore the rule,
