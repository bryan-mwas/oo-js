/**
 * Tring to achieve inheritance with prototypes
 */
const { assert } = require("./test");
function Person() {}
Person.prototype.dance = function () {};

function Ninja() {}
// Proper way to achieve inheritance, setting the prototype of subclass to instance of Superclass
Ninja.prototype = new Person();
// Ninja.prototype = { dance: Person.prototype.dance }; // Wrong way to achieve inheritance, we are just making a copy.

Object.defineProperty(Ninja.prototype, "constructor", {
  enumerable: false,
  value: Ninja,
  writable: true,
});

const ninja = new Ninja();
assert(
  ninja instanceof Ninja,
  "ninja receives functionality from the Ninja prototype"
);
assert(ninja instanceof Person, "... and Person prototype");
assert(ninja instanceof Object, "... and Object prototype");
assert(typeof ninja.dance === "function", "ninja acquired dance functionality");
assert(
  ninja.constructor === Ninja,
  "Connection from ninja instances to Ninja constructor reestablished"
);

for (let prop in Ninja.prototype) {
  assert(prop === "dance", "The only enumerable property is " + prop + "!");
}
