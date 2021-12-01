function Node(data, next = null, prev = null) {

    let _nextNode = next;
    let _prevNode = prev;
    this.data = data;

    this.getNextNode = function () {
        return _nextNode;
    };
    this.getPrevNode = function () {
        return _prevNode;
    };

    this.setNextNode = function(node) {
        if (node instanceof Node || node === null) {
            _nextNode = node;
        }
        else {
            throw new Error("TypeError, setNextNode argument should be of type <Node> or <null>");
        }
    };
    this.setPrevNode = function(node) {
        if (node instanceof Node || node === null) {
            _prevNode = node;
        }
        else {
            throw new Error("TypeError, setPrevNode argument should be of type <Node> or <null>");
        }
    };
}

module.exports = Node;