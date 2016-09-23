#isFunction

###Overview

isFunction checks if the data being passed is a Javascript function

###Technical Explanation

isFunction uses the typeof Javascript built in method to check if the piece of data is a function object. The function object contains a body and has properties and methods that apply to function objects. For example, a function has length as a property. It also has methods like .call() attached to it. 


###Code Examples

```_.isFunction('abc');
//returns false

_.isFunction(function isEven(num){
  return num % 2 === 0;
}); //returns true```

