//
// This is only a SKELETON file for the 'Wordy' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const answer = (string) => {
  
  string = string.replace(/plus/g, '+')
  string = string.replace(/minus/g, '-')
  string = string.replace(/multiplied by/g, '*')
  string = string.replace(/divided by/g, '/')
  
  string = string.slice(8, -1)

  if (/[a-z]/i.test(string)) throw new Error('Unknown operation')
  
  string = string.split(' ')
  
  let ops = []
  let numbers = []
  for (let element of string) {
    if (/\B[+\-*\/]\B/g.test(element)) ops.push(element)
    if (/\d+/g.test(element)) numbers.push(element)
    if (ops.length > numbers.length || numbers.length === (ops.length + 2)) throw new Error('Syntax error')
  }
  if (numbers.length === 0 || ops.length === 0 && numbers.length > 1|| numbers.length <= ops.length) throw new Error('Syntax error')

  let aux = numbers[0]
  for (let i = 0; i < ops.length; i++) {
    aux = eval(String(aux).concat(' ', ops[i], ' ', numbers[i + 1]))
  }
  return Number(aux)
};
