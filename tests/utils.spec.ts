import {
    getValueInRange, 
    distanceFromCursor,
    pixelToColor
} from '../src/utils'

describe('getValueInRange()', function () {
    it('should return correct value', () => {
        expect(getValueInRange(5, 1, 5)).toBe(5)
        expect(getValueInRange(100, 0, 255)).toBe(100)
        expect(getValueInRange(300, 0, 255)).toBe(255)
        expect(getValueInRange(30, 100, 1000)).toBe(100)
    })
})

describe('distanceFromCursor()', () => {
    it('should return correct distance from cursor', () => {
        /* The difference: {x: 100, y: 100} */
        expect(distanceFromCursor({x: 400, y: 300}, {x: 300, y: 200})).toBe(141)
        /* {x: 150, y: 60} */
        expect(distanceFromCursor({x: 350, y: 160}, {x: 200, y: 100})).toBe(161)
        /* {x: 0, y: 1000} */
        expect(distanceFromCursor({x: 20, y: 2000}, {x: 20, y: 1000})).toBe(1000)
    })
})

describe('pixelToColor()', () => {
    it('should get the correct color for specified pixel and color name', () => {
        expect(pixelToColor(100, 'red')).toBe('rgb(155,0,0)')
        expect(pixelToColor(0, 'red')).toBe('rgb(255,0,0)')
        expect(pixelToColor(1000, 'red')).toBe('rgb(0,0,0)')
        expect(pixelToColor(150, 'blue')).toBe('rgb(0,0,105)')
        expect(pixelToColor(255, 'blue')).toBe('rgb(0,0,0)')
        expect(pixelToColor(10, 'green')).toBe('rgb(0,245,0)')
        expect(pixelToColor(1000, 'green')).toBe('rgb(0,0,0)')
    })
})