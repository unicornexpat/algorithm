/*
Given a binary tree

struct Node {
  int val;
  Node *left;
  Node *right;
  Node *next;
}
Populate each next pointer to point to its next right node. If there is no next right node, the next pointer should be set to NULL.

Initially, all next pointers are set to NULL.

 

Follow up:

You may only use constant extra space.
Recursive approach is fine, you may assume implicit stack space does not count as extra space for this problem.
 

Example 1:



Input: root = [1,2,3,4,5,null,7]
Output: [1,#,2,3,#,4,5,7,#]
Explanation: Given the above binary tree (Figure A), your function should populate each next pointer to point to its next right node, just like in Figure B. The serialized output is in level order as connected by the next pointers, with '#' signifying the end of each level.
 

Constraints:

The number of nodes in the given tree is less than 6000.
-100 <= node.val <= 100
*/

function TreeNode(val, left, right, next) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
    this.next = next === undefined ? null : next;
}


var connect = function(root) {
    if (!root) return root;

    const nextMost = (tree) => {
    	if (!tree) return null;
    	if (tree.left) return tree.left;
    	if (tree.right) return tree.right;
    	return nextMost(tree.next);
    }

    if (root.left) {
    	root.left.next = root.right ? root.right : nextMost(root.next); 
    }
    if (root.right) {
    	root.right.next = nextMost(root.next);
    }

    connect(root.right);
    connect(root.left);
    return root;
};

// root = [1,2,3,4,5,null,7]

const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(7)));

console.log(connect(root));








