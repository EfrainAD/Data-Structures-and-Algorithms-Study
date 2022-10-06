class LinkedList {
     constructor(value) {
       this.head = {
         value: value,
         next: null
       };
       this.tail = this.head;
       this.length = 1;
     }
     append(value) {
       const newNode = {
         value: value,
         next: null
       }
       this.tail.next = newNode;
       this.tail = newNode;
       this.length++;
       return this;
     }
     prepend(value) {
       const newNode = {
         value: value,
         next: null
       }
       newNode.next = this.head;
       this.head = newNode;
       this.length++;
       return this;
     }
     printList() {
       const array = [];
       let currentNode = this.head;
       while(currentNode !== null){
           array.push(currentNode.value)
           currentNode = currentNode.next
       }
       console.log(array)
       return array;
     }
     insert(index, value){
       //Code here
       
       let currentNode = this.head
       while (currentNode.next != null) {
          console.log('Looking at ', currentNode.value)
          if (currentNode.value === index) {
            // Create the new Node
            const newNode = {value: value, next: null}
            console.log('The created newNode')
            console.table(newNode)
            // Update the new node .next to corrent node.next
            newNode.next = currentNode.next
            console.log(newNode)
            console.table(newNode)
            // corrent node now been linked up
            currentNode.next = newNode
            console.log('CurrentNode')
            console.table(currentNode)
            
            this.length++
            console.log('length', this.length)
            // break
          }
          currentNode = currentNode.next
       }
       return this;
     }
     remove(item){
      let currentNode = this.head
      if (currentNode.value === item){
        this.head = currentNode.next
        this.length--
        return this.printList()
      }

      let holder = null
      while (currentNode !== null) {
        if (currentNode.next && currentNode.next.value === item) {
          if(currentNode.next.next)
            currentNode.next = currentNode.next.next
          else {
            currentNode.next = null
            this.tail = currentNode
          }
          this.length--
          return this.printList()
        }
        currentNode = currentNode.next
      }
      return console.log(-1)
     }
   }
   
   let myLinkedList = new LinkedList(10);
   myLinkedList.append(5);
   myLinkedList.append(16);
   myLinkedList.prepend(1)
   myLinkedList.printList()
  //  myLinkedList.insert(99, 1)
   myLinkedList.insert(5, 99)
   myLinkedList.insert(2, 99)
//    myLinkedList.insert(20, 88)
   console.log('outcomes')
   myLinkedList.printList()
   myLinkedList.remove(5)
   myLinkedList.remove(16)
    myLinkedList.remove(1)