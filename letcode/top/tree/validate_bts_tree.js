/*
Given the root of a binary tree, determine if it is a valid binary search tree (BST).

A valid BST is defined as follows:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and right subtrees must also be binary search trees.
*/

function TreeNode(val, left, right) {
   this.val = (val===undefined ? 0 : val)
   this.left = (left===undefined ? null : left)
   this.right = (right===undefined ? null : right)
}

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isValidBST = function(root) {
    const check = function(tree, high, low) {
    	// Empty Tree is a valid BTS
    	if (tree === null) {
    		return true;
    	}
    	if (high !== null && tree.val >= high || low !== null && tree.val <= low) {
    		return false;
    	}
    	return check(tree.left, tree.val, low) && check(tree.right, high, tree.val)

	};
	return check(root);
};

[5,4,6,null,null,3,7]

const tree = new TreeNode(5, new TreeNode(4), new TreeNode(6, new TreeNode(3), new TreeNode(7)));

console.log(isValidBST(tree));