import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import filter from '../src/filter'

describe('filter', () => {
  // const collection = [
  //   { 'user': 'biff', 'age': 72, 'active': true },
  //   { 'user': 'marty', 'age': 71, 'active': false },
  //   { 'user': 'doc', 'age': 90, 'active': true }
  // ]
  // it('applies a function to each item in an array of objects, returns array of true ones', () => {
  //   let filterResult = filter(collection, (o) => { return !o.active })
  //   expect(filterResult).toEqual([{ 'user': 'marty', 'age': 71, 'active': false }])
  // })

  it('takes a collection and performs a predicate test and returns an array of results that pass the predicate test', () => {
    const isEven = (num) => {
      return num % 2 === 0
    }
    expect(filter([1,2,3,4], isEven)).toEqual([2,4])
  })


  it('returns an empty array when it fails a predicate test', () => {
    const isEven = (num) => {
      return num % 2 === 0
    }
    expect(filter([1,3], isEven)).toEqual([])
  })


  it('takes an object as the predicate and matches the property values to the collection', () => {
   const users = [{"name": "Lizz"}, {"name":"Aileen"}, {"name":"George"}]
   expect(filter(users, {"name":"George"})).toEqual([{"name":"George"}])
  })

})