
class HashTable {
  constructor(size = 61) {
    this.keyMap = new Array(size);
  }
  hash(key) {
      let index = key % this.keyMap.length;
      return index;
  }

  set(key, value) {
    let index = this.hash(key);
    if(!this.keyMap[index]) {
      this.keyMap[index] = [];
    }
    this.keyMap[index].push([key, value]);
  }
  get(key) {
    let index = this.hash(key);
    if(!this.keyMap[index]) 
      return undefined;
    for(let i = 0; i < this.keyMap[index].length; i ++) {
      if(this.keyMap[index][i][0] === key) {
        return this.keyMap[index][i][1];
      }  
    }
    return undefined;
  }
}


class Customer {
  constructor(name, address, phone) {
    this.name = name;
    this.address = address;
    this.phone = phone;
  }
}

let customer1 = new Customer('Kerry Jackson', '80 Webster', 7893456788);


let ht = new HashTable();

ht.set(customer1.phone, customer1);

console.log(customer1);
console.log(ht.get(7893456788));
console.log(ht.get(8572531121));



class StoreItem {
  constructor(item, quantity) {
    this.item = item;
    this.quantity = quantity;
  }
  getCode() {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(this.item.length, 100); i ++) {
      let value = this.item.charCodeAt(i) - 96
      total = (total * prime + value) % this.item.length;
    }
    return total;
  }
}

let item1 = new StoreItem("Chinchilla", 2);
let inventory = new HashTable();
inventory.set(item1.getCode(), item1);

console.log(item1);
console.log(inventory.get('Chinchilla'));



class Publication {
  constructor(publisher, publicationDate) {
    this.publisher = publisher;
    this.publicationDate = publicationDate;
  }
  getCode() {
    let total = 0;
    let prime = 31;
    for (let i = 0; i < Math.min(this.publisher.length, 100); i ++) {
      let value = this.publisher.charCodeAt(i) - 96
      total = (total * prime + value) % this.publisher.length;
    }
    return total;
  }
}

let publication1 = new Publication ("America's Top 50 Beaches", 01201989);

let publication = new HashTable

publication.set(publication1.getCode(), publication1);