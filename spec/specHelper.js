var evaltrue = {
  isTrue: function(evalToCheck) {
    if (!evalToCheck) {
      throw new Error("Evaluation failed: " + evalToCheck + " is not truthy");
    } else {
      console.log("Test passed!");
    }
  }
};
var evalequal = {
  isEqual: function(eval1, eval2) {
    if (eval1 !== eval2) {
      throw new Error("Evaluation failed: " + eval1 + eval2 + " are not equal");
    } else {
      console.log("Test passed!");
    }
  }
};
