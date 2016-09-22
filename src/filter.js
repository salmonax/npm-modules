const filter = (collection, callback) => {
  let results = [] 
  for (let i=0; i < collection.length; i++) {
    if (callback(collection[i])) {
      results.push(collection[i])
    }
  }
  return results
}

export default filter