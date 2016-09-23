#matches

###Overview

Returns a "curried" version of isMatch, taking only the "matcher" as its argument and returning a function that takes only the "matchee". .

When called, the curried function will return true if all of the matcher's key-value pairs are found in the matchee. Otherwise, it returns false.

###Technical Explanation

This function is implemented as a wrapper around isMatch(), which requires two arguments.

The call to isMatch() within matches() gets its second argument from the one passed to matches() when the new function is first created, and it gets its first argument from the argument passed to the new function when it is called.

###Code Examples
const car = { type: 'car', wheels: true }
const person = { type: 'person, wheels: false }
let hasWheels = _.matches({wheels: true})

hasWheels(car)
=> true

hasWheels(person)
=> false
