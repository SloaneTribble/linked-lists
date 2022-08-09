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
    prepend(value) {
      const newNode = node(value);

      if (this.head === null) {
        this.head = newNode;
        this.tail = newNode;
      } else {
        newNode.next = this.head;
        this.head = newNode;
      }
    },
    toString() {
      let currentNode = this.head;
      let string = "";
      string += `( ${currentNode.value} ) ->`;
      while (currentNode.next) {
        string += ` ( ${currentNode.next.value} ) ->`;
        currentNode = currentNode.next;
      }
      string += ` null `;

      return string;
    },
    at(index) {
      let currentNode = this.head;
      for (let i = 0; i < index - 1; i++) {
        currentNode = currentNode.next;
      }
      return currentNode.value;
    },

    pop() {
      let popped = this.tail;
      let currentNode = this.head;
      let penultimateIndex = this.size - 2;
      for (let i = 0; i < penultimateIndex; i++) {
        currentNode = currentNode.next;
      }
      this.tail = currentNode;
      currentNode.next = null;
      this.size--;

      return popped;
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
