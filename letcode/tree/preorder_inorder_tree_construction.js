/*
Given preorder and inorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

preorder = [3,9,20,15,7]
inorder = [9,3,15,20,7]
Return the following binary tree:

    3
   / \
  9  20
    /  \
   15   7
*/
function TreeNode(val, left, right) {
    this.val = (val===undefined ? 0 : val)
    this.left = (left===undefined ? null : left)
    this.right = (right===undefined ? null : right)
}

/*
Inorder: <ROOT><LEFT><RIGHT>, inorder: <LEFT><ROOT><RIGHT>
The last element of postorder will always be the root of a subtree.
We can furter determine its left and right subtree by finding its position in the inorder array.
*/

var buildTree = function(preorder, inorder) {
	const dict = {};
	inorder.map((item, i) => {
		dict[item] = i;
	});
    const traverse = (begin, end) => {
    	if (begin > end) return null;
    	const val = preorder.shift();
    	const root = new TreeNode(val);
    	root.left = traverse(begin, dict[val] - 1);
    	root.right = traverse(dict[val] + 1, end);
    	return root;
    }

    return traverse(0, inorder.length - 1);
};

const preorder = [3,9,20,15,7];
const inorder = [9,3,15,20,7];

console.log(buildTree(preorder, inorder));