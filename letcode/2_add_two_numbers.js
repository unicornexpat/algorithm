/*
You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
Explanation: 342 + 465 = 807.
 */

function ListNode(val, next = null) {
  this.val = val;
  this.next = next;
}

const l12 = new ListNode(2);
const l11 = new ListNode(4, l12);
const l1 = new ListNode(3, l11);

const l22 = new ListNode(5);
const l21 = new ListNode(6, l22);
const l2 = new ListNode(4, l21);

const l3 = new ListNode(1, new ListNode(8));
const l4 = new ListNode(0);

const l5 = new ListNode(5);

const l6 = new ListNode(1);
const l7 = new ListNode(9, new ListNode(9))

const addTwoNumbers = function (l1, l2) {
  let remainder = 0;

  let current1 = l1;
  let current2 = l2;


  let masterNode;
  let previousNode;

  while (current1 || current2 || remainder > 0) {
    let val1 = current1 ? current1.val : 0;
    let val2 = current2 ? current2.val : 0;

    let rawSum = val1 + val2 + remainder;
    let recordSum = rawSum % 10;
    remainder = Math.floor(rawSum/ 10);

    let currentNode = new ListNode(recordSum);
    if (previousNode) previousNode.next = currentNode;

    if (!masterNode) masterNode = currentNode;

    previousNode = currentNode;

    current1 = current1 ? current1.next : null;
    current2 = current2 ? current2.next : null;

  }

  return masterNode;

};

console.log(addTwoNumbers(l6, l7));

