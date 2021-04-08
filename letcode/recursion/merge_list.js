//Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val===undefined ? 0 : val)
    this.next = (next===undefined ? null : next)
}
 
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var mergeTwoLists = function(l1, l2) {
	if (!l1) return l2;
	else if (!l2) return l1;
	else {
		if (l1.val < l2.val) {
			l1.next = mergeTwoLists(l1.next, l2);
			return l1;
		} else {
			l2.next = mergeTwoLists(l2.next, l1);
			return l2;
		}
	} 
};


var mergeTwoListsIteration = function(l1, l2) {
	let head = new ListNode(-1);
	let prev = head;
	while (l1 && l2) {
		if (l1.val < l2.val) {
			prev.next = l1;
			l1 = l1.next;
		} else {
			prev.next = l2;
			l2 = l2.next;
		}
		prev = prev.next
	}
	prev.next = l1 ? l1 : l2;
	return head.next;
};

const l1 = new ListNode(1, new ListNode(3));
const l2 = new ListNode(2, new ListNode(4));

console.log(mergeTwoLists(l1, l2));
console.log(mergeTwoListsIteration(l1, l2));