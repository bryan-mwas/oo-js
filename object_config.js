/**
 * Configuring properties
 */
const { assert } = require("./test");

var ninja = {};
ninja.name = "Bryan";
ninja.weapon = "kusarigama";

Object.defineProperty(ninja, "sneaky", {
  configurable: false,
  enumerable: false,
  value: true,
  writable: true,
});

assert("sneaky" in ninja, "We can access the sneaky property");

for (let prop in ninja) {
  assert(prop !== undefined, "An enumerated property: " + prop);
}
