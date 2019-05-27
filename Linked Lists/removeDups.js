// write code to remove duplicated from an unsorted linked list

// hint 1: Have you tried a hash table? You should be able to do this in a single pass of the linked list
// hint 2: Try using two pointers, where the second one searches ahead of the first one.

// implement a linkedlist class
// implement a node class
class Node {
    constructor (value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor () {
        this.head = null;
        this.tail = null; 
    }
    // add node
    addToTail (value) {
        let newNode = new Node(value);
        if(!this.head){
            this.head = newNode;
            this.tail = newNode;
        } else {
            let current = this.head;
            while(current.next !== null){
                current = current.next;
            }
            // if current is the tail
            current.next = newNode;
            this.tail = newNode;
        }
    }
    // remove duplicate
    removeDuplicate() {
        let current = this.head;
        let buffer = {};
        while(current !== null){
            if(buffer[current]){
                delete this.current;
            } else {
                buffer[current] = true;
            }
            prev = current;
            current = current.next;
        }
    }
}


let list = new LinkedList();
list.addToTail('a');
list.addToTail('b');
list.addToTail('c');
list.addToTail('d');
list.addToTail('e');

console.log(list);