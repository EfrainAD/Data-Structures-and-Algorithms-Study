class LinkedList {
     constructor(value) {
       this.head = {
         value: value,
         pre: null,
         next: null
       };
       this.tail = this.head;
       this.length = 1;
     }
     append(value) {
       const newNode = {
         value: value,
         pre: null,
         next: null
       }
       newNode.pre = this.tail
       this.tail.next = newNode;
       this.tail = newNode;
       this.length++;
       return this.printList();
     }
     prepend(value) {
       const newNode = {
         value: value,
         pre: null,
         next: null
       }
       newNode.next = this.head;
       this.head = newNode;
       newNode.next.pre = newNode
       this.length++;
       return console.log(this.printList());
     }
     printList() {
       const array = [];
       let currentNode = this.head;
       while(currentNode !== null){
           array.push(currentNode.value)
           currentNode = currentNode.next
       }
       return console.log(array);
     }
     printReverse() {
          const array = [];
          let currentNode = this.tail;
          while(currentNode !== null){
               array.push(currentNode.value)
               currentNode = currentNode.pre
          }
       return console.log(array);
     }
     insert(index, value){
       //Check for proper parameters;
       if(index >= this.length) {
         console.log('running append(value)')
         return this.append(value);
       }
       
       const newNode = {
         value: value,
         pre: null,
         next: null
       }
       const leader = this.traverseToIndex(index-1);
       const holdingPointer = leader.next;
       leader.next = newNode;
       newNode.pre = leader;
       newNode.next = holdingPointer;
       holdingPointer.pre = newNode
       this.length++;
       return this.printList();
     }
     traverseToIndex(index) {
       //Check parameters
       let counter = 0;
       let currentNode = this.head;
       while(counter !== index){
         currentNode = currentNode.next;
         counter++;
       }
       return currentNode;
     }
     remove(index) {
       // Check Parameters      
       const leader = this.traverseToIndex(index-1);
       const unwantedNode = leader.next;
       leader.next = unwantedNode.next;
      //  if (unwantedNode.next.pre) //Why this brake the app
      if (index !== this.length-1)
        unwantedNode.next.pre = leader
      else 
        this.tail = leader

       this.length--;
       return this.printList();
     }
   }
   
   let myLinkedList = new LinkedList(10);
   myLinkedList.append(5);
   myLinkedList.append(16);
   myLinkedList.prepend(1);
   myLinkedList.prepend(3);
   // myLinkedList.printList()
   myLinkedList.insert(2, 99);
   myLinkedList.insert(6, 88);
  myLinkedList.printList()
   myLinkedList.remove(6);
   myLinkedList.printReverse()