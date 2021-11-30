function Node(data, next = null) {

    let _nextNode = next;
    this.data = data;

    this.getNextNode = function () {
        return _nextNode;
    };
    this.setNextNode = function(node) {
        if (node instanceof Node || node === null) {
            _nextNode = node;
        }
        else {
            throw new Error("TypeError, setNextNode argument should be of type <Node> or <null>");
        }
    };
}

module.exports = Node;