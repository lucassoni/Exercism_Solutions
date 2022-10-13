// This is only a SKELETON file for the 'Robot Name' exercise. It's been
// provided as a convenience to get your started writing code faster.
const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
const numbers = '1234567890'
var usedNames = []

export function generateName() {
  let name = ''
  name += characters.charAt(Math.floor(Math.random() * characters.length))
  name += characters.charAt(Math.floor(Math.random() * characters.length))
  name += numbers.charAt(Math.floor(Math.random() * numbers.length))
  name += numbers.charAt(Math.floor(Math.random() * numbers.length))
  name += numbers.charAt(Math.floor(Math.random() * numbers.length))
  if (usedNames.find(element => element === name)) name = generateName()
  usedNames.push(name)
  return name
}

export class Robot {
  #name;
  constructor() {
    this.#name = generateName()
  }
  get name() {
    return this.#name;
  }
  reset() {
    this.#name = generateName()
  }
}


Robot.releaseNames = () => {};

