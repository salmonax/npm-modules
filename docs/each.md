#each 

###overview
Iterates over a collection and invokes iteratee, then returns the original values of the collection.

###technical explanation
The function each is used when you want to iterate over a collection and return the original, non-mutated values regardless of the arguments you may feed it. To mutate the collection you would use the function .map.  


###Code example 

_.each([4, 8], square);
// => [4, 8]

-.each(['hello'])
// => ['hello']