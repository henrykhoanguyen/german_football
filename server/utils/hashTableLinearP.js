// HashTable with Linear Probing technique of collision-resolution.
class HashTableLinearP extends HashTable {
  constructor() {
    super();
    this.values = new Array();
  }

  put(key, data) {
    const pos = this.hash(key);
    if(this.table[pos] === undefined) {
      this.table[pos]  = key;
      this.values[pos] = data;
    } else {
      while(this.table[pos] !== undefined) {
        pos++;
      }
      this.table[pos]  = key;
      this.values[pos] = data;
    }
  }

  get(key) {
    const hash = this.hash(key);
    if (hash > -1) {
      for (let i = hash; this.table[i] !== undefined; i++) {
        if (this.table[i] === key) {
          return this.values[i];
        }
      }
    }
    return undefined;
  }

  showDistro() {
    for (const key in this.table) {
      if(this.table[key] !== undefined) {
        console.log(key, ' : ', this.values[key]);
      }
    }
  }
}