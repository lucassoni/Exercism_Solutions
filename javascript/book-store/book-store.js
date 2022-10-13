//
// This is only a SKELETON file for the 'BookStore' exercise. It's been provided as a
// convenience to get you started writing code faster.
//

const discounts = [1, 0.95, 0.9, 0.8, 0.75];

export const cost = (books) => {
  if (books.length === 0) {
    return 0;
  }
  
  if(getNumberOfDistinct(books) === books.length) {
    return 800 * books.length * discounts[books.length - 1];
  }
  
  if(getNumberOfDistinct(books) === 1) {
    return 800 * books.length;
  }
  
  let numberOfBooks = books.length;
  let groupSize = getNumberOfDistinct(books);
  let total = 0;
  if(groupSize === 5)  {
    if(numberOfBooks % 4 === 0 && numberOfBooks % 3 !== 0) {
      groupSize = 4;
    }
  }
  
  total += 800 * groupSize * discounts[groupSize - 1];
  
  numberOfBooks -= groupSize;
  
  while(numberOfBooks > 0) {
    if(numberOfBooks % 4 == 0) {
      groupSize = 4;
      groupSize = (groupSize > numberOfBooks) ? 2 : groupSize;
    } else if (groupSize > numberOfBooks) {
      groupSize = numberOfBooks;
    }
    total += 800 * groupSize * discounts[groupSize - 1];
    numberOfBooks -= groupSize;
  }
  
  return total;
};
export const getNumberOfDistinct = (books) => {
  return Array.from(new Set(books)).length;
}
