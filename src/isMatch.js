const isMatch = (object, matcher) => {
  const matcherPropsCount = Object.keys(matcher).length
  let matchedProps = 0
  for (let key in matcher) {
    if (object[key] !== undefined && object[key] === matcher[key]) {
      matchedProps += 1
    } else {
      return false
    }
  }
  return (matchedProps === matcherPropsCount) ? true : false
}

export default isMatch