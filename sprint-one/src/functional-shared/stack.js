var Stack = function() {
  // Hey! Rewrite in the new style. Your code will wind up looking very similar,
  // but try not not reference your old code in writing the new style.
var obj = {
	storage : {},
	counter : 0
	};
_.extend (obj, stackMethods);
return obj;
};

var stackMethods = {

  push : function(value) {
    this.storage[this.counter] = value;
    this.counter++ ;
  },
  pop : function() {
    if( this.counter === 0 ){
      return this.counter;
    }
    var poppedValue = this.storage[this.counter - 1];
    delete this.storage[this.counter - 1] ;
    this.counter--;
    return poppedValue;
  },
  size : function() {
    return this.counter;
  }
}


// var extend = function (obj1, obj2){
// 	for (var key in obj2){
// 		obj1[ key ] = obj2 [ key ];
// 	}
// };