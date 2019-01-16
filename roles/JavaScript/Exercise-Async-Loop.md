# Exercise: Async Loop

- What does the below code do?
- What will it output in console?
- What is wrong with this loop? Can you fix it?
- What other ways of fixing it do you know?

[__See solutions__](./async-loop.js)

```js
// What does the below code do?
// What will it output in console?
// What is wrong with this loop? Can you fix it?
// What other ways of fixing it do you know?

const arr = [10, 12, 15, 21];
for (var i = 0; i < arr.length; i++) {
    setTimeout(function() {
        console.log(`The number ${i} is: ` + arr[i]);
    }, 1000);
}
```
