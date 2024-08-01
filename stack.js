
class Stack {
    constructor() {
        this.stack = [];
    }

    push(value) {
        this.stack.push(value);  // pushes a value to the top of the stack
    }

    top() {
        return this.stack[this.stack.length-1];   // Returns the element at the top of the stack
    }
    
    pop() {
        return this.stack.pop()    // Removes and returns the top element of the stack
    }

    isEmpty() {
        return this.stack.length === 0;
    }

    
    peek() {
        if(this.isEmpty()) {
            console.log("stack is empty")       //  same as top
        }     
        return this.stack[this.stack.length-1]   
    }
    
}

function main() {
    const stack  = new Stack();

    stack.push(1)
    stack.push(2)
    stack.push(3)
    stack.push(4)
    stack.push(5)
    stack.push(6)
    
    

    while(!stack.isEmpty()) {
        console.log( stack.top()+ ' ');
        
        stack.pop();
    }
}

main()




// TODO :  checking size

// let stack = []
// stack.push(5)
// stack.push(6)
// console.log(stack.length)
// stack.pop()
// console.log(stack.length)



////////////////////////////////////////////////////////////////////////////////////////////////////////////////// TODO
////////////////////////////////////!    STACK USING LINKED LIST    ///////////////////////////////////////////////////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////// TODO

class Node {
    constructor(value) {
        this.value = value
        this.next = null
    }
}

class stackk {
    constructor() {
        this.top = null
    }

    isEmpty() {
        return this.top == null
    }
    
    push(value) {
        const node = new Node(value)
        if(!this.isEmpty()) {
            node.next = this.top
        }
        this.top = node
    }

    pop() {
        if(this.isEmpty()) {
            console.log("stack is empty")
        }
        const poppedValue = this.top.value
        this.top = this.top.next
        return poppedValue
    }

    

    peek() {
        if(this.isEmpty()) {
            console.log("stack is empty")
        }

        return this.top.value
    }

}

function result() {
    const stackInstance = new stackk()

    stackInstance.push(10)
    stackInstance.push(20)
    stackInstance.push(30)
    stackInstance.push(40)

    while(!stackInstance.isEmpty()) {
        console.log(stackInstance.peek())
        stackInstance.pop()
    }
}

result()