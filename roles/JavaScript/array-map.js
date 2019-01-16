Array.prototype.map = function (fn) {
  return this.reduce((acc, x) => [...acc, fn(x)], []);
};

const arr = [1, 2, 3];
console.log(arr.map(x => x * 2));
// Should return [2, 4, 6]
