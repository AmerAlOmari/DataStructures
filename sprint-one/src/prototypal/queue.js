var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	var obj = Object.create(queueMethods);
	obj.storage = {};
	obj.counter = 0;
	obj.lastKey = 0;
	obj.firstKey = 0;
	return obj;
};

var queueMethods = {};

	queueMethods.enqueue = function(value) {
    this.storage[this.lastKey] = value;
    this.counter++;
    this.lastKey++;
  };

 	queueMethods.dequeue = function() {
    if (this.counter === 0){
      return this.counter;
    }
    var poppedValue = this.storage[this.firstKey];
    delete this.storage[this.firstKey];
    this.counter--;
    this.firstKey++; 
    return poppedValue;
  };

 	queueMethods.size = function() {
    return this.counter;
  };
