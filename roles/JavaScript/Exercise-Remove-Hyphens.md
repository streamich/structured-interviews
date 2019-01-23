# Exercise: Remove Hyphens

Write a function that traverses any arbitrary plain JavaScript structure
and returns an equivalent one but with hyphens removed from all strings.

- bonus point for not mutating the original data
- bonus point for removing hyphens from object keys
- bonus point for removing hyphens from regular expressions

[__See solution__](./remove-hyphens.js)

```js
// Write a function that traverses any arbitrary plain JavaScript structure
// and returns an equivalent one but with hyphens removed from all strings.
//
// - bonus point for not mutating the original data
// - bonus point for removing hyphens from object keys
// - bonus point for removing hyphens from regular expressions

const remove = (obj) => {
  return obj;
};

// ----------------------------------------------------------------------- Tests

const data = {
  oneDash: 'James-Osborne',
  twoDashes: 'oki-do-ki',
  arr: ['a', 'b-c', 'd-e-f'],
  null: null,
  undefined: undefined,
  true: true,
  false: false,
  NaN: NaN,
  date: new Date(),
  regex: /bonus-point-for-removing-hyphens-in-regex/,
  'bonus-point-for-removing-hyphens-in-keys': 'nice!',
  level2: {
    oneDash: 'James-Osborne',
    twoDashes: 'oki-do-ki',
    arr: ['a', 'b-c', 'd-e-f'],
    null: null,
    undefined: undefined,
    true: true,
    false: false,
    NaN: NaN,
    date: new Date(),
    regex: /bonus-point-for-removing-hyphens-in-regex/,
    'bonus-point-for-removing-hyphens-in-keys': 'nice!',
  },
  array: [{
    oneDash: 'James-Osborne',
    twoDashes: 'oki-do-ki',
    arr: ['a', 'b-c', 'd-e-f'],
    null: null,
    undefined: undefined,
    true: true,
    false: false,
    NaN: NaN,
    date: new Date(),
    regex: /bonus-point-for-removing-hyphens-in-regex/,
    'bonus-point-for-removing-hyphens-in-keys': 'nice!',
  }],
};
const result = remove(data);
console.log(require('util').inspect(result, {colors: true, depth: 10}));

let passed = 0;
let cnt = 0;
let name = '';

cnt++, name = 'level 1 one dash';
try {
  if (result.oneDash === 'JamesOsborne') {
    passed++;
    console.log(`${cnt - 1}...${name} ✅  OK`);
  } else {
    console.log(`${cnt - 1}...${name} ⛔️  FAILED`);
  }
} catch (e) {}

cnt++, name = 'level 1 two dashes';
try {
  if (result.twoDashes === 'okidoki') {
    passed++;
    console.log(`${cnt - 1}...${name} ✅  OK`);
  } else {
    console.log(`${cnt - 1}...${name} ⛔️  FAILED`);
  }
} catch (e) {}

cnt++, name = 'level 1 array';
try {
  if ((result.arr[1] === 'bc') && (result.arr[2] === 'def')) {
    passed++;
    console.log(`${cnt - 1}...${name} ✅  OK`);
  } else {
    console.log(`${cnt - 1}...${name} ⛔️  FAILED`);
  }
} catch (e) {}

cnt++, name = 'level 2 one dash';
try {
  if (result.level2.oneDash === 'JamesOsborne') {
    passed++;
    console.log(`${cnt - 1}...${name} ✅  OK`);
  } else {
    console.log(`${cnt - 1}...${name} ⛔️  FAILED`);
  }
} catch (e) {}

cnt++, name = 'level 2 two dashes';
try {
  if (result.level2.twoDashes === 'okidoki') {
    passed++;
    console.log(`${cnt - 1}...${name} ✅  OK`);
  } else {
    console.log(`${cnt - 1}...${name} ⛔️  FAILED`);
  }
} catch (e) {}

cnt++, name = 'level 2 array';
try {
  if ((result.level2.arr[1] === 'bc') && (result.level2.arr[2] === 'def')) {
    passed++;
    console.log(`${cnt - 1}...${name} ✅  OK`);
  } else {
    console.log(`${cnt - 1}...${name} ⛔️  FAILED`);
  }
} catch (e) {}

cnt++, name = 'nested array one dash';
try {
  if (result.array[0].oneDash === 'JamesOsborne') {
    passed++;
    console.log(`${cnt - 1}...${name} ✅  OK`);
  } else {
    console.log(`${cnt - 1}...${name} ⛔️  FAILED`);
  }
} catch (e) {}

cnt++, name = 'nested array two dashes';
try {
  if (result.array[0].twoDashes === 'okidoki') {
    passed++;
    console.log(`${cnt - 1}...${name} ✅  OK`);
  } else {
    console.log(`${cnt - 1}...${name} ⛔️  FAILED`);
  }
} catch (e) {}

cnt++, name = 'nested array array';
try {
  if ((result.array[0].arr[1] === 'bc') && (result.level2.arr[2] === 'def')) {
    passed++;
    console.log(`${cnt - 1}...${name} ✅  OK`);
  } else {
    console.log(`${cnt - 1}...${name} ⛔️  FAILED`);
  }
} catch (e) {}


console.log('');
console.log(`${passed} out of ${cnt} tests passed.`);
```
