import { setup } from './setup'

describe('test', () => {
    test('setup is ok', () => {
        expect(setup()).toEqual(true)
    })
})
