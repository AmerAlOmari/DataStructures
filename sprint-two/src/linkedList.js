var LinkedList = function() {
  var list = {};
  list.head = null;
  list.tail = null;

  list.addToTail = function(value) { //constant time complexity
    var node = Node(value);
    if(!list.head){
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
  };
  list.removeHead = function() { //constant time complexity
    var deleted = this.head.value;
    this.head = this.head.next;
    if (this.head === null){
      this.tail = null;
    }
    return deleted;
  };

  list.contains = function(target) { //Big O(n) - linear
    var node = this.head;
    while (node !== null){
      if (node.value === target){
       return true;
     }
     node = node.next;
   }
   return false; 
 };
 return list;
};

var Node = function(value) {
  var node = {};

  node.value = value;
  node.next = null;

  return node;
};

/*
 * Complexity: What is the time complexity of the above functions?
 */
