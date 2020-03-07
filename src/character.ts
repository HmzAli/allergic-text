import {
    CursorObserver,
    CursorPosition,
    ElementPosition
} from './interfaces'

import {
    pixelToColor,
    distanceFromCursor
} from './utils'

export class Character implements CursorObserver {
    $element: HTMLElement
    targetColor: string;
    constructor ($element: HTMLElement, color: string) {
        this.$element = $element
        this.targetColor = color
    }

    update(cPos: CursorPosition): void {
        const ePos: ElementPosition = this.$element.getBoundingClientRect()
        this.$element.innerText = String(distanceFromCursor(ePos, cPos)) // For testing
        this.$element.style.color = pixelToColor(distanceFromCursor(ePos, cPos), this.targetColor)
    }
}