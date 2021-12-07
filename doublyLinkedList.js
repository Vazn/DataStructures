const Node = require('./node.js');

function DoublyLinkedList() {

	this.head = null;
   this.tail = null;

   this.addToHead = function(data) {
      const newHead = new Node(data);
      const currentHead = this.head;

      if (currentHead) {

         currentHead.setPreviousNode(newHead);
         newHead.setNextNode(currentHead);
      }
      this.head = newHead;

      if (!this.tail) {

          this.tail = this.head;
      }
   };

   this.addToTail = function(data) {
      const newTail = new Node(data);
      const currentTail = this.tail;

      if (currentTail) {
          currentTail.setNextNode(newTail);
          newTail.setPrevNode(currentTail);
      }
      this.tail = newTail;
      
      if (!this.head) 
      {
          this.head = this.tail;
      }
   };

   this.removeHead = function() {
      const removedHead = this.head;

      if (!removedHead) {
         return;
      }
      this.head = removedHead.getNextNode();

      if (this.head) {
         this.head.setPrevNode(null);
      }
      if (removedHead === this.tail) {
         this.removeTail();
      }
      return removedHead.data;
   };

   this.removeTail = function() {
      const removedTail = this.tail;

      if (!removedTail) {
         return;
      }

      this.tail = removedTail.getPrevNode();

      if (this.tail) {
         this.head.setNextNode(null);
      }
      if (removedTail === this.head) {
         this.removeHead();
      }
      return removedTail.data;
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
      else if (nodeToRemove == this.tail) {
         this.removeTail();
      }
      else {
         const nextNode = nodeToRemove.getNextNode();
         const prevNode = nodeToRemove.getPrevNode();
         nextNode.setPrevNode(prevNode);
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
      }

      output += "|tail|";
      console.log(output);
   };
};

module.exports = DoublyLinkedList;
