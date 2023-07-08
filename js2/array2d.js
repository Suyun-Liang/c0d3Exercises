/* Write a function called solution 
that takes in 2 numbers and returns an array with 
the length equal to the first input number

Every element in the array is an array 
that is equal to the length of the second input number. 
All values in the array is 0.

solution(5,2) // returns [[0,0], [0,0], [0,0], [0,0], [0,0]]
solution(3, 3) // returns: [ [0,0,0], [0,0,0], [0,0,0] ]
 */


/*  Parameters: result // to store the arr, stars with an empty array
    Base-case : when result length equal to row parameter, function stop calling itself, return result
    Recursive-case: push array element into the result.
                    need another function to generate array element according to the col
*/
const solution = (row, col, result = []) => {
    if (result.length === row) {
      return result;
    }
    
    const fn = (num, innerArr = []) => {
      if(innerArr.length === num) {
        return innerArr
      }
      
      innerArr.push(0);
      
      return fn(num,innerArr);
    }

    result.push(fn(col));

    return solution(row, col, result);
}
