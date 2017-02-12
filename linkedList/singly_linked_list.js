/*
 How will you create a linked list in JavaScript?
 */

/**
 * LinkedList
 */
class LinkedList {
  /**
   * Push value/data to the list
   * @param val
   */
  push(val) {
    const node = {
      value: val,
      next: null
    };

   if (!this.head) {
     this.head = node;
   } else {
     let current = this.head;

     while (current.next) {
       current = current.next;
     }

     current.next = node;
   }

  }

  /**
   * Remove value/data
   * @param val
   */
  remove(val) {
    if (this.head.value === val) {
      this.head = this.head.next;
    } else {
      let previous = this.head;
      let current = this.head.next;

      while (current.next) {
        if (current.value === val) {
          previous.next = current.next;
          break;
        }
        previous = current;
        current = current.next;
      }

    }

  }

}

let sll = new LinkedList();


//push node
sll.push(2);
sll.push(3);
sll.push(4);

sll.remove(3);
//check values by traversing LinkedList
sll.head; //Object {value: 2, next: Object}
sll.head.next; //Object {value: 3, next: Object}
sll.head.next.next; //Object {value: 4, next: null}
