import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import { max } from '../src/max'


describe( 'max', () => {
  it( 'gets the maximum value in an array of integers', () => {
    expect( max([3,10,6,7] ) ).toEqual(10)
  })
  it ('returns undefined if input is a boolean')
  it ('returns undefined if input is a string')
  it ('returns undefined if input is null')
  it ('returns undefined if input is undefined')  
  it ('gets the maximum value in an array of mixed integers and integers stored as strings')
  it ('might make non-integer strings always greater than integers for some reason')
})