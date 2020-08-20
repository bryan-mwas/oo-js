function Ninja() {
  this.swung = false;
  this.swingSword = function () {
    return !this.swung;
  };
}

Ninja.prototype.swingSword = function () {
  return this.swung;
};

const ninja1 = Ninja();
console.assert(ninja1 === undefined, "No instance of Ninja created.");

const ninja2 = new Ninja();
console.assert(
  ninja2 && ninja2.swingSword && ninja2.swingSword(),
  "Instance exists and method is callable"
);

console.assert(
  ninja2.swingSword(),
  "Called instance method, not prototype method"
);
