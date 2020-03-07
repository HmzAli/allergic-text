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
    targetColor: string
    position: ElementPosition
    constructor ($element: HTMLElement, color: string) {
        this.$element = $element
        this.targetColor = color
        this.position = this.$element.getBoundingClientRect()
        window.addEventListener('scroll', () => this.updatePosition())
        window.addEventListener('resize', () => this.updatePosition())
    }

    update(cPos: CursorPosition): void {
        const ePos: ElementPosition = this.position;
        this.$element.style.color = pixelToColor(distanceFromCursor(ePos, cPos), this.targetColor)
    }

    updatePosition(): void {
        this.position = this.$element.getBoundingClientRect()
    }
}