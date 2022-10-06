class Node {
     constructor(value){
          this.left = null;
          this.right = null;
          this.value = value;
     }
}
   
class BinarySearchTree {
     constructor(){
          this.root = null;
     }
     insert(value){
          let currentNode = this.root
          while (currentNode){ 
               if (currentNode.value > value) {
                    if (currentNode.left) 
                         currentNode = currentNode.left
                    else {
                         return currentNode.left = new Node(value)
                    }
               }
               else { //  currentNode.value < value
                    if (currentNode.right) 
                         currentNode = currentNode.right
                    else {
                         return currentNode.right = new Node(value)
                    }
               } 
          }
          if (this.root === null) 
               return this.root = new Node(value)
     }
     lookup(value){
          let currentNode = this.root
          while (currentNode){ 
               if (currentNode.value === value) return currentNode
               if (currentNode.value > value) 
                    currentNode = currentNode.left
               else //  currentNode.value < value
                    currentNode = currentNode.right
          }
          if (currentNode === null) return null
          return 'hi'
     }
removeLeaf(value) {
     let currentNode = this.root
     if (currentNode.value === value) {
          return this.root = null
     }
     while (true) {
          if (currentNode.left && currentNode.left.value === value) {
              return currentNode.left = null
          } else if (currentNode.right && currentNode.right.value === value) {
              return currentNode.right = null
          }
          if (currentNode.left && currentNode.left.value > value) 
                    currentNode = currentNode.left
               else //  currentNode.value < value
                    currentNode = currentNode.right
     }
}
remove(value) {
     let removeNode = this.lookup(value)
     if (!removeNode.left && !removeNode.right) {
          this.removeLeaf(value)
          console.log('HIHIHIHI')
          return this
     } else if (!removeNode.right) {
          removeNode.value = removeNode.left.value
          removeNode.left = removeNode.left.left
          removeNode.right = removeNode.left.right
     }
     let currentNode = removeNode.right
     while (currentNode && currentNode.left && currentNode.left.left)
          currentNode = currentNode.left
     removeNode.value = currentNode.left.value
     currentNode.left = currentNode.left.right
     // removeNode.right = currentNode.right
     return true
}


}
   
const tree = new BinarySearchTree();
console.log('-'.repeat(60),'\n'+'-'.repeat(60),'\n'+'-'.repeat(60))
tree.insert(9) // 9,4,6,20,70,15,1,30,24,90 , 26, 28
tree.insert(4)
tree.insert(6)
tree.insert(20)
tree.insert(70)
tree.insert(15)
tree.insert(1)
tree.insert(30)
tree.insert(24)
tree.insert(90)
tree.insert(26)
tree.insert(28)
// JSON.stringify(traverse(tree.root))
console.log(('\n'+'-'.repeat(60)).repeat(2))
// console.log('-'.repeat(60))
// tree.remove(20)
console.log('before:', tree.lookup(90))
tree.remove(90)
console.log(tree.lookup(90))
     //     console.log(tree.root)
// JSON.stringify(traverse(tree.root))
   
   //     9
   //  4     20
   //1  6  15  170
   //            100  200
   //           90

   //Changed the given traverse function since it didn't seem print out the way I thought it should and made me think I did the above assaignment wrong.
   function traverse(node) {
     const tree = { value: node.value };
     tree.left = node.left;
     tree.right = node.right;
     console.log(tree);
     node.left === null ? null : traverse(node.left);
     node.right === null ? null : traverse(node.right);
   }