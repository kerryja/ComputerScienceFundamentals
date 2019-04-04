class Node {
  constructor() {
    this.value = undefined;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
  }

  push(element) {
    let node = new Node();
    node.value = element;
    node.next = null;
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = node;
    }
  }

  //go through each node
  //each time you go through a node, check that the node value is not equal to what you are trying to insert
  // if it is equal, return because you don't want to insert it
  pushDeduplicated(element) {
    let node = new Node();
    node.value = element;
    node.next = null;
    if (this.head === null) {
      this.head = node;
    } else {
      let current = this.head;
      while (current.next !== null) {
        if (current.value === element) {
          return;
        }
        current = current.next;
      }
      current.next = node;
    }
  }

  removeDuplicates() {
    let deduplicatedList = new LinkedList();
    let current = this.head;
    while (current) {
      deduplicatedList.pushDeduplicated(current.value);
      current = current.next;
    }
    return deduplicatedList;
  }

  count() {
    let count = 0;
    let current = this.head;
    while (current) {
      count++;
      current = current.next;
    }
    return count;
  }

  prepend(element) {
    let node = new Node();
    node.value = element;
    node.next = this.head;
    this.head = node;
  }

  reverse() {
    let reversedList = new LinkedList();
    let current = this.head;
    while (current) {
      reversedList.prepend(current.value);
      current = current.next;
    }
    return reversedList;
  }

  print() {
    let current = this.head;
    while (current) {
      console.log(current.value);
      current = current.next;
    }
  }
}

let list = new LinkedList();
list.push(1);
list.push(2);
list.push(3);
list.push(10);
list.push(8);
list.push(10);
list.push(2);

//console.log(list.count());
//list.print();

console.log("Original list");
list.print();

console.log("Reversed list");
var reversed = list.reverse();
reversed.print();

console.log("Remove duplicates list");
var removeDuplicates = list.removeDuplicates();
removeDuplicates.print();
