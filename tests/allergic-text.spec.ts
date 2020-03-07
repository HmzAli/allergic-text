import AllergicText from '../src/allergic-text'

describe('AllergicText.create()', function () {
    this.validElement = null
    this.color = 'red'

    beforeEach(() => {
        AllergicText.cached = []
        this.validElement = document.createElement('div')
        this.validElement.innerText = 'I am a healthy text'
    })
    
    it('it should throw an error for invalid elements', () => {
        const errorMsg = 'Invalid element type'
        expect(() => {
            AllergicText.create(document.createElement('img'), this.color)
        }).toThrowError(errorMsg)
        expect(() => {
            AllergicText.create(document.createElement('svg'), this.color)
        }).toThrowError(errorMsg)
    })

    it('should throw an error if valid element has no text', () => {
        expect(() => {
            this.validElement.innerText = ''
            AllergicText.create(this.validElement, '')
        }).toThrow(new Error('Element has no text to allergize'))
    })

    it('should cache texts', () => {
        AllergicText.create(this.validElement, this.color)
        expect(AllergicText.cached.length).toBe(1)
        AllergicText.create(this.validElement, this.color)
        expect(AllergicText.cached.length).toBe(1)
    })

    it('should get cached AllergicText instead of creating a new one', () => {
        AllergicText.create(this.validElement, this.color)
        expect(AllergicText.cached.length).toBe(1)
        AllergicText.create(this.validElement, this.color)
    })

    it('should return a new AllergicText', () => {
        let validElement = document.createElement('div')
        validElement.innerText = 'I\'m a text'
        expect(AllergicText.create(validElement, 'red')).toEqual(jasmine.objectContaining({
            $element: validElement
        }))
    })
})

describe('AllergicText.isValidElement()', function () {
    it('should return false for invalid elements', () => {
        expect(AllergicText.isValidElement(document.createElement('img'))).toBe(false)
        expect(AllergicText.isValidElement(document.createElement('svg'))).toBe(false)
    })
    
    it('should return true for valid elements', () => {
        expect(AllergicText.isValidElement(document.createElement('div'))).toBe(true)
        expect(AllergicText.isValidElement(document.createElement('p'))).toBe(true)
    })
})

describe('AllergicText.hasText()', function () {
    it('should return false if element has no text', () => {
        expect(AllergicText.hasText(document.createElement('div'))).toBe(false)
    })

    it('should return true if element has text', () => {
        const ele = document.createElement('p')
        ele.innerText = 'This is an allergic text'
        expect(AllergicText.hasText(ele))
    })
})

describe('AllergicText.createCharacters()', function () {
    beforeEach(() => {
        AllergicText.cached = []
        this.ele = document.createElement('div')
        this.ele.innerText = 'This is just a healthy text'
        this.charLength = this.ele.innerText.length
        this.color = 'red'
    })

    it('should create characters as span elements', () => {
        let aText = AllergicText.create(this.ele, this.color)
        expect(aText.characters[0].$element.tagName.toLowerCase()).toBe('span')
    })

    it('The number of texts in AllergicText should match the number of created span', () => {
        let aText = AllergicText.create(this.ele, this.color)
        expect(aText.characters.length).toBe(this.charLength)
    })

    it('The text in AllergicText should all be converted to span', () => {
        let aText = AllergicText.create(this.ele, this.color)
        expect(aText.characters.every(c => c.$element.tagName.toLowerCase() === 'span'))
    })
})
