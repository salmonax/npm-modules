import isMatch from './isMatch'
const matches = (matcher) => {
  return (object) => {
    return isMatch(object,matcher)
  }
}

export default matches 