var eval = {
  isTrue: function(evalToCheck) {
    if (!evalToCheck) {
      throw new Error("Evaluation failed: " + evalToCheck + " is not truthy");
    } else {
      console.log("Test passed!");
    }
  }
};
