#flatten

###Overview

Takes a single array as an argument and removes the shallowest layer of nesting. If it is passed an argument that isn't an array, it returns an empty array.

###Technical Explanation

It first initializes an empty output array. If the argument is also an array, it iterates across it, pushing to the output array as it goes, and checking to see if it finds a subarray. If it does, it iterates across that subarray in a nested loop, pushing each item regardless of type.

###Code Examples
flatten(['just',['the','next',['level']]])
=> ['just','the','next',['level']]

flatten([1, [2, [3, [4]], 5]]
=> [1, 2, [3, [4]], 5]


