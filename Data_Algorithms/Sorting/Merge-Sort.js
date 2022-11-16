const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function mergeSort (array) {
     if (array.length === 1) {
          return array
     }
     
     const middleIndex = array.length/2
     const left = array.slice(0, middleIndex)
     const right = array.slice(middleIndex)

     return merge(
          mergeSort(left),
          mergeSort(right)
     )
}

function merge(left, right){
     const newArray = []
     for (let i = 0; i < left.length; i++) {
          let index = newArray.findIndex(element => {
               return element > left[i] })
          if (index === -1)
               index = newArray.length
          newArray.splice(index, 0, left[i])
     }
     for (let r = 0; r < right.length; r++) {
          let index = newArray.findIndex(element =>  element > right[r])
          if (index === -1)
               index = newArray.length
          newArray.splice(index, 0, right[r])
     }
     return newArray
}

// console.log(numbers);
const answer = mergeSort(numbers);
console.log(answer);