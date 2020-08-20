const { assert } = require("./test");

class Person {
  constructor(name) {
    this.name = name;
  }
  dance() {
    return true;
  }
}

class Ninja extends Person {
  constructor(name, weapon) {
    super(name);
    this.weapon = weapon;
  }

  wieldWeapon() {
    return true;
  }

  static compare(ninja1, ninja2) {
    return ninja1.weapon === ninja2.weapon;
  }
}

var person = new Person("Brian");

assert(person instanceof Person, "A person's a person");
assert(person.dance(), "A person can dance");
assert(person.name === "Brian", "person's name is Brian");
assert(!(person instanceof Ninja), "But it's not a Ninja");
assert(!("wieldWeapon" in person), "And it cannot weild a weapon");

var ninja = new Ninja("Yoshi", "Wakizashi");
var ninja2 = new Ninja("Yoshi", "Wakizashi");

assert(ninja instanceof Ninja, "A ninja's a ninja");
assert(ninja.wieldWeapon(), "That can weild a weapon");
assert(ninja instanceof Person, "But it's also a person");
assert(ninja.name === "Yoshi", "That has a name - Yoshi");
assert(ninja.dance, "And enjoys dancing");

assert(
  !("compare" in ninja) && !("compare" in ninja2),
  "A ninja doesn't know how to compare"
);
assert(Ninja.compare(ninja, ninja2), "The ninja can do the comparison");
assert(!("wieldWeapon" in Ninja), "The Ninja class cannot weild a weapon");
