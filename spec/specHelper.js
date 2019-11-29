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
var compare = {
  equal: function(actual, expected) {
    if (actual !== expected) {
      throw new Error('Expected ' + expected + ' and got ' + actual);
      console.log('Test failed');
    } else {
      console.log('Test passed');
    }
  }
};
