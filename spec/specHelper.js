var evaltrue = {
  isTrue: function(evalToCheck) {
    if (!evalToCheck) {
      throw new Error('Evaluation failed: ' + evalToCheck + ' is not truthy');
      console.log('Test failed!');
    } else {
      console.log('Test passed!');
    }
  }
};
