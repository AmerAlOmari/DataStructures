var Queue = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
	var obj = {
		storage : {},
		counter : 0,
		lastKey : 0,
		firstKey : 0
	}
	_.extend (obj, queueMethods);
	return obj;
};

var queueMethods = {
	enqueue : function(value) {
    this.storage[this.lastKey] = value;
    this.counter++;
    this.lastKey++;
  },

 	dequeue : function() {
    if (this.counter === 0){
      return this.counter;
    }
    var poppedValue = this.storage[this.firstKey];
    delete this.storage[this.firstKey];
    this.counter--;
    this.firstKey++; 
    return poppedValue;
  },

 	size : function() {
    return this.counter;
  }
};


