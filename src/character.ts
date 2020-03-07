import {
    CursorObserver,
    CursorPosition,
    ElementPosition
} from './interfaces.ts'

import {
    pixelToColor,
    pixelToScale,
    distanceFromCursor
} from './utils.ts'

export class Character implements CursorObserver {
    $element: HTMLElement
    targetColor: string;
    constructor ($element: HTMLElement, color: string) {
        this.$element = $element
        this.targetColor = color
    }

    update(cPos: CursorPosition): void {
        const ePos: ElementPosition = this.$element.getBoundingClientRect()
        this.$element.style.color = pixelToColor(distanceFromCursor(ePos, cPos), this.targetColor)
    }
}