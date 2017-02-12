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

function reverse(list) {
  let current = list.head;
  let temp;

  while (current) {
    temp = current.next;
    current.next = current.previous;
    current.previous = temp;

    if (!temp) list.head = current;

    current = temp;
  }

  return list;
}

let dll = new DoublyLinkedList();
dll.push(2);
dll.push(3);
dll.push(4);
dll.push(5);

reverse(dll);
dll.head.next.next.next.next;


/*
 Question: How could you get the Kth node from the end (no loop)
 */
