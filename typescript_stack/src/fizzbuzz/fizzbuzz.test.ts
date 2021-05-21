import { fizzBuzz, fizzBuzzFromTo } from './fizzbuzz'

describe('test fizz', () => {
    test('3 returns "fizz"', () => {
        expect(fizzBuzz(3)).toEqual('Fizz')
    })
    test('6 returns "fizz"', () => {
        expect(fizzBuzz(6)).toEqual('Fizz')
    })
    test('9 returns "fizz"', () => {
        expect(fizzBuzz(9)).toEqual('Fizz')
    })
})

describe('test default value', () => {
    test('1 returns 1', () => {
        expect(fizzBuzz(1)).toEqual('1')
    })

    test('2 returns 2', () => {
        expect(fizzBuzz(2)).toEqual('2')
    })
})

describe('test buzz', () => {
    test('5 returns "Buzz"', () => {
        expect(fizzBuzz(5)).toEqual('Buzz')
    })
    test('10 returns "Buzz"', () => {
        expect(fizzBuzz(10)).toEqual('Buzz')
    })
})

describe('test fizzbuzz', () => {
    test('15 returns "FizzBuzz"', () => {
        expect(fizzBuzz(15)).toEqual('FizzBuzz')
    })
    test('30 returns "FizzBuzz"', () => {
        expect(fizzBuzz(30)).toEqual('FizzBuzz')
    })
})

describe('test fizzbuzz from x to y', () => {
    test('from 1 to 3, returns "1 2 Fizz', () => {
        expect(fizzBuzzFromTo(1, 3)).toEqual('1 2 Fizz')
    })

    test('from 4 to 6, returns "4 Buzz Fizz', () => {
        expect(fizzBuzzFromTo(4, 6)).toEqual('4 Buzz Fizz')
    })

    test('from 13 to 15, returns "13 14 FizzBuzz', () => {
        expect(fizzBuzzFromTo(13, 15)).toEqual('13 14 FizzBuzz')
    })

    test('end is equal or inferior than start, throws an error', () => {
        expect(() => fizzBuzzFromTo(1, 1)).toThrowError('Invalid Args')
        expect(() => fizzBuzzFromTo(1, -4)).toThrowError('Invalid Args')
    })

    test('start or end are zero or negatives, throws an error', () => {
        expect(() => fizzBuzzFromTo(-11, 1)).toThrowError('Zero or Negatives Args')
        expect(() => fizzBuzzFromTo(-51, -4)).toThrowError('Zero or Negatives Args')
    })
})
