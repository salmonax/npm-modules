const toArray = (input => {
  if (input instanceof Array) {
    return input
  } else if (typeof input  === "object") {
    let newInput = []
    for (let el in input) {
      newInput.push(input[el]) 
    }
    return newInput
  }
})

export { toArray }
