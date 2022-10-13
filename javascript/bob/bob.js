//
// This is only a SKELETON file for the 'Bob' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const hey = (message) => {
  let updatedMessage = message.trim()
  if (updatedMessage.toUpperCase() === updatedMessage && updatedMessage[updatedMessage.length-1] === '?' && /[a-zA-Z]/g.test(updatedMessage)) return 'Calm down, I know what I\'m doing!'
  if (updatedMessage.toUpperCase() === updatedMessage && /[a-zA-Z]/g.test(updatedMessage)) return 'Whoa, chill out!'
  if (updatedMessage[updatedMessage.length-1] === '?') return 'Sure.'
  if (!/[a-zA-Z0-9]/g.test(updatedMessage)) return 'Fine. Be that way!'
  return 'Whatever.'
};
