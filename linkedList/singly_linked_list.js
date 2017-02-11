/*
 How will you create a linked list in JavaScript?
 */

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(val) {
    const node = {
      value: val,
      next: null
    };

   if (!this.head) {
     this.head = node;
     this.current = this.head;
   }
   else {
     this.current.next = node;
     this.current = this.current.next;
   }

  }
}

var sll = new LinkedList();

//push node
sll.push(2);
sll.push(3);
sll.push(4);

//check values by traversing LinkedList
sll.head; //Object {value: 2, next: Object}
sll.head.next; //Object {value: 3, next: Object}
sll.head.next.next; //Object {value: 4, next: null}
sll.current; //Object {value: 4, next: null}