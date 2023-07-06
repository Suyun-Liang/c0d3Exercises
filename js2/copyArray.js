/*Write a function named copyArray that takes in an array 
and returns a new array that is an identical copy of the given array.
copyArray(['Rocket', 'Groot', 'Star-Lord']) // ["Rocket", "Groot", "Star-Lord"]
 */


const copyArray = (arr, i = 0, newArr = []) => {
    if(i === arr.length) {
        return newArr;
    }

    newArr[i] = arr[i];

    return copyArray(arr, i + 1, newArr);

}




// solution
const copyArraySolution = (a, result = []) => {
    
    if (result.length === a.length) {
      return result
    }
    
    // Use the push() method with array result to push in the elements from array a 
    result.push(a[result.length])
    
    return copyArraySolution(a, result)
  }