/*Write a function named removeElement that takes in an array *a* 
and a string as parameters. This function removes any element of the array *a* 
when the element's value matches the value of the string. 
On completion, returns the updated array *a*.

const a = ['Rocket', 'Groot', 'Groot', 'Star-Lord']
const b = removeElement(a, 'Groot') // ["Rocket", "Star-Lord"]
const c = b === a // since removeElement returns the original array,
// b === a should be true
 */

const removeElement = (a, str, i = 0) => {   
    if(i === a.length) {
        return a;
    }

    if(a[i] === str) {        
        a.splice(i, 1);
        // since the current value under i index being removed, 
        // value after the removed value takes place, it should be checked  
        i -= 1;      
    }
    
    return removeElement(a, str, i + 1);    
}




const solution = (a, val, i = 0) => {
    if (i === a.length) {
      return a
    }
    if (a[i] === val) {
      a.splice(i, 1)
      return solution(a, val, i) // Should not do i+1
      // because array just became smaller
    }
    return solution(a, val, i + 1)
  }
  