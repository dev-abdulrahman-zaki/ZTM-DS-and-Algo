class HashTable {
  constructor(size) {
    this.data = new Array(size);
  }

  _hash(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = (hash + key.charCodeAt(i) * i) % this.data.length;
    }
    return hash;
  }

  set(key, value) {
    const memoryAddress = this._hash(key);
    if (!this.data[memoryAddress]) {
      this.data[memoryAddress] = [];
    }
    this.data[memoryAddress].push([key, value]);
    return this.data;
  }

  get(key) {
    const memoryAddress = this._hash(key);
    return this.data[memoryAddress];
  }
}

const myHashTable = new HashTable(50);
myHashTable.set("grapes", 10000);
myHashTable.get("grapes");
myHashTable.set("apples", 9);
myHashTable.get("apples");
