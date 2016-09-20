const reverse = input => {
  if (input instanceof Array) {
    return input.reverse()  
  } else {
    return false
  }
  
}

export { reverse }