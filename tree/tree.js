//Tree implementation

const printNode = (value) => {
  console.log(value);
};

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
    this.min = this.min.bind(this);
    this.minNode = this.minNode.bind(this);
    this.max = this.max.bind(this);
    this.maxNode = this.maxNode.bind(this);
    this.search = this.search.bind(this);
    this.searchNode = this.searchNode.bind(this);
    this.remove = this.remove.bind(this);
    this.removeNode = this.removeNode.bind(this);
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

  //Search for min value
  min() {
    return this.minNode(this.root);
  }

  minNode(node) {
    if (node) {
      while(node && node.left !== null) {
        node = node.left;
      }
      return node.key;
    }
    return null;
  }

  //Search for min value
  max() {
    return this.maxNode(this.root);
  }

  maxNode(node) {
    if (node) {
      while(node && node.right !== null) {
        node = node.right;
      }
      return node.key;
    }
    return null;
  }

  //Search
  search(key) {
    return this.searchNode(this.root, key);
  }

  searchNode(node, key) {
    if (node && key) {
      if (key === node.key) return node;
      else if(key > node.key) return this.searchNode(node.right, key);
      else if(key < node.key) return this.searchNode(node.left, key);
    }
    return false;
  }

  //Remove a node
  remove(key) {
    this.root = this.removeNode(this.root, key);
  }

  removeNode(node, key) {
    if (node === null) return null;
    if (key < node.key) {
      node.left = this.removeNode(node.left, key);
      return node;
    } else if (key > node.key) {
      node.right = this.removeNode(node.right, key);
      return node;
    } else { //found key now start removing
      //case 1 - left node
      if (node.left === null && node.right === null) {
        node = null;
        return node;
      }

      //case 2 - a node with 1 child
      if (node.left === null) {
        node = node.right;
        return node;
      } else if (node.right === null) {
        node = node.left;
        return node;
      }

      //case 3 - a node with 2 children
      const auxKey = this.minNode(node.right);
      node.key = auxKey;
      node.right = this.removeNode(node.right, auxKey);
      return node;
    }
  }
}

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

tree.remove(15);

console.log(tree.root.right);