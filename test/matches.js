import mocha from 'mocha'
import chai from 'chai'
import expect from 'expect'

import matches from '../src/matches'

describe('matches', () => { 

  it ('returns a function', () => {
    expect(matches()).toBeA('function')
  })

  it ('returns a function that returns true if the argument passes the predicate check', () => {
    let matcher = { wheels: true, doors: true}
    let matchee = { type: 'buggy', wheels: true, doors: true }
    let predicate = matches(matcher)
    expect( predicate(matchee) ).toEqual(true)

  })

  it ('returns a function that returns false if the argument fails the predicate check', () => {
    let matcher = { wheels: true, doors: true}
    let matchee = { type: 'bicycle', wheels: true, doors: false }
    let predicate = matches(matcher)
    expect( predicate(matchee) ).toEqual(false)    
  })
})