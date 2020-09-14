
/*
Level-order traversal is to traverse the tree level by level.

Given a binary tree, return the level order traversal of its nodes' values. (ie, from left to right, level by level).

For example:
Given binary tree [3,9,20,null,null,15,7],

[
  [3],
  [9,20],
  [15,7]
]
*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root = new TreeNode(1, new TreeNode(2, new TreeNode(4)), new TreeNode(3, new TreeNode(5)));



/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var levelOrder = function(root) {
    const res = [];
    const traverse = (tree, level) => {
    	tree.left && traverse(tree.left, level + 1);
    	tree.right && traverse(tree.right, level + 1);
    	res[level] && res[level].push(tree.val) || (res[level] = [tree.val]);
    }
    root && traverse(root, 0);
    return res;
};


console.log(levelOrder(root));
