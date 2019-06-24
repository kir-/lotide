const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log("✅✅✅ Assertion Passed: %s === %s", actual, expected);
  } else {
    console.log("🛑🛑🛑 Assertion Failed: %s !== %s", actual, expected);
  }
};

assertEqual("lighthouse labs", "Bootcamp");
assertEqual(1, "1");