#isArray

###Overview
Converts value to an array. 

###Technical Explanation
The function isArray takes a value as it's argument and iterates over a collection to check if the collection is an array. 



###Code Example
_.isArray([1, 2, 3]);
// => true
 
_.isArray(document.body.children);
// => false
 
_.isArray('abc');
// => false
 
_.isArray(_.noop);
// => false