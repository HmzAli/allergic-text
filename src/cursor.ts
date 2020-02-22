import { CursorSubject, CursorPosition, CursorObserver } from './interfaces'

export class Cursor implements CursorSubject {
    position: CursorPosition
    observers: CursorObserver[]

    constructor() {
        this.position = {x: 0, y: 0}
        this.observers = []
        window.addEventListener('mousemove', e => this.observers.forEach(o => {
            o.update({x: e.clientX, y: e.clientY})
        }))
    }

    addObserver(observer: CursorObserver) {
        this.observers ? this.observers.push(observer) : this.observers = []
        // this.observers.find(o => o._id === observer._id) || this.observers.push(observer)
    }

    removeObserver(observer: CursorObserver) {
        // this.observers = this.observers.filter(o => o._id !== observer._id)
    }

    static get_or_create(): Cursor {
        if (Cursor.cached) {
            return Cursor.cached
        }
        return Cursor.cached = new Cursor()
    }

    static cached: Cursor
}