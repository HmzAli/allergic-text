import { Cursor } from './cursor.ts'
import { Character } from './character.ts'

class AllergicText {
    $element: HTMLElement
    characters: Character[]
    color: string
    static cached: AllergicText[]

    constructor($element: HTMLElement, color: string) {
        const cursor = Cursor.get_or_create()
        this.$element = $element
        this.color = color
        this.characters = []

        this.createCharacters()
        this.characters.forEach(c => cursor.addObserver(c))
    }

    static getByElement($element: HTMLElement): AllergicText | null {
        let match: AllergicText | null = null

        AllergicText.cached.forEach((at: AllergicText) => {
            if (at.$element.isSameNode($element)) {
                match = at
            }
        })
        return match || null
        // return AllergicText.cached.find((at: AllergicText) => at.$element.isSameNode($element))
    }

    static create($element: HTMLElement, color: string) {
        if (!AllergicText.isValidElement($element)) {
            throw new Error('Invalid element type')
        }

        if (!AllergicText.hasText($element)) {
            throw new Error('Element has no text to allergize')
        }

        let aText = AllergicText.getByElement($element)
        if (!!aText) {
            return aText
        }

        aText = new AllergicText($element, color)
        AllergicText.cached.push(aText)
        return aText
    }

    static isValidElement(obj: {tagName: string}): boolean {
        return ['div', 'p', 'article'].indexOf(obj.tagName ? obj.tagName.toLowerCase() : '') !== -1
    }

    static hasText($element: HTMLElement): boolean {
        return !!$element.innerText.length
    }

    createCharacters(): void {
        const text = this.$element.innerText
        this.$element.innerText = ''
        this.characters = text.split('').map(char => {
            let c = document.createElement('span')
            c.innerText = char
            this.$element.appendChild(c)
            return new Character(c, this.color)
        })
    }
}

AllergicText.cached = []

export {
    AllergicText
}