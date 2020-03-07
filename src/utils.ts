import { CursorPosition, ElementPosition } from './interfaces.ts'
import { Cursor } from './cursor'

export const getValueInRange = (value: number, min: number, max: number): number =>  {
    return value < min ? min : value - (value - max) * Number(value > max)
}

export const distanceFromCursor = (ePos: ElementPosition, cPos: CursorPosition): number => {
    const distance: ElementPosition = {
        x: Math.abs(ePos.x - cPos.x),
        y: Math.abs(ePos.y - cPos.y)
    }
    return Math.floor(Math.sqrt(distance.x ** 2 + distance.y ** 2))
}

export const pixelToColor = (pixels: number, colorName: string): string => {
    const value = 255 - getValueInRange(pixels, 0, 255)
    return `rgb(${colorName === 'red' ? value : 0},${colorName === 'green' ? value : 0},${colorName === 'blue' ? value : 0})`
}

export const pixelToScale = (pixels: number, maxScaleValue: number): string => {
    return String(maxScaleValue - getValueInRange(pixels, 1, maxScaleValue))
}