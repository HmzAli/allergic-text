import { Character } from '../src/character'

describe('character.update()', function () {
    let $element = document.createElement('span')
    $element.innerText = 'This is an allergic text'
    let character = new Character($element, 'red')

    beforeEach(() => {
        character.$element.style.color = 'initial'
    })

    it('should change color based on cursor position', () => {
        character.update({x: 100, y: 200})
        expect(character.$element.style.color).toBe('rgb(32, 0, 0)')

        character.update({x: 467, y: 13})
        expect(character.$element.style.color).toBe('rgb(0, 0, 0)')

        character.update({x: 0, y: 200})
        expect(character.$element.style.color).toBe('rgb(55, 0, 0)')
    })
})