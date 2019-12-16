/*******************************************************
  Disclaimer: This hash table is originally 
              found on a Medium article by Rohan Paul
  Link: https://medium.com/javascript-in-plain-english/algorithm-in-javascript-hash-table-7b0464d2b81b
********************************************************/

const HashTable = class {
  constructor() {
    this.table = new Array(137);
    this.counter = 0;
    // this.values = [];
  }

  // Defining the hashing function which allows a sting to be used as a key
  hash(string) {
    const H = 37;
    let total = 0;

    for (var i = 0; i < string.length; i++) {
      total += H * total + string.charCodeAt(i);
    }
    total %= this.table.length;
    if (total < 1) {
      this.table.length - 1;
    }
    return parseInt(total);
  }

  showDistro() {
    for (const key in this.table) {
      if (this.table[key] !== undefined) {
        console.log(key, " : ", this.table[key]);
      }
    }
  }

  put(data) {
    let pos = this.hash(data);

    // Solving collision by linear probing
    if (this.table[pos] === undefined) {
      this.table[pos] = data;
      this.counter++;
      // console.log(pos, data);
    } else {
      while (this.table[pos] !== undefined && this.table[pos] !== data) {
        pos++;
      }
      if (this.table[pos] !== data) {
        this.table[pos] = data;
        this.counter++;
        // console.log(pos, " : ", data);
      }
    }
  }

  getKey(data) {
    let pos = this.hash(data);
    while (this.table[pos] !== undefined && this.table[pos] !== data) {
      pos++;
    }
    return pos;
  }

  setTeam(key, data){
    this.table[key] = data;
  }

  isEnoughTeam(){
    if (this.counter < 18){
      // console.log(this.counter);
      return false;
    } else {
      // console.log(this.counter);
      return true;
    }
  }
};

module.exports = HashTable;
