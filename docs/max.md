#max

###overview
Computes the maximum value of an array. 

###Technical Explanation
The function .max is used to find the maximum value in an array. Max stores the first item in the array in a variable, then iterates over the array and checks if any value is greater than the stored variable. If it is, it replaces the original value. 

If the array is empty, it returns undefined. If it is not an array, it returns undefined. 


##Code example 
_.max([4, 2, 8, 6]);
// => 8
 
_.max([]);
// => undefined
