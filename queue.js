
class Queue {
    constructor() {
        this.items = []
    }

    isEmpty() {
        return this.items.length === 0
    }

    enqueue(value) {
        this.items.push(value)
    }

    dequeue() {
        if(this.isEmpty()) {
            console.log("Queue is empty");
            return -1
        }
        return this.items.shift()
    }

    front() {     // returns the element at the front end without removing it
        if(this.isEmpty()) {
            console.log("Queue is empty");
        }
        return this.items[0];
    }

    rear() {
        if(this.isEmpty()) {
            confirm.log("Queue is empty")
        }
        return this.items[this.items.length-1]
    }

    isFull() {
        if (front == 0 && rear == this.items.length - 1) {
          return true;
        }
        return false;
      }
}

// TODO  :  enqueue() – Insertion of elements to the queue.
// TODO  :  dequeue() – Removal of elements from the queue.
// TODO  :  peek() or front()- Acquires the data element available at the front node of the queue without deleting it.
// TODO  :  rear() – This operation returns the element at the rear end without removing it.
// TODO  :  isFull() – Validates if the queue is full.
// TODO  :  isEmpty() – Checks if the queue is empty.
// TODO  :  size(): This operation returns the size of the queue i.e. the total number of elements it contains.  

////////////////////////////////////////////////////////////////////////////////////////////////////////////////// TODO
////////////////////////////////////!    QUEUE USING LINKED LIST    ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// TODO

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.rear = null;
    }

    isEmpty() {
        return this.front === null;
    }

    enqueue(value) {
        const node = new Node(value);
        if (this.rear !== null) {
            this.rear.next = node;
        }
        this.rear = node;
        if (this.front === null) {
            this.front = node;
        }
    }

    dequeue() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return -1;
        }
        const dequeuedValue = this.front.value;
        this.front = this.front.next;
        if (this.front === null) {
            this.rear = null;
        }
        return dequeuedValue;
    }

    getFront() { // returns the element at the front end without removing it
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return -1;
        }
        return this.front.value;
    }

    getRear() {
        if (this.isEmpty()) {
            console.log("Queue is empty");
            return -1;
        }
        return this.rear.value;
    }
}

// Example usage:
const queue = new Queue();

queue.enqueue(10);
queue.enqueue(20);
queue.enqueue(30);
queue.enqueue(40);

console.log("Front element is: " + queue.getFront()); // 10
console.log("Rear element is: " + queue.getRear());   // 40

while (!queue.isEmpty()) {
    console.log(queue.dequeue()); // 10, 20, 30, 40
}
