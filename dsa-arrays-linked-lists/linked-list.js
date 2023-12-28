/** Node: node for a singly linked list. */

class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

/** LinkedList: chained together nodes. */

class LinkedList {
  constructor(vals = []) {
    this.head = null;
    this.tail = null;
    this.length = 0;

    for (let val of vals) this.push(val);
  }

  /** push(val): add new value to end of list. */

  push(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

  }



  /** unshift(val): add new value to start of list. */

  unshift(val) {
    const newNode = new Node(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

  }

  /** pop(): return & remove last item. */

  pop() {
    if (!this.head) throw new Error('List is empty');
    let current = this.head;
    let previous = null;
    while (current.next) {
      previous = current;
      current = current.next;
    }
    const tailValue = current.val;
    if (previous) {
      previous.next = null;
      this.tail = previous;
    } else {
      // Only one item in the list
      this.head = null;
      this.tail = null;
    }
    this.length--;
    return tailValue;

  }

  /** shift(): return & remove first item. */

  shift() {
    if (!this.head) throw new Error('List is empty');
    const headValue = this.head.val;
    this.head = this.head.next;
    this.length--;
    if (!this.head) {
      // List is now empty
      this.tail = null;
    }
    return headValue;
  }

  /** getAt(idx): get val at idx. */

  getAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid index');
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;
    }
    return current.val

  }

  /** setAt(idx, val): set val at idx to val */

  setAt(idx, val) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid index');
    }
    let current = this.head;
    for (let i = 0; i < idx; i++) {
      current = current.next;

    }
    current.val = val;
  }  
 
  /** insertAt(idx, val): add node w/val before idx. */

  insertAt(idx, val) {
    if (idx < 0 || idx > this.length) {
      throw new Error('Invalid index');
    }
    if (idx === 0) {
      // Inserting at the beginning, equivalent to unshift
      this.unshift(val);
    } else if (idx === this.length) {
      // Inserting at the end, equivalent to push
      this.push(val);
    } else {
      // Inserting in the middle
      const newNode = new Node(val);
      let current = this.head;
      for (let i = 0; i < idx - 1; i++) {
        current = current.next;
      }
      newNode.next = current.next;
      current.next = newNode;
      this.length++;
    }

  }

  /** removeAt(idx): return & remove item at idx, */

  removeAt(idx) {
    if (idx < 0 || idx >= this.length) {
      throw new Error('Invalid index');
    }
    if (idx === 0) {
      // Removing the first item, equivalent to shift
      return this.shift();
    } else if (idx === this.length - 1) {
      // Removing the last item, equivalent to pop
      return this.pop();
    } else {
      // Removing from the middle
      let current = this.head;
      for (let i = 0; i < idx; i++) {
        current = current.next;
      }
      const removedValue = current.next.val;
      current.next = current.next.next;
      this.length--;
      return removedValue;
    }

  }

  /** average(): return an average of all values in the list */

  average() {
    if (this.length === 0) return 0;
    let sum = 0;
    let current = this.head;
    while (current) {
      sum += current.val;
      current = current.next;
    }
    return sum / this.length;
  }
}


module.exports = LinkedList;
