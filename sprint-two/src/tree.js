var Tree = function(value) {
  var newTree = {};
  newTree.value = value;
  _.extend(newTree, treeMethods);
  newTree.children = [];  // fixed

  return newTree;
};

var treeMethods = {};

treeMethods.addChild = function(value) {
	this.children.push(Tree(value))
};

treeMethods.contains = function(target, root=this) {
	if (root.value === target){
		return true;
	}
	else {
		for (var i = 0; i < root.children.length; i++) {
			if (this.contains ( target, root.children[ i ] )){
				return true;
			}
		}
	}
	return false;
};



/*
 * Complexity: What is the time complexity of the above functions? Big O(n)
 */
