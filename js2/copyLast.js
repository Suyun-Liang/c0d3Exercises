/*Write a function named copyLast that copies an array 
but leaves out a given number of elements at the front.

copyLast(['Ironman', 'Thor', 'Captain', 'Black Widow', 'Hulk'], 2)
// ["Captain", "Black Widow", "Hulk"]
 */


// The way of solving it is too complicated 
const copyLast = (a, num, i = a.length - 1, result = []) => {
    if(b.length === a.length - num || num >= a.length) {
     return result;
    }
 
    result.unshift(a[i]);
 
    return copyLast(a, num, i -1 , result)
      
 }



// Clear way of solving it: the push starts from num index, ends when num is greater than array *a*
 const solution = (a, num, result = []) => {
    if (num >= a.length) {
      return result
    }
  
    result.push(a[num])
  
    return solution(a, num + 1, result)
  }