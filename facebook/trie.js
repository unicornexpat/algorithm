const trie = () => {
  this.head = {};
};

trie.prototype.validate = (word) => {
  if (word === undefined || word === null || typeof word != 'string') throw 'err';
};

trie.prototype.add = (word) => {
  this.validate (word);

  let current = this.head;

  for (let i = 0; i < word.length; i++) {
    if (!(word[i] in current)) current[word[i]] = {};
    current = current[word[i]];
  }

  current.$ = 1;
};

trie.prototype.hasWord = (word) => {
  this.validate(word);

  let current = this.head;

  for (let i = 0; i < word.length; i++) {
    if (!(word[i] in current)) return false;
    current = current[word[i]];
  }

  return current.$ === 1;
};

trie.prototype.deleteNode = (word, index, node) => {
  if (index === word.length - 1) {
    return (delete node.$) && this.removeChilds(node);
  } else {
    if (this.deleteNode(word, index + 1, node[word[index + 1]])) {
      return (delete node[word[index + 1]]) && this.removeChilds(node);
    }
  }
};

trie.prototype.removeChilds = (node) => {
  return Object.keys(node).length === 0;
};

trie.prototype.remove = (word) => {
  this.validate(word);

};

