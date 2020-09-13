/**
Pre-order traversal is to visit the root first. Then traverse the left subtree. Finally, traverse the right subtree.
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */

 function TreeNode(val, left, right) {
 	this.val = (val===undefined ? 0 : val)
 	this.left = (left===undefined ? null : left)
 	this.right = (right===undefined ? null : right)
 }

const root = new TreeNode(1, undefined, new TreeNode(2, new TreeNode(3), undefined));
var preorderTraversal = function(root) {
    const res = [];
    const traverse = (tree, res) => {
    	if (!!tree) {
	        res.push(tree.val);
	        if (tree.left) traverse(tree.left, res);
	        if (tree.right) traverse(tree.right, res);
    	}
    };
    traverse(root, res);
    return res;
};

console.log(preorderTraversal(root));

//[1,null,2,3]