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
      this.size++;
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
      if (this.size === 1) {
        this.head = null;
        this.tail = null;
        return;
      }

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

    contains(value) {
      let currentNode = this.head;
      while (currentNode) {
        if (currentNode.value === value) {
          return true;
        }
        currentNode = currentNode.next;
      }
      return false;
    },

    find(value) {
      let currentNode = this.head;
      let index = 0;
      while (currentNode) {
        if (currentNode.value === value) {
          return index;
        }
        currentNode = currentNode.next;
        index++;
      }
      return null;
    },

    insertAt(value, index) {
      const newNode = node(value);
      let nodeBefore = this.head;
      let nodeAfter;

      if (index === 0) {
        this.prepend(value);
        return;
      }
      if (index === this.size) {
        this.append(value);
        return;
      }

      let i = 0;
      while (i < index - 1) {
        nodeBefore = nodeBefore.next;
        i++;
      }
      nodeAfter = nodeBefore.next;
      nodeBefore.next = newNode;
      newNode.next = nodeAfter;
      this.size++;
    },

    removeAt(index) {
      if (index === this.size - 1) {
        this.pop();
        return;
      }

      if (index === 0) {
        this.head = this.head.next;
        this.size--;
      }

      let nodeBefore = this.head;
      let nodeAfter;
      let i = 0;
      while (i < index - 1) {
        nodeBefore = nodeBefore.next;
        i++;
      }
      nodeAfter = nodeBefore.next.next;
      nodeBefore.next = nodeAfter;
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
