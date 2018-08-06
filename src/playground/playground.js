class LinkedListNode {
  constructor(value, next = null) {
    this.value = value;
    this.next = next;
  }

  toString(callback) {
    return callback ? callback(this.value) : `${this.value}`;
  }
}

// * LinkedList Node experiments * //
// const newNode = new LinkedListNode(1);
// const nodeValue = { value: 1, key: 'test' };
// const node = new LinkedListNode(nodeValue);
// console.log(newNode);
// console.log(node);

class LinkedList {
  constructor(head, tail) {
    (this.head = head), (this.tail = tail);
  }
}

module.exports = { LinkedListNode, LinkedList };
