#isMatch

###Overview

Takes two arguments, a "matchee" and a "matcher". It return true if all of the matcher's key-value pairs are found in the matchee. Otherwise, it returns false.

###Technical Explanation

In the implementation, isMatch stores a count of the matcher's  keys and an accumulator for matched key-value pairs. If the number of matched key-value pairs is equal to the number of keys in the matcher, it returns true. Otherwise, it returns false.

###Code Examples
const car = { type: 'car', wheels: true }
const person = { type: 'person, wheels: false }
const matcher = {wheels: true}

_.isMatch(car, matcher)
=> true

_.isMatch((person, matcher)
=> false