const linkedList = function makeLinkedList() {
  return {
    append(value) {
      const newNode = node(value);
      let current;
      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        current = this.head;

        while (current.next) {
          current = current.next;
        }
        current.next = newNode;
        this.tail = newNode;
      }
      this.size++;
    },

    size: 0,
    head: null,
    tail: null,
  };
};

const node = function makeNode(value = null, next = null) {
  return { value, next };
};

export { linkedList, node };
