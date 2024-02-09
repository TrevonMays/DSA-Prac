// class Node{
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }

// class LinkedList {
//     constructor(value){
//         const newNode = new Node(value)
//         this.head = newNode
//         this.tail = this.head
//         this.length = 1

//     }

//     printList() {
//         let temp = this.head;
//         while (temp !== null) {
//             console.log(temp.value);
//             temp = temp.next;
//         }
//     }

//     getHead() {
//         if (this.head === null) {
//             console.log("Head: null");
//         } else {
//             console.log("Head: " + this.head.value);
//         }
//     }

//     getTail() {
//         if (this.tail === null) {
//             console.log("Tail: null");
//         } else {
//             console.log("Tail: " + this.tail.value);
//         }
//     }

//     getLength() {
//         console.log("Length: " + this.length);
//     }
//     push(value){
//         const newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode
//         } else{
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//         this.length++
//         return this
//     }

// }


// function test() {
//     let myLinkedList = new LinkedList(4);
    
//     myLinkedList.getHead();
//     myLinkedList.getTail();
//     myLinkedList.getLength();
//     console.log("\nLinked List:");
//     myLinkedList.printList();
// }


// test();


// /*
//     EXPECTED OUTPUT:
//     ----------------
//     Head: 4
//     Tail: 4
//     Length: 1
    
//     Linked List:
//     4

// */



// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
 
// class LinkedList {
//     constructor(value) {
//         const newNode = new Node(value);
//         this.head = newNode;
//         this.tail = this.head;
//         this.length = 1;
//     }

//     printList() {
//         let temp = this.head;
//         while (temp !== null) {
//             console.log(temp.value);
//             temp = temp.next;
//         }
//     }

//     getHead() {
//         if (this.head === null) {
//             console.log("Head: null");
//         } else {
//             console.log("Head: " + this.head.value);
//         }
//     }

//     getTail() {
//         if (this.tail === null) {
//             console.log("Tail: null");
//         } else {
//             console.log("Tail: " + this.tail.value);
//         }
//     }

//     getLength() {
//         console.log("Length: " + this.length);
//     }

//     makeEmpty() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
//     push(value){
//         const newNode = new Node(value)
//         if(!this.head){
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode
//             this.tail = newNode
//         }
//         this.length++
//         return this
// //     }

// // }
 

// // function test() {
// //     let myLinkedList = new LinkedList(1);
// //     myLinkedList.makeEmpty();
// //     myLinkedList.push(1);
// //     myLinkedList.push(2);
    
    
// //     myLinkedList.getHead();
// //     myLinkedList.getTail();
// //     myLinkedList.getLength();
// //     console.log("\nLinked List:");
// //     myLinkedList.printList();
// // }


// // test();


// // /*
// //     EXPECTED OUTPUT:
// //     ----------------
// //     Head: 1
// //     Tail: 2
// //     Length: 2

// //     Linked List:
// //     1
// //     2

// // */
// class Node {
//     constructor(value){
//         this.value = value;
//         this.next = null;
//     }
// }
 
// class LinkedList {
//     constructor(value) {
//         const newNode = new Node(value);
//         this.head = newNode;
//         this.tail = this.head;
//         this.length = 1;
//     }

//     printList() {
//         let temp = this.head;
//         while (temp !== null) {
//             console.log(temp.value);
//             temp = temp.next;
//         }
//     }

//     getHead() {
//         if (this.head === null) {
//             console.log("Head: null");
//         } else {
//             console.log("Head: " + this.head.value);
//         }
//     }

//     getTail() {
//         if (this.tail === null) {
//             console.log("Tail: null");
//         } else {
//             console.log("Tail: " + this.tail.value);
//         }
//     }

//     getLength() {
//         console.log("Length: " + this.length);
//     }

//     makeEmpty() {
//         this.head = null;
//         this.tail = null;
//         this.length = 0;
//     }
 
//     push(value) {
//         const newNode = new Node(value);
//         if (!this.head) {
//             this.head = newNode;
//             this.tail = newNode;
//         } else {
//             this.tail.next = newNode;
//             this.tail = newNode;
//         }
//         this.length++;
//         return this;
//     }
 
//     pop(){
//         if(!this.head) return
//         let temp = this.head
//         let pre = this.head

//         while(temp.next){
//             pre = temp
//             temp = temp.next
//         }
//         this.tail = pre
//         this.tail.next = null
//         this.length--

//         if(this.length === 0){
//             this.head = null
//             this.tail = null
//         }
//         return temp
//     }
//  }
 

//  function test() {
//     let myLinkedList = new LinkedList(1);
//     myLinkedList.push(2);

//     // (2) Items in LL - Returns 2 Node
//     if (myLinkedList.length !== 0) {
//         console.log(myLinkedList.pop().value);
//     } else {
//         console.log("null");
//     }

//     // (1) Item in LL - Returns 1 Node
//     if (myLinkedList.length !== 0) {
//         console.log(myLinkedList.pop().value);
//     } else {
//         console.log("null");
//     }

//     // (0) Items in LL - Returns null
//     if (myLinkedList.length !== 0) {
//         console.log(myLinkedList.pop().value);
//     } else {
//         console.log("null");
//     }
//  }


//  test();


// /*
//     EXPECTED OUTPUT:
//     ----------------
//     2
//     1
//     null

// */

class Node {
    constructor(value){
        this.value = value;
        this.next = null;
    }
}
 
class LinkedList {
    constructor(value) {
        const newNode = new Node(value);
        this.head = newNode;
        this.tail = this.head;
        this.length = 1;
    }

    printList() {
        let temp = this.head;
        while (temp !== null) {
            console.log(temp.value);
            temp = temp.next;
        }
    }

    getHead() {
        if (this.head === null) {
            console.log("Head: null");
        } else {
            console.log("Head: " + this.head.value);
        }
    }

    getTail() {
        if (this.tail === null) {
            console.log("Tail: null");
        } else {
            console.log("Tail: " + this.tail.value);
        }
    }

    getLength() {
        console.log("Length: " + this.length);
    }

    makeEmpty() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }
 
    push(value) {
        const newNode = new Node(value);
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
 
    pop() {
        if (this.length === 0) return undefined;
        let temp = this.head;
        let pre = this.head;
        while (temp.next) {
            pre = temp;
            temp = temp.next;
        }
        this.tail = pre;
        this.tail.next = null;
        this.length--;
        if (this.length === 0) {
            this.head = null;
            this.tail = null;
        }
        return temp;
    }
 
	unshift(){
        const newNode = new Node(value)
        if(!this.head){
            this.head = newNode
            this.tail = newNode
        } else{
            newNode.next = this.head
            this.head = newNode
        }
        this.length++
    return this
    }
 
 }
 

function test() {
    let myLinkedList = new LinkedList(2);
    myLinkedList.push(3);

    console.log("Before unshift():");
    console.log("-----------------");
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();

    console.log("\nLinked List:");
    myLinkedList.printList();

    myLinkedList.unshift(1);

    console.log("\nAfter unshift():");
    console.log("----------------");
    myLinkedList.getHead();
    myLinkedList.getTail();
    myLinkedList.getLength();

    console.log("\nLinked List:");
    myLinkedList.printList();
}


test();


/*
    EXPECTED OUTPUT:

    Before unshift():
    -----------------
    Head: 2
    Tail: 3
    Length: 2

    Linked List:
    2
    3

    After unshift():
    ----------------
    Head: 1
    Tail: 3
    Length: 3

    Linked List:
    1
    2
    3

*/


 