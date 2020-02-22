import {
    CursorObserver,
    CursorPosition 
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
        this.$element.style.color = pixelToColor(distanceFromCursor(cPos), this.targetColor)
    }
}