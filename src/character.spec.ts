import { Character } from './character'

describe('character.update()', function () {
    let $element = document.createElement('span')
    $element.innerText = 'This is an allergic text'
    let character = new Character($element)

    beforeEach(() => {
        character.$element.style.color = 'initial'
    })

    it('should change color based on cursor position', () => {
        character.update({x: 100, y: 200})
        expect(character.$element.style.color).toBe('rgb(223, 0, 0)')
    })
})