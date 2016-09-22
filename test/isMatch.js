import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import isMatch from '../src/isMatch'

describe('isMatch', () => {

  it ('returns true if match is found in source object', () => {
    let object = { 'a': 1, 'b': 2 }
      expect( isMatch(object, {'b':2}) ).toEqual(true)
      
  })

  it ('returns false if match is found in source object', () => {
    let object = { 'a': 1, 'b': 2 }
    expect( isMatch(object, {'b':1}) ).toEqual(false)
  })

  it ('only returns true if matcher fully matches object', () => {
    let object = { 'a': 1, 'b': 2, 'c': 2 }
    expect ( isMatch(object, {'b': 2,'c': 2}) ).toEqual(true)
    expect ( isMatch(object, {'b': 2,'c': 3}) ).toEqual(false)
  })

  it ('treats strings as arrays, where matcher key corresponds to index', () => {
    let string = 'hello'
    expect ( isMatch(string, {0: 'h', 1: 'e'}) ).toEqual(true)
    expect ( isMatch(string, {0: 'h', 1: 'l'}) ).toEqual(false)
  })

  it ('works with arrays, where matcher key corresponds to array index', () => {
    let array = [0,1,2,3]
    expect ( isMatch(array, {0: 0, 1: 1}) ).toEqual(true)
  })
})