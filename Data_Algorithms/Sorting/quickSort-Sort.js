const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];
// const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0, 5000];
let count = 5

function quickSort(arr, left, right){
     const length = right - left
     const rightBorder = right
     const leftBorder = left
     for (let i = 0; i < length; i++) {
          if (arr[left] < arr[right]) 
               left++
          else {
               // Check if they are next to each other
               if (right - left === 1) 
                    [arr[right], arr[left]] = [arr[left], arr[right]]
               else {
                    const temp = arr[left]
                    arr[left] = arr[right - 1]
                    arr[right - 1] = arr[right]
                    arr[right] = temp
                    right--
               }
          }
     }
     if (length > 1) {
          if (right > 0)
               quickSort(arr, leftBorder, right -1)
          if  (right < arr.length - 1)
               quickSort(arr, right, rightBorder)
    }
}

//Select first and last index as 2nd and 3rd parameters
console.log(numbers)
quickSort(numbers, 0, numbers.length - 1);
console.log(numbers);