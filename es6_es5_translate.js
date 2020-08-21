const { assert } = require("./test");

function Warrior(weapon) {
  this.weapon = weapon;
}

Warrior.prototype.weild = function () {
  // Using arrow function changes the meaning. (this is undefined)
  return `Weilding ${this.weapon}`;
};

// Static property; Available at class level but not visible to instances
Warrior.duel = (warrior1, warrior2) => {
  return warrior1.weild() + " " + warrior2.weild();
};

const warrior = new Warrior("kidungi");
const warrior2 = new Warrior("kidungiB");

assert("duel" in Warrior, "static prop 'duel' present in Warrior Function");
assert(!("duel" in warrior), "static prop 'duel' not in warrior instance");
assert("weild" in warrior, "weild prop in warrior");
assert(
  Warrior.duel(warrior, warrior2) === `${warrior.weild()} ${warrior2.weild()}`,
  "Warrior duel shows both warriors weapons"
);
