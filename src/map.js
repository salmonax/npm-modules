const map = (collection, callback) => {
  let mappedOutput = []
  if (collection instanceof Array || typeof collection === 'string' ) {
    for (let i=0;i < collection.length; i++) {
      mappedOutput.push( callback(collection[i],i) )
    }
  } else if (typeof collection === "object") {
    let keys = Object.keys(collection)
    for (let i=0; i < keys.length; i++) {
      mappedOutput.push( callback(collection[keys[i]],keys[i]) ) 
    }
  }
  return mappedOutput
}




export { map }