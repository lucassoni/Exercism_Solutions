// @ts-check

/**
 * Implement the classes etc. that are needed to solve the
 * exercise in this file. Do not forget to export the entities
 * you defined so they are available for the tests.
 */

export class Size {
  constructor(width, height) {
    if(Boolean(width) || width === 0) this.width = width
    else this.width = 80
  
    if(Boolean(height) || height === 0) this.height = height
    else this.height = 60
  }
  resize(width, height) {
    this.width = width
    this.height = height
  }
}


export class Position {
  constructor(x, y) {
    if(Boolean(x)) this.x = x
    else this.x = 0

    if(Boolean(y)) this.y = y
    else this.y = 0
  } 
  move(x, y) {
    this.x = x
    this.y = y
  }
}

export class ProgramWindow {
  constructor() {
    this.screenSize = new Size(800, 600)
    this.size = new Size()
    this.position = new Position()
  }
  resize(newSize) {
    if (newSize.width < 1) this.size.width = 1
    else if (newSize.width > (this.screenSize.width - this.position.x)) this.size.width = (this.screenSize.width - this.position.x)
    else this.size.width = newSize.width

    if (newSize.height < 1) this.size.height = 1
    else if (newSize.height > (this.screenSize.height - this.position.y)) this.size.height = (this.screenSize.height - this.position.y)
    else this.size.height = newSize.height
  }
  move(newPosition) {

    if (newPosition.x < 0) this.position.x = 0
    else if (newPosition.x > (this.screenSize.width - this.size.width)) this.position.x = (this.screenSize.width - this.size.width)
    else this.position.x = newPosition.x

    if (newPosition.y < 0) this.position.y = 0
    else if (newPosition.y > (this.screenSize.height - this.size.height)) this.position.y = (this.screenSize.height - this.size.height)
    else this.position.y = newPosition.y
  }
}

export function changeWindow(programWindow) {
  let newSize = new Size(400, 300)
  let newPos = new Position(100, 150)
  programWindow.move(newPos)
  programWindow.resize(newSize)
  return programWindow
}


