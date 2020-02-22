import { Cursor } from './cursor'
import { Character } from './character'

export class AllergicText {
    $element: HTMLElement
    characters: Character[]
    color: string
    static cached
    
    constructor($element: HTMLElement, color: string) {
        const cursor = Cursor.get_or_create()
        this.$element = $element
        this.color = color

        this.createCharacters()
        this.characters.forEach(c => cursor.addObserver(c))
    }

    static getByElement($element: HTMLElement) {
        return AllergicText.cached.find(at => at.$element.isSameNode($element))
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
        this.characters = this.$element.innerText.split('').map(char => {
            let c = document.createElement('span')
            c.innerText = char
            return new Character(c)
        })
    }
}

AllergicText.cached = []