const flattenDeep = (collection, output) => {
  if (!output) { output = [] }
  if (collection instanceof Array || typeof collection === 'string') {
    for (let i=0;i < collection.length; i++) { 
      if (collection[i] instanceof Array) {
        let subArray = collection[i]
        flattenDeep(subArray, output)
      } else {
        output.push(collection[i])
      }

    }
  }
  return output
}

export { flattenDeep } 