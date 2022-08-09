const linkedList = function makeLinkedList() {
  return {
    append(value) {
      const newNode = node(value);
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        this.tail.next = newNode;
      }
    },
    head,
    tail,
  };
};

const node = function makeNode(value = null, next = null) {
  return { value, next };
};

export { linkedList, node };
