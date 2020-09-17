/*
Given a binary tree, check whether it is a mirror of itself (ie, symmetric around its center).

For example, this binary tree [1,2,2,3,4,4,3] is symmetric:
    1
   / \
  2   2
 / \ / \
3  4 4  3

But the following [1,2,2,null,3,null,3] is not:

   1
   / \
  2   2
   \   \
   3    3
*/
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

//Given binary tree [1,2,2,3,4,4,3],
const root = new TreeNode(1, new TreeNode(2, new TreeNode(3), new TreeNode(4)), new TreeNode(2, new TreeNode(4), new TreeNode(3)));

//[1,2,2,null,3,null,3]
const root2 = new TreeNode(1, new TreeNode(2, undefined, 3), new TreeNode(2, undefined, 3));

/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    const isMirror = (tree1, tree2) => {
    	if (!tree1 && !tree2) return true;
    	else if (!tree1 || !tree2) return false;
    	else return (tree1.val === tree2.val) && isMirror(tree1.left, tree2.right) && isMirror(tree1.right, tree2.left);
    }
    return isMirror(root, root);
};

console.log(isSymmetric(root));
console.log(isSymmetric(root2));