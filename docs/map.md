#map

###Overview
Iterates over a collection and calls iteratee on every item in the collection, then creates a new modified collection. 

###Technical Explanation
The function .map is used when you want to iterate over an array and return mutated values. Similar to .each, but different in that it returns a new array. If given an object, it will apply the iteratee to the values of each key and return an array. If given any other argument it will return null. 

###Code Example 

function square(n) {
  return n * n;
}
 
_.map([4, 8], square);
// => [16, 64]
 
_.map({ 'a': 4, 'b': 8 }, square);
// => [16, 64] (iteration order is not guaranteed)
 
var users = [
  { 'user': 'barney' },
  { 'user': 'fred' }
];
 
// The `_.property` iteratee shorthand.
_.map(users, 'user');
// => ['barney', 'fred']