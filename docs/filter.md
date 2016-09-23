#filter

###Overview

Takes two arguments, an array and a predicate function. It returns a new array with only the items that pass a true-false check in the predicate function.

It can optionally take an object instead of a predicate function as its second argument.

###Technical Explanation

It initializes an empty output array. Then, it checks if the second argument is an object. If it is, it applies matches() and uses it as its predicate function instead. If the second argument is a function, it uses it directly. For each item in the input array, it pushes to the output array whenever the predicate function returns 'true'.

###Code Examples
const numbers = [1,2,3,4]
_.filter(numbers, (num) => { return num === 2 })
=> [2]

const pets = [{type: 'dog', breed: 'Frenchie'},{ type: 'dog' breed: 'Chihuahua'}]
_.filter(pets, { breed: 'Chihuaha' })
=> [{ type: 'dog', breed: 'Chihuaha' }]
