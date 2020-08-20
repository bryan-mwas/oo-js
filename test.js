const colors = require("colors");
const assert = (expression = false, description = "") => {
  if (expression) {
    console.log(`✅ ${description}`.green);
  } else {
    console.log(`❌ ${description}`.red);
  }
};

module.exports = {
  assert,
};
