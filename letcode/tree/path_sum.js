/*
Given a binary tree and a sum, determine if the tree has a root-to-leaf path such that adding up all the values along the path equals the given sum.

Note: A leaf is a node with no children.

Example:

Given the below binary tree and sum = 22,

      5
     / \
    4   8
   /   / \
  11  13  4
 /  \      \
7    2      1
return true, as there exist a root-to-leaf path 5->4->11->2 which sum is 22.
*/

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

//Given binary tree [1,2,2,3,4,4,3],
const root = new TreeNode(5, new TreeNode(4, new TreeNode(11, new TreeNode(7), new TreeNode(2)))
	, new TreeNode(8, new TreeNode(13), new TreeNode(4, null, new TreeNode(1))));
const root2 = new TreeNode(1, new TreeNode(2));

var hasPathSum = function(root, sum) {
    const traverse = (tree, tmp) => {
    	if (!tree) return false;
    	else if (!tree.left && !tree.right) return tmp === tree.val;
    	else {
    		return traverse(tree.left, tmp - tree.val) || traverse(tree.right, tmp - tree.val);
    	}
    }
    return traverse(root, sum);
};

console.log(hasPathSum(root, 22));
console.log(hasPathSum(root2, 1));