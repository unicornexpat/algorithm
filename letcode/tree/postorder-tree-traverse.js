/**
Post-order traversal is to traverse the left subtree first. Then traverse the right subtree. Finally, visit the root.

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

var postorderTraversal = function(root) {
    const res = [];
    const traverse = (tree, res = []) => {
    	if (!!tree) {
    		traverse(tree.left, res);
    		traverse(tree.right, res);
    		res.push(tree.val);
    	}
    }
    traverse(root, res);
    return res;
};

//[3,2,1]
console.log(postorderTraversal(root));