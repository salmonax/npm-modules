#isArray

###Overview
isArray checks if the argument it recieves is an array. 

###Technical Explanation

The function isArray takes a value as it's argument and uses instanceof to check if it is an array. The function will return false if given any other type of argument.  


###Code Example
_.isArray([1, 2, 3]);
// => true
 
_.isArray(document.body.children);
// => false
 
_.isArray('abc');
// => false
 
_.isArray(_.noop);
// => false