import matches from './matches'

const filter = (collection, predicate) => {
  let results = [] 
  let predicateFunction
  if (collection instanceof Array) {
    if (typeof predicate === 'object') {
      predicateFunction = matches(predicate)
    } else { 
      predicateFunction = predicate
    }
    for (let i=0; i < collection.length; i++) {
      if (predicateFunction(collection[i])) {
        results.push(collection[i])
      }  
    }
  } 
  return results
}


export default filter