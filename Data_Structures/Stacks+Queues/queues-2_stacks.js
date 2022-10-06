// Solutions given
class CrazyQueue {
     constructor() {
       this.first = [];
       this.last = [];
     }
   
     enqueue(value) {
       const length = this.first.length;
       for (let i = 0; i < length; i++) {
         this.last.push(this.first.pop());
       }
       this.last.push(value);
       return console.log('enqueue:', this);
     }

     dequeue() {
       const length = this.last.length;
       for (let i = 0; i < length; i++) {
         this.first.push(this.last.pop());
       }
       this.first.pop();
       return console.log('dequeue:', this);
     }
     peek() {
       if (this.last.length > 0) {
         return console.log('peak:', this.last[0]);
       }
       return console.log('peak:',this.first[this.first.length - 1]);
     }
   }
   
   const myQueue = new CrazyQueue();
   myQueue.peek();
   myQueue.enqueue('One');
   myQueue.enqueue('Two');
   myQueue.enqueue('Three');
   myQueue.peek();
   myQueue.dequeue();
   myQueue.dequeue();
   myQueue.enqueue('Four')
   myQueue.dequeue();
   myQueue.peek();