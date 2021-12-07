const LinkedList = require('./linkedList.js');

function Stack(maxSize = Infinity) {

   let _list = new LinkedList();
   
   this.size = 0;
   this.maxSize = maxSize;

   this.isEmpty = function() {
      return this.size === 0;
   };
   this.isFull = function() {
      return this.size === maxSize;
   };
   this.push = function(data) {
      if (this.isFull()) {
         throw new Error("Stack overflow, you can't add items to a full stack !");
      };

      _list.addToHead(data);
      this.size++;
   };
   this.pop = function() {
      if (this.isEmpty()) {
         throw new Error("Stack underflow, you can't remove items from empty stack !");
      };

      const data = _list.removeHead();
      this.size--;
      
      return data;
   };
   this.peek = function() {
      if (this.isEmpty()) {
         return null;   
      }
      return _list.head.data;
   };
   this.getList = function() {
      return _list;
   };
}

module.exports = Stack;
