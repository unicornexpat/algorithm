/**
Input: [1,null,2,3]
   1
    \
     2
    /
   3

Output: [1,3,2]his.right = (right===undefined ? null : right)
 */

function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

const root = new TreeNode(1, undefined, new TreeNode(2, new TreeNode(3), undefined));


var inorderTraversal = function(root) {
    const res = [];
    const traverse = (tree, res = []) => {
        if (tree) {
            traverse(tree.left, res);
            res.push(tree.val);
            traverse(tree.right, res)
        }
    }
    traverse(root, res);
    return res;
};

console.log(inorderTraversal(root))