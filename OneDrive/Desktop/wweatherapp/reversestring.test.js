const anagram = require('./arraychunk')

describe('Anagram algortim',() => {
    it('should be function', () => {
        expect(typeof anagram).toEqual('function')
    })
    it('should be booelan', () => {
        expect(typeof anagram('arm','mar')).toEqual('boolean')
    })
    it('should be function', () => {
        expect(anagram('arm','mar')).toBeTruthy()
        expect(anagram('lelt','tell')).toBeTruthy()
        expect(anagram('cinema','emacin')).toBeTruthy()
    })
    it('should be function', () => {
        expect(anagram('arm','mar')).toBeFalsy()
        expect(anagram('lelt','tell')).toBeFalsy()
        expect(anagram('cinema','emacin')).toBeFalsy()
    })
})