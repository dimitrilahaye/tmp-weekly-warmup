export const fizzBuzz = (numInput: number): string => {
    if (!isFizz(numInput) && !isBuzz(numInput)) {
        return `${numInput}`
    }
    return computeFizzBuzz(numInput)
}

export const fizzBuzzFromTo = (start: number = 1, end: number = 100): string => {
    if (end <= start) throw Error('Invalid Args')
    if (start < 1) throw Error('Zero or Negatives Args')

    return iterateFizzBuzz(start, end)
}

const isFizz = (a: number): boolean => {
    return a % 3 === 0
}
const isBuzz = (a: number): boolean => {
    return a % 5 === 0
}
const computeFizzBuzz = (a: number): string => {
    return `${build(a, 'Fizz')}${build(a, 'Buzz')}`
}

const build = (a: number, label: string): string => {
    const fizzBuzzHandlers: Record<string, (a: number) => boolean> = {
        Fizz: isFizz,
        Buzz: isBuzz,
    }
    return fizzBuzzHandlers[label](a) ? label : ''
}

/// ///////////////////////////////////////////////////////
// //////// IMPERATIVE WAY, BETTER FOR PERFORMANCE ////////
// //////// (MEMORY OPTIMIZATIONS IN V8 ENGINE) ///////////
// /// PACKED SMI ARRAY THEN PACKED ELEMENTS ARRAY ////////
/// ///////////////////////////////////////////////////////
// const iterateFizzBuzz = (start: number, end: number): string => {
//     const fizzBuzzResult = []
//     for (let i = start; i <= end; i++) {
//         fizzBuzzResult.push(fizzBuzz(i))
//     }
//     return fizzBuzzResult.join(' ')
// }

/// ///////////////////////////////////////////////////////
// //////// DECLARATIVE WAY, BETTER FOR READABILITY ? /////
// //////// (MEMORY NOT OPTIMIZED IN V8 ENGINE) ///////////
// /// HOLEY SMI ARRAY THEN HOLEY ELEMENTS ARRAY //////////
/// ///////////////////////////////////////////////////////
const iterateFizzBuzz = (start: number, end: number): string => {
    return Array(end - start + 1)
        .fill(start)
        .map((e, i) => fizzBuzz(e + i))
        .join(' ')
}
