import { CursorObserver, CursorPosition } from './types'

export class Character implements CursorObserver {
    $element: HTMLElement
    constructor ($element: HTMLElement) {
        this.$element = $element
    }

    update(cPos: CursorPosition): void {

    }
}