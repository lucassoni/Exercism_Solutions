//
// This is only a SKELETON file for the 'Secret Handshake' exercise. It's been provided as a
// convenience to get you started writing code faster.
//
const actions = ["wink", "double blink", "close your eyes", "jump"]

export const commands = (number) => {
  if (!number)
    return [];
  let binary = number.toString(2);
  let selectedActions = []
  
  for (let i = 0; i < binary.length && i < 4; i++) {
    if (binary.charAt((binary.length - i) - 1) == 1) {
      selectedActions.push(actions[i])
    }
  }
  
  if (binary.length === 5 && binary.charAt(0)) {
    selectedActions = selectedActions.reverse();
  }
  
  return selectedActions;
};
