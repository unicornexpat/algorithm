/*
 How will you create a doubly linked list in JavaScript?
 */

class DoublyLinkedList {
  push(val) {
    let node = {
      value: val,
      previous: null,
      next: null
    };

    if (!this.head) {
      this.head = node;
      this.current = this.head;
    }
    else {
      node.previous = this.current;
      this.current.next = node;
      this.current = this.current.next;
    }
  }
}

let dll = new DoublyLinkedList();
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);