class UnionFind {
	constructor(x) {
		this.root = [];
		this.rank = [];
		for (let i = 0; i < x; i++) {
			this.root[i] = i;
			this.rank[i] = 1;
		}
		this.find = this.find.bind(this);
		this.union = this.union.bind(this);
		this.connected = this.connected.bind(this);
	}

	find(x) {
		while(x !== this.root[x]) {
			x = this.root[x];
		}
		return this.root[x];
	}

	union(x, y) {
		const rootX = this.find(x);
		const rootY = this.find(y);
		if (rootX !== rootY) {
			if (this.rank[rootX] < this.rank[rootY]) {
				this.root[rootX] = rootY;
			} else if (this.rank[rootX] > this.rank[rootY]) {
				this.root[rootY] = rootX;
			} else {
				this.root[rootX] = rootY;
				this.rank[rootY]++;
			}
		}
	}

	connected(x, y) {
		return this.find(x) === this.find(y);
	}
}

const uf = new UnionFind(10);
// 1-2-5-6-7 3-8-9 4
uf.union(1, 2);
uf.union(2, 5);
uf.union(5, 6);
uf.union(6, 7);
uf.union(3, 8);
uf.union(8, 9);
console.log(uf.root);
console.log(uf.connected(1, 5)); // true
console.log(uf.connected(5, 7)); // true
console.log(uf.connected(4, 9)); // false
// 1-2-5-6-7 3-8-9-4
uf.union(9, 4);
console.log(uf.connected(4, 9)); // true