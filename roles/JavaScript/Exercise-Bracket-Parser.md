# Exercise: Bracket Parser

Write a function that returns `true` if brackets match, `false` otherwise. Brackets
match if, for example, for an opening `(` bracket there is a closing `)` bracket
and all the brackets in between match, too.

[__See solution__](./bracket-parser.js)

```js
// Write a function that returns `true` if brackets match, `false` otherwise. Brackets
// match if, for example, for an opening `(` bracket there is a closing `)` bracket
// and all the brackets in between match, too.

function checkString(input) {
  return true;
}


// ----------------------------------------------------------------------- Tests

console.clear();

const tests = {
  '' : true,
  '(' : false,
  ')' : false,
  '()' : true,
  '([)' : false,
  '([)]' : false,
  '([])' : true,
  '(([()]))[]' : true,
  '([])[])' : false,
  '([])[](' : false,
  ')([])[](' : false,
  '{([])}' : true,
  '{([])]' : false,
};

let passed = 0;
let cnt = 0;

Object.keys(tests).forEach((input) => {
  if (checkString(input) === tests[input]) {
    console.log(`${cnt} ${input} ✅  OK`);
    passed++;
  } else {
    console.log(`${cnt} ${input} ⛔️  FAILED`);
  }
  cnt++;
});

console.log('');
console.log(`${passed} out of ${Object.keys(tests).length} tests passed.`);
```
