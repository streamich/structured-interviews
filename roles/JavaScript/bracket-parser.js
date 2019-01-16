// Write a function that returns `true` if brackets match, `false` otherwise. Brackets
// match if, for example, for an opening `(` bracket there is a closing `)` bracket
// and all the brackets in between match, too.

const brackets = {
  '(': ')',
  '[': ']',
  '{': '}',
};

function checkString(input, b = brackets) {
  const stack = [];
  for (let i = 0, char; char = input[i]; i++)
    if (b[char]) stack.push(char);
    else if (b[stack[stack.length - 1]] === char) stack.pop();
    else return false;
  return !stack.length;
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
	if(checkString(input) === tests[input]) {
  	console.log(`${cnt} ${input} ✅  OK`);
    passed++;
  } else {
  	console.log(`${cnt} ${input} ⛔️  FAILED`);
  }
  cnt++;
});

console.log('');
console.log(`${passed} out of ${Object.keys(tests).length} tests passed.`);
