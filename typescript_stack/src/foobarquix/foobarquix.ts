const compute = (input: string) => {
    const inputNum = Number(input)
    if (input.includes('3')) {
        return 'Foo'
    }
    if (inputNum % 3 === 0) {
        return 'Foo'
    }
    if (inputNum % 7 === 0) {
        return 'Qix'
    }
    if (inputNum % 10 === 0) {
        return 'Bar'
    }
    return input
}

export default compute
