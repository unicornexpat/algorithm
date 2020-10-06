 function ListNode(val, next) {
	this.val = (val===undefined ? 0 : val)
	this.next = (next===undefined ? null : next)
}


/*
Input: 1->2->3->4->5->NULL
Output: 5->4->3->2->1->NULL
*/

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var reverseList = function(head, prev = null) {
	if (!head) return head;
	const next = reverseList(head.next, head);
	head.next = prev;
	return next || head;
};