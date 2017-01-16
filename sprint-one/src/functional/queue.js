var Queue = function() {
  var someInstance = {};

  // Use an object with numeric keys to store values
  var storage = {};
  var counter = 0;
  var lastKey = counter;
  var firstKey = lastKey;
  // Implement the methods below

  someInstance.enqueue = function(value) {
    storage[lastKey] = value;
    counter++;
    lastKey++;
  };

  someInstance.dequeue = function() {
    if (counter === 0){
      return counter;
    }
    var poppedValue = storage[firstKey];
    delete storage[firstKey];
    counter--;
    firstKey++; 
    return poppedValue;
  };

  someInstance.size = function() {
    return counter;
  };

  return someInstance;
};
