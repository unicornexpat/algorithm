//Tree implementation

class Node {
  constructor(key = null) {
    this.key = key;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor(key = null) {
    this.root = key;

    this.insertNode = this.insertNode.bind(this);
    this.insert = this.insert.bind(this);
    this.inOrderTraverse = this.inOrderTraverse.bind(this);
    this.inOrderTraverseNode = this.inOrderTraverseNode.bind(this);
    this.preOrderTraverse = this.preOrderTraverse.bind(this);
    this.preOrderTraverseNode = this.preOrderTraverseNode.bind(this);
    this.postOrderTraverse = this.postOrderTraverse.bind(this);
    this.postOrderTraverseNode = this.postOrderTraverseNode.bind(this);
  }

  //Inserting a node to the tree
  insert(key) {
    let newNode = new Node(key);
    if (this.root === null) this.root = newNode;
    else this.insertNode(this.root, newNode);
  };

  insertNode(node, newNode) {
    if (newNode.key < node.key) {
      if (node.left === null) node.left = newNode;
      else this.insertNode(node.left, newNode);
    } else {
      if (node.right === null) node.right = newNode;
      else this.insertNode(node.right, newNode);
    }
  };

  //In-order traverse
  inOrderTraverse(callback) {
    this.inOrderTraverseNode(this.root, callback)
  }

  inOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.inOrderTraverseNode(node.left, callback);
      callback(node.key);
      this.inOrderTraverseNode(node.right, callback)
    }
  }

  //Pre-order transverse
  preOrderTraverse(callback) {
    this.preOrderTraverseNode(this.root, callback)
  }

  preOrderTraverseNode(node, callback) {
    if (node !== null) {
      callback(node.key);
      this.preOrderTraverseNode(node.left, callback);
      this.preOrderTraverseNode(node.right, callback);
    }
  }

  //Post-order transverse
  postOrderTraverse(callback) {
    this.postOrderTraverseNode(this.root, callback)
  }

  postOrderTraverseNode(node, callback) {
    if (node !== null) {
      this.postOrderTraverseNode(node.left, callback);
      this.postOrderTraverseNode(node.right, callback);
      callback(node.key);
    }
  }


}

const printNode = (value) => {
  console.log(value);
};


let tree = new BinarySearchTree();
tree.insert(11);
tree.insert(7);
tree.insert(15);
tree.insert(5);
tree.insert(3);
tree.insert(9);
tree.insert(8);
tree.insert(10);
tree.insert(13);
tree.insert(12);
tree.insert(14);
tree.insert(20);
tree.insert(18);
tree.insert(25);

tree.postOrderTraverse(printNode);