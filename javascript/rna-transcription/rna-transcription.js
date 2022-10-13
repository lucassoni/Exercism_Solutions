//
// This is only a SKELETON file for the 'RNA Transcription' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const toRna = (DNA) => {
  let RNA = ''
  for (let letter of DNA) {
    switch (letter) {
      case 'G':
        RNA = RNA.concat('C')
        break
      case 'C':
        RNA = RNA.concat('G')
        break
      case 'T':
        RNA = RNA.concat('A')
        break
      case 'A':
        RNA = RNA.concat('U')
        break
    }
  }
  return RNA
};
