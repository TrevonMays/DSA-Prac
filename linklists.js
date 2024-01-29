//Single Link list
//In a singly linked list, each node contains a reference to the next node in the sequence. 
//Traversing a singly linked list is done in a forward direction.

class Node {
    constructor(data, next = null) { // creating the node  
        this.data = data;
        this.next = next; // this is creating the node.next 
    }
}

class SingleLinkedList {
    constructor() {
        this.head = null; // create the head pointer 
    }

    // setting the head first in the data
    insertFirst(data) {
        this.head = new Node(data, this.head);
    }
    // checking the size of the node 
    size() {
    let count = 0;
    let node = this.head;

    while (node) {
        count++;
        node = node.next;
    }

    return count;
}

  // Delete a node by value
    deleteByValue(value) {
    if (!this.head) {
        return; // List is empty
    }

    // If the node to be deleted is the head
    if (this.head.data === value) {
        this.head = this.head.next;
        return;
    }

    let current = this.head;
    let prev = null;

    // Traverse the list to find the node with the specified value
    while (current && current.data !== value) {
        prev = current;
        current = current.next;
    }

    // If the value is not found
    if (!current) {
        return;
    }

    // Skip the node to delete it
    prev.next = current.next;
}
    //search for a node or the value of the node 
    search(value){
        let curr = this.head;

        while(curr){
            if(curr.data === value){
                return curr;
            }
            curr = curr.next;
        }
        return null;
    }

display() {
    let current = this.head;
    while (current) {
        console.log(current.data);
        current = current.next;
    }
}
}


// Example usage:
const singleLinkedList = new SingleLinkedList();
singleLinkedList.insertFirst(1);
singleLinkedList.insertFirst(2);
singleLinkedList.insertFirst(3);
singleLinkedList.insertFirst(4)
singleLinkedList.deleteByValue(4)
singleLinkedList.insertFirst(5)

const foundNode = singleLinkedList.search(5)

if(foundNode){
    console.log("node found:", foundNode.data)
}else{
    console.log("node not found")
}

console.log(singleLinkedList.size()); // Output: 





//Double link list 
//In a doubly linked list, each node contains references to both the next and previous nodes. 
//This allows for traversal in both forward and backward directions, 
//but it requires additional memory for the backward reference.

