const LinkedList = require('./linkedList.js');

function Queue(maxSize = Infinity) {

    let _list = new LinkedList();

    this.size = 0;
    this.maxSize = maxSize;

    this.isFull = function() {
        return this.size === this.maxSize;
    }
    this.isEmpty = function() {
        return this.size === 0;
    }

    this.enqueue = function(data) {
        if (this.isFull()) {
            throw new Error("Can't enqueue on full queue !");
        }

        _list.addToTail(data);
        this.size++;
        console.log(`${data} was added ! Queue size is now ${this.size}`);
    }

    this.dequeue = function() {
        if (this.isEmpty()) {
            throw new Error("Can't dequeue an empty queue !");
        }

        const data = _list.removeHead();
        this.size--;
        console.log(`Removed ${data} from the queue! Queue size is now ${this.size}.`);

        return data;
    }
    this.peek = function() 
    {
        return this.head.data;
    }

    this.getList = function() {
        return _list;
    }
}

module.exports = Queue;