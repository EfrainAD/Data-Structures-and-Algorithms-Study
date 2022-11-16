const numbers = [99, 44, 6, 2, 1, 5, 63, 87, 283, 4, 0];

function insertionSort(array) {
  let done = false
     for (let startingPoint = 1; startingPoint < array.length; startingPoint++) {
          for (let fristHalve = 0; fristHalve < startingPoint; fristHalve++) {
               if (array[fristHalve] > array[startingPoint]) {
                    array.splice(fristHalve, 0, array[startingPoint])
                    array.splice(startingPoint+1, 1)
               }
          }
     }
}

insertionSort(numbers);
console.log(numbers);