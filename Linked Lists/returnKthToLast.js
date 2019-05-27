/*
Implement an algorithm to find the kth to last element of a singly linked list. 
8
25
41
67
126
*/

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
    findKthtoLastElement(k) {

    }
}