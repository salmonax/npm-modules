#isNumber

###Overview

Checks if the data is classified as a Number primitive or object.

###Technical Explanation

Number objects contains special methods and properties like Nan. If an argument passed cannot be converted into a number it returns the property NAN which means Not A Number. 

###Code Examples

```_.isNumber(3);
// => true
 
_.isNumber(Number.MIN_VALUE);
// => true
 
_.isNumber(Infinity);
// => true
 
_.isNumber('3');
// => false```

