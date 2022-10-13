//
// This is only a SKELETON file for the 'Pascals Triangle' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

export const rows = (quantity) => {
  let pascalsTriangle = []
  if (quantity === 0)
    return pascalsTriangle
  for (let i = 0; i < quantity; i++) {
    let row = []
    for (let j = 0; j < i + 1; j++) {
      if (j === 0 || j === i) row.push(1)
      else {
        row.push(pascalsTriangle[i - 1][j - 1] + pascalsTriangle[i - 1][j])
      }
    }
    pascalsTriangle.push(row)
  }
  return pascalsTriangle
};
