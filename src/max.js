const max = input => {
  let num 
  for (let i = 0; i < input.length; i++) {  
    if (!num || num < input[i]) {
      num = input[i]
    }
  }
  return num
}

export { max }