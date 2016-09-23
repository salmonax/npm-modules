#min

###overview
Computes the minimum value in an array. 

###Technical Explanation 
The function .min is used to find the minimum value in an array. Min stores the first item in the array in a variable, then iterates over the array and checks if any value is lower than the stored variable. If it is, it replaces the original value. 

If the array is empty, it returns undefined. If it is not an array, it returns undefined. 

###Code example 
_.min([4, 2, 8, 6]);
// => 2
 
_.min([]);
// => undefined