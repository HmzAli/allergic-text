interface CursorPosition {
    x: number
    y: number
}

interface ElementPosition {
    x: number
    y: number
}

interface CursorSubject {
    observers: CursorObserver[]
    addObserver: (o: CursorObserver) => void
    removeObserver: (o: CursorObserver) => void
}

interface CursorObserver {
    update: (cPos: CursorPosition) => void
}

export {
    CursorPosition,
    CursorSubject,
    CursorObserver,
    ElementPosition
}