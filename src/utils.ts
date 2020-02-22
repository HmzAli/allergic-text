import { CursorPosition } from './interfaces'
import { Cursor } from './cursor'

export const getValueInRange = (value: number, min: number, max: number): number =>  {
    return value < min ? min : value - (value - max) * Number(value > max)
}

export const distanceFromCursor = (cPos: CursorPosition): number => {
    return Math.floor(Math.sqrt(cPos.x ** 2 + cPos.y ** 2))
}

export const pixelToColor = (pixels: number, colorName: string): string => {
    const value = 255 - getValueInRange(pixels, 0, 255)
    return `rgb(${colorName === 'red' ? value : 0},${colorName === 'green' ? value : 0},${colorName === 'blue' ? value : 0})`
}