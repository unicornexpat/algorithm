/*
Given a binary tree, find its maximum depth.

The maximum depth is the number of nodes along the longest path from the root node down to the farthest leaf node.

Note: A leaf is a node with no children.
*/


function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

//Given binary tree [3,9,20,null,null,15,7],

const root = new TreeNode(3, 9, new TreeNode(20, new TreeNode(15), new TreeNode(7)));



/**
 * @param {TreeNode} root
 * @return {number}
 */
// Top down
var maxDepthTopDown = function(root) {
	let answer = 0;
	const traverse = (tree, depth) => {
		if (!tree) return;
		if (!tree.left && !tree.right) {
			answer = Math.max(answer, depth);
		} else {
			tree.left && traverse(tree.left, depth+1);
			tree.right && traverse(tree.right, depth+1);
		}
	}
	traverse(root, 1);
	return answer;
};

//Bottom-up => fastest
var maxDepth = function(root) {
	const traverse = (tree, depth = 0) => {
		if (!tree) return depth;
		const leftDepth = traverse(tree.left, depth + 1);
		const rightDepth = traverse(tree.right, depth + 1);
		return Math.max(leftDepth, rightDepth);
	}
	return traverse(root);
};
console.log(maxDepth(root));




