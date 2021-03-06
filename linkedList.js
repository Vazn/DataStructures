const Node = require('./node.js');

function LinkedList() {

   this.head = null;

   this.addToHead = function(data) {
      const newHead = new Node(data);
      const currentHead = this.head;
      this.head = newHead;

      newHead.setNextNode(currentHead);                  
   };

   this.addToTail = function(data) {
      let tail = this.head;

      if (tail === null) {
         this.head = new Node(data);
      }
      else {          
         while (tail.getNextNode() !== null) {
            tail = tail.getNextNode();
         } 
         tail.setNextNode(new Node(data));
      }
   };

   this.removeHead = function() {
      const removedHead = this.head;

      if (removedHead === null) {
         return;
      }
      this.head = removedHead.getNextNode();
      return removedHead.data;
   };

   this.removeByData = function() {
      let nodeToRemove;
      let currentNode = this.head;
   
      while (currentNode) {
        	if (currentNode.data === data) {
         	nodeToRemove = currentNode;
         	break;
        	}
        	currentNode = currentNode.getNextNode();
      }
      if (!nodeToRemove) {
        	return null;
      }
      if (nodeToRemove == this.head) {
         this.removeHead();
      }
      else {
         const nextNode = nodeToRemove.getNextNode();
         const prevNode = nodeToRemove.getPrevNode();
         prevNode.setNextNode(nextNode);
      }
      return nodeToRemove;
   };

   this.printList = function () 
    {
        let currentNode = this.head;
        let output = "|head| ";
    
        while (currentNode !== null) {
          output += currentNode.data + "  ";
          currentNode = currentNode.getNextNode();
        };

        output += "|tail|";
        console.log(output);
   };
};

module.exports = LinkedList;
