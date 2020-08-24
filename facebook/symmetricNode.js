//Given two identical DOM tree structures, A and B, and a node from A, find the corresponding node in B.

//Return chidlrens of a node in an array
function getChildren(node) {
  return Array.from(node.childNodes);
}

//Returns an array of indices from a given node
function getPath(root, node) {
  const path = [];
  let currentElement = node;

  while(currentElement !== root && currentElement && currentElement.parentNode) {
    const index = getChildren(currentElement.parentNode).indexOf(currentElement);
    path.push(index);
    currentElement = currentElement.parentNode;
  }

  return path;

}

//Return the symmetric node
function getNodeByPath(root, originalPath) {
  const path = [...originalPath];

  let element = root;

  while(path.length) {
    element = getChildren(element)[path.pop()];
  }

  return element;
}

function getSymmetricNode(root1, root2, node) {
  const path = getPath(root1, node);
  return getNodeByPath(root2, path);
}
