//
// This is only a SKELETON file for the 'Space Age' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const yearsTable = {
    mercury : 31557600 * 0.2408467,
    venus : 31557600 * 0.61519726,
    earth : 31557600,
    mars : 31557600 * 1.8808158,
    jupiter : 31557600 * 11.862615,
    saturn : 31557600 * 29.447498,
    uranus : 31557600 * 84.016846,
    neptune : 31557600 * 164.79132,
}

export const age = (planet, seconds) => {
  return Number((seconds / yearsTable[planet]).toFixed(2))
};
