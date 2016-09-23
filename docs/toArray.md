#toArray

###Overview

Converts a variable into an array, with the following criteria:

1. If passed an object, returns an array of each key's values.
2. If passed a string, splits that string into an array of characters.
3. If passed anything else, returns an empty array.

###Technical Explanation

First, it initializes an empty array. Then, it checks for the argument's type. If the argument is an array, it returns the array. If it's an object, it iterates across the keys (calling hasOwnProperty on each key) and pushes to the out array. If it's a string, it iterates across the characters and pushes to the output array. Otherwise, it does nothing, returning the empty array as initialized.

###Code Examples

toArray('hi')
=> ['h','i']

toArray(undefined)
=> []

toArray({standing: 'hello', alpaca: 'goodbye'})
=> ['hello','goodbye']

