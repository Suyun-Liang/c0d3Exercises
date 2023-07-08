/* 
    Write a function that takes in a string, and calls console.
    log for every character in the string, 
    1 second after each call (aka 1 character per second).
*/


/* 
    Correct: when a function calls itself it needs to wait 1s to excutes
*/
const printLetter = (str, i = 0) => {
    if (i === str.length) {
      return
    }
    setTimeout(() => {
      console.log(str[i])
      printLetter(str, i + 1)
    }, 1000)
  }

/* 
    Incorrect:  All the letters gets printed out all at once after about 1 second, 
    no matter how long the string is
 */

const wrongPrintLetter = (str, i = 0) => {
    if (i === str.length) {
      return
    }
    setTimeout(() => {
      console.log(str[i])
    }, 1000)

    wrongPrintLetter(str, i + 1)
  }