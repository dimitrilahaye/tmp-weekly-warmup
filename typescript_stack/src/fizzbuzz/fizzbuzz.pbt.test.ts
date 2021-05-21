import { fizzBuzzFromTo } from './fizzbuzz'

describe('fizzbuzz from to x to y, property based testing', () => {
    test('starts at 1 as default', () => {
        const fizzBuzzResultAsArray = fizzBuzzFromTo().split(' ')
        expect(fizzBuzzResultAsArray[0]).toEqual('1')
    })

    test('ends at 100 as default', () => {
        const fizzBuzzResultAsArray = fizzBuzzFromTo().split(' ')
        expect(fizzBuzzResultAsArray.length).toEqual(100)
        expect(fizzBuzzResultAsArray.slice(-1)[0]).toEqual('Buzz')
    })
})
