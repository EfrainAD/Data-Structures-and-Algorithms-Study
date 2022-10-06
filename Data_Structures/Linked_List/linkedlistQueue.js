class Node {
     constructor(value) {
       this.value = value;
       this.next = null;
     }
   }
   
   class Queue {
     constructor(){
       this.first = null;
       this.last = null;
       this.length = 0;
     }
     peek() {
          return console.log(this.first)
     }
     enqueue(value){
          const addedNode = new Node(value)
          if(this.length === 0) {
               this.first = addedNode
          } else {
               this.last.next = addedNode
          }
          this.last = addedNode
          this.length++
          return console.log(this)
     }
     dequeue(){
          if (this.length === 0) return console.log(-1)
          if (this.length === 1) 
               this.last = null
          this.first = this.first.next
          this.length--
          return console.log(this)
     }
     isEmpty() {
          return console.log(this.length === 0)
     }
   }
   
   const myQueue = new Queue();
   myQueue.peek()
   myQueue.isEmpty()
   myQueue.enqueue('Joy')
   myQueue.enqueue('Matt')
   myQueue.enqueue('three')
   myQueue.dequeue()
   myQueue.peek()
   myQueue.dequeue()
   myQueue.isEmpty()
   myQueue.dequeue()
   myQueue.isEmpty()

   //Joy
   //Matt
   //Pavel
   //Samir
   