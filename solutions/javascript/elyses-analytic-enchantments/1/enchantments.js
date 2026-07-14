export const getCardPosition = (array, card) => {
  return array.findIndex((num) => num === card);
};

export const doesStackIncludeCard = (array, card) => {
  return array.includes(card);
};

export const isEachCardEven = (array) => {
  return array.every((num) => num % 2 == 0);
};

export const doesStackIncludeOddCard = (array) => {
  return array.some((num) => num % 2 !== 0);
};
export const getFirstOddCard = (array) => {
  return array.find((num) => num % 2 !== 0);
};
export const getFirstEvenCardPosition = (array) => {
  return array.findIndex((num) => num % 2 === 0);
};
