import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import filter from '../src/filter'

describe('filter', () => {
  const collection = [
    { 'user': 'biff', 'age': 72, 'active': true },
    { 'user': 'marty', 'age': 71, 'active': false },
    { 'user': 'doc', 'age': 90, 'active': true }
  ]
  it('applies a function to each item in an array of objects, returns array of true ones', () => {
    let filterResult = filter(collection, (o) => { return !o.active })
    expect(filterResult).toEqual([{ 'user': 'marty', 'age': 71, 'active': false }])
  })
  it ('treats a string as an array, and applies the function to each character')
  it ('treats an object as an array, and applies the function to each key')
  it('takes an object instead of a function as shorthand for matches')
  it ('takes an [key, value] array as shorthand for matching a key and value')
  it ('takes a string as shorthand for matching a key')
})