import compute from './foobarquix'

const NUMBER_DIVISIBLE_BY_3_WRITE_FOO = 'If the number is divisible by 3, write “Foo” instead of the number'
const NUMBER_DIVISIBLE_BY_5_ADD_BAR = 'If the number is divisible by 5, add “Bar”'
const NUMBER_DIVISIBLE_BY_7_ADD_QIX = 'If the number is divisible by 7, add “Qix”'
const FOR_EACH_3_5_7_ADD_FOO_BAR_QIX = 'For each digit 3, 5, 7, add “Foo”, “Bar”, “Qix” in the digits order.'

describe('compute', () => {
    test('returns input if this one does not respect any rule', () => {
        expect(compute('1')).toEqual('1')
        expect(compute('2')).toEqual('2')
    })

    test('returns Foo if contains 3', () => {
        expect(compute('13')).toEqual('Foo')
        expect(compute('23')).toEqual('Foo')
        expect(compute('43')).toEqual('Foo')
    })

    test('returns Foo if divisible by 3', () => {
        expect(compute('6')).toEqual('Foo')
        expect(compute('9')).toEqual('Foo')
    })

    test('returns Bar if divisible by 5', () => {
        expect(compute('10')).toEqual('Bar')
        expect(compute('100')).toEqual('Bar')
    })

    test('returns Qix if divisible by 7', () => {
        expect(compute('14')).toEqual('Qix')
        expect(compute('49')).toEqual('Qix')
    })

    test(NUMBER_DIVISIBLE_BY_3_WRITE_FOO, () => {
        expect(compute('13')).toEqual('Foo')
        expect(compute('31')).toEqual('Foo')
    })

    test(`${NUMBER_DIVISIBLE_BY_3_WRITE_FOO} && ${FOR_EACH_3_5_7_ADD_FOO_BAR_QIX}`, () => {
        expect(compute('33')).toEqual('FooFoo')
        expect(compute('15')).toEqual('FooBar')
        expect(compute('27')).toEqual('FooQix')
    })
})
