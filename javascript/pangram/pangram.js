//
// This is only a SKELETON file for the 'Pangram' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const isPangram = (sentence) => {
  let letterCount = new Set(sentence.toLowerCase().replace(/[^a-z]/g, ''))
  if (letterCount.size === 26) return true
  return false
};
