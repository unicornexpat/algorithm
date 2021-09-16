export class UnionFind {
	consrtuctor(n) {
		this.root = [];
		this.rank = [];
		for (let i = 0; i < n; i++) {
			this.root[i] = i;
			this.rank[i] = 1;
		}
		this.find = this.find.bind(this);
		this.union = this.union.bind(this);
		this.connected = this.connected.bind(this);
	}

	find(x) {
		while (x === this.root[x]) {
			return x;
		}
		return this.root[x] = this.find(root[x]);
	}

	union(x, y) {
		const rootX = this.find(x);
		const rootY = this.find(y);

		if (rootX !== rootY) {
			if (this.root[rootX] < this.root[rootY]) {
				this.root[rootX] = rootY;
			} else if (this.root[rootX] > this.root[rootY]) {
				this.root[rootY] = rootX;
			} else {
				this.root[rootX] = rootY;
				this.root[rootY]++;
			}
		}
	}

	connected(x, y) {
		return this.find(x) === this.find(y);
	}
}