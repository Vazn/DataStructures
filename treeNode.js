function TreeNode(data) {

  	this.data = data;
  	this.children = [];

   this.addChild = function(data) {

      const newChildren = new TreeNode(data);
      this.children.push(newChildren);
   };

   this.removeChild = function(childToRemove) {

      const length = this.children.length;
      this.children = this.children.filter(child => {
         return childToRemove instanceof TreeNode 
         ? child !== childToRemove 
         : child.data !== childToRemove;
      });
        
      if (length === this.children.length) {
         this.children.forEach(child => child.removeChild(childToRemove));
      }
   };

   this.depthFirstTraversal = function() {
      console.log(this.data);
      this.children.forEach(child => child.depthFirstTraversal());
   }

	this.breadthFirstTraversal = function() {
		let queue = [this];

		while (queue.length) {
		  const current = queue.shift();
		  console.log(current.data);
		  queue = queue.concat(current.children);
		}
	}

   this.print = function (level = 0) {
      let result = '';
      for (let i = 0; i < level; i++) {
         result += '-- ';
      }
        
      console.log(`${result}${this.data}`);
      this.children.forEach(child => child.print(level + 1));
   }
}

module.exports = TreeNode;