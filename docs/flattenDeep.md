#flattenDeep

###Overview

Takes an array as input and creates a new, flattened version of that array,  regardless of levels of nesting.

###Technical Explanation

If the argument is a string, flattenDeep will split it into an array, consistent with loDash behavior. If the argument is an array, it will iterate through each item and take one of the two following actions:

1. If the item is not an array, push the current item onto a 'result' variable.

2. If the item is itself an array, run flattenDeep recursively on that array, concatenating its output with the accumulated result

Consistent with loDash, flattenDeep will split a string into an array of characters with no further operations. In all other cases, it will return an empty array.

###Code Examples

_.flattenDeep([1,2,[3,3,[4,2]],6])
=> [1,2,3,3,4,2,6]

_.flattenDeep('atarakatara')
=> ['a','t','a','r','a','k','a','t','a','r','a']

_.flattenDeep(1337)
=> []