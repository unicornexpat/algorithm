 function TreeNode(val, left, right) {
     this.val = (val===undefined ? 0 : val)
     this.left = (left===undefined ? null : left)
     this.right = (right===undefined ? null : right)
 }

 /**
 * @param {TreeNode} root
 * @return {number}
 */
var maxDepth = function(root) {
	if (!root) return 0;
	else {
		const leftHeight = maxDepth(root.left);
		const rightHeight = maxDepth(root.right);
		return Math.max(leftHeight, rightHeight) + 1;
	}
};


var maxDepthTail = function(root, count = 0) {
	return root ? Math.max(maxDepthTail(root.left, count + 1), maxDepthTail(root.right, count + 1)) : count;
};

// root = [1,2,3,4,5,null,7]

const root = new TreeNode(1, new TreeNode(2, new TreeNode(4), new TreeNode(5)), new TreeNode(3, null, new TreeNode(7)));

console.log(maxDepth(root));
console.log(maxDepthTail(root));



