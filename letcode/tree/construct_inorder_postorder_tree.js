/*
Given inorder and postorder traversal of a tree, construct the binary tree.

Note:
You may assume that duplicates do not exist in the tree.

For example, given

inorder = [9,3,15,20,7]
postorder = [9,15,7,20,3]
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
Inorder: <LEFT><ROOT><RIGHT>, postorder: <LEFT><RIGHT><ROOT>
The last element of postorder will always be the root of a subtree.
We can furter determine its left and right subtree by finding its position in the inorder array.
*/

var buildTree = function(inorder, postorder) {
	let dictionary = {};

	inorder.map((val, i) => {
		dictionary[val] = i;
	});

	console.log(dictionary);

	const traverse = (begin, end) => {
		console.log(begin, end);
		if (begin > end) return null;
		const val = postorder.pop();
		console.log(val, dictionary[val]);
		let root = new TreeNode(val);
		root.right = traverse(dictionary[val] + 1, end)
		root.left = traverse(begin, dictionary[val] - 1);
		return root;
	}
    
    return traverse(0, inorder.length - 1);
};


const inorder = [9,3,15,20,7];
const postorder = [9,15,7,20,3];

console.log(buildTree(inorder, postorder));