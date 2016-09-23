#isObject

###Overview

Checks if value is the language type of Object. (e.g. arrays, functions, objects, regexes, new Number(0), and new String(''))

###Technical Explanation

uses the Javascript value instanceof to see if the data type contains methods, properties and items that are related to objects.


###Code Examples

```_.isObject({});
// => true
 
_.isObject([1, 2, 3]);
// => true
 
_.isObject(_.noop);
// => true
 
_.isObject(null);
// => false```


