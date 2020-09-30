/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
 function TreeNode(val, left, right) {
 	this.val = (val===undefined ? 0 : val)
 	this.left = (left===undefined ? null : left)
 	this.right = (right===undefined ? null : right)
 }

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function(root) {
	const res = [];
    const traverse = (tree) => {
    	if (!tree) res.push(null);
    	else {
    		res.push(tree.val);
	    	traverse(tree.left);
	    	traverse(tree.right);
	    }
    }
    traverse(root);
    return res;
};

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function(data) {
    if (!data.length) return;
    const traverse = () => {
    	const val = data.shift();
    	if (val == null) return null;
    	const tree = new TreeNode(val);
    	tree.left = traverse();
    	tree.right = traverse();
    	return tree;
    }
    return traverse();
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

 /*
Input: root = [1,2,3,null,null,4,5]
Output: [1,2,3,null,null,4,5]
 */
const root = new TreeNode(1, new TreeNode(2), new TreeNode(3, new TreeNode(4), new TreeNode(5)));
console.log(deserialize(serialize(root)));