var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	this.storage = {};
	this.counter = 0;
	this.lastKey = 0;
	this.firstKey = 0;
};


	Queue.prototype.enqueue = function(value) {
    this.storage[this.lastKey] = value;
    this.counter++;
    this.lastKey++;
  };

 	Queue.prototype.dequeue = function() {
    if (this.counter === 0){
      return this.counter;
    }
    var poppedValue = this.storage[this.firstKey];
    delete this.storage[this.firstKey];
    this.counter--;
    this.firstKey++; 
    return poppedValue;
  };

 	Queue.prototype.size = function() {
    return this.counter;
  };
