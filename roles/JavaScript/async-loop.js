const arr = [10, 12, 15, 21];

// Broken loop
for (var i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(`The number ${i} is: ` + arr[i]);
  }, 1000);
}

// Moving the loop inside async function solves the problem
// but the point of this exercise is to keep the loop outside the async function.
setTimeout(function() {
  for (var i = 0; i < arr.length; i++) {
    console.log(`The number ${i} is: ` + arr[i]);
  }
}, 1000);

// var -> let
for (let i = 0; i < arr.length; i++) {
  setTimeout(function() {
    console.log(`The number ${i} is: ` + arr[i]);
  }, 1000);
}

// With .bind
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(i) {
    console.log(`The number ${i} is: ` + arr[i]);
  }.bind(null, i), 1000);
}

// With closure
for (var i = 0; i < arr.length; i++) {
  (i => {
    setTimeout(function() {
      console.log(`The number ${i} is: ` + arr[i]);
    }, 1000);
  })(i);
}

// With setTimeout arguments
for (var i = 0; i < arr.length; i++) {
  setTimeout(function(i) {
    console.log(`The number ${i} is: ` + arr[i]);
  }, 1000, i);
}
