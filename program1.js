/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {

    
       const stack = [];
       const matchingParentheses = {
           ')': '(',
           '}': '{',
           ']': '['
       };
   
       for (let char of s) {
           if (['(', '{', '['].includes(char)) {
               // Push opening brackets to the stack
               stack.push(char);
           } else if ([')', '}', ']'].includes(char)) {
               // Check if the stack is not empty and top element matches
               if (stack.length === 0 || stack.pop() !== matchingParentheses[char]) {
                   return false;
               }
           }
       }
       // If the stack is empty, all parentheses were matched correctly
       return stack.length === 0;
   };
   
   module.exports = { isValid };
   




