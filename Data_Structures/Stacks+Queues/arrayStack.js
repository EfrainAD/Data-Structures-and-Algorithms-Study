
   class Stack {
     constructor(){
       this.stack = new Array;
     }
     peek() {
          if (this.stack.length === 0) return null
          return this.stack[this.stack.length-1];
     }
     push(value){
       this.stack.push(value)
       return this;
     }
     pop(){
       return this.stack.pop();
     }
     //isEmpty
   }
   
   const myStack = new Stack();
   console.log(myStack.peek())
   console.log(myStack.push('google'))
   console.log(myStack.push('udemy'))
     console.log(myStack.push('discord'))
   console.log(myStack.peek())
   console.log(myStack.pop())
   console.log(myStack.pop())
   console.log(myStack.pop())