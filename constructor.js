/**
 * Examining the type of an instance and its constructor
 */
function Ninja() {}
const ninja = new Ninja();

console.assert(typeof ninja === "object", "The type of instance is object");
console.assert(ninja instanceof Ninja, "instanceof identies the constructor");
console.assert(
  ninja.constructor === Ninja,
  "The ninja object was created by the Ninja function"
);

const ninja2 = new ninja.constructor();

console.assert(ninja2 instanceof Ninja, "It's a Ninja!");
console.assert(ninja !== ninja2, "But not the same Ninja!");
