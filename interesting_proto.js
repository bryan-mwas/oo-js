function Ninja() {
  this.swung = true;
}

const ninja1 = new Ninja();

Ninja.prototype.swingSword = function () {
  return this.swung;
};

console.assert(ninja1.swingSword(), "Method exists, even out of order");

// Overwrites initial prototype.
// Instance created after this rewrite will reference this prototype
Ninja.prototype = {
  pierce: function () {
    return true;
  },
};

// ninja1 cannot pierce since it still references the init prototype before the overwrite
console.assert(!ninja1.pierce, "ninja1 cannot pierce");
console.assert(ninja1.swingSword(), "ninja1 can still swing");

const ninja2 = new Ninja();
// Newly create Ninja instance can now pierce but not swing
console.assert(ninja2.pierce(), "Ninja2 can pierce though");
console.assert(!ninja2.swingSword, "Ninja2 cannot swingSword though");
