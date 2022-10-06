class Node {
     constructor(value){
       this.value = value;
       this.next = null;
     }
   }
   
   class Stack {
     constructor(){
       this.top = null;
       this.bottom = null;
       this.length = 0;
     }
     peek() {
          return console.log(this.top.value)
     }
     push(value){
          // create new node
          const newNode = {
               value: value,
               next: null
          }
          newNode.next = this.top
          this.top = newNode
          if (this.bottom === null)
               this.bottom = newNode
          this.length++
          return console.log(newNode)
     }
     pop(){
          if (this.length === 0) return console.log(-1)
          const popNode = this.top
          this.top = this.top.next
          if (this.length === 1)
               this.bottom = this.top
          this.length--
          console.log(this.top)
          return console.log(popNode)
     }
     isEmpty() {
          return console.log(this.length === 0)
     }
   }
   
   const myStack = new Stack();
   myStack.isEmpty()
   myStack.push(1)
   myStack.push(2)
   myStack.push(3)
   myStack.pop()
   myStack.peek()
   myStack.isEmpty()

   