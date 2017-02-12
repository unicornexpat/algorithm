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

//revert but return new list
function reverseUsingArray(list) {
  if (!list.head || !list.head.next) return sll;

  let current = list.head;
  const values = [];

  while (current) {
    values.push(current.value);
    current = current.next;
  }

  values.reverse();

  let revertedList = new LinkedList();

  values.map(function(value) {
    revertedList.push(value);
  });

  return revertedList;
}


let sll = new LinkedList();

//push node
sll.push(2);
sll.push(3);
sll.push(4);

const revertedList = reverseUsingArray(sll);
revertedList.head.next.next; //Object {value: 4, next: null}



//revert - working in progress
function reverse(list) {
  if (!list.head || !list.head.next) return sll;

  let current = list.head.next;

  let previous = this.head;
  let currentCopy;

  while (current.next) {
    currentCopy = Object.assign({}, current);
    current.next = previous;
    previous = currentCopy;
    console.log(currentCopy);
    current = currentCopy.next;
  }

  //old hea now become tail hence need to point to null
  list.head.next = null;

  //set new head = old tail
  list.head = current;
  list.head.next = previous;

  return list;
}



let sll2 = new LinkedList();

//push node
sll2.push(2);
sll2.push(3);
sll2.push(4);

sll2.remove(4);
sll2.push(4);

reverse(sll2);

//check values by traversing LinkedList
sll2.head; //Object {value: 2, next: Object}
sll2.head.next; //Object {value: 3, next: Object}
sll2.head.next.next; //Object {value: 4, next: null}
