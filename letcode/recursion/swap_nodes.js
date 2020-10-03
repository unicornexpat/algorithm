/*
Given 1->2->3->4, you should return the list as 2->1->4->3.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
 function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function(head) {
	if (!head || !head.next) return head;
	const node1 = head.next;
	const node2 = head.next.next;
	node1.next = head;
	node1.next.next = swapPairs(node2);
	return node1;
}

const head = new ListNode(1)
head.next = new ListNode(2);
head.next.next = new ListNode(3, new ListNode(4));

console.log(swapPairs(head));