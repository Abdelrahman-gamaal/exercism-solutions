export const getFirstCard = (array) => {
  const [first] = array;
  return first;
};
export const getSecondCard = (deck) => {
  let [, seconed] = deck;
  return seconed;
};

export const swapTwoCards = (deck) => {
  let [first, seconed] = deck;
  [first, seconed] = [seconed, first];
  return [first, seconed];
};

export const shiftThreeCardsAround = (deck) => {
  let [first, seconed, third] = deck;
  [first, seconed, third] = [seconed, third, first];
  return [first, seconed, third];
};
export const pickNamedPile = ({ chosen }) => {
  return chosen;
};
export const swapNamedPile = ({ chosen, disregarded }) => {
  [chosen, disregarded] = [disregarded, chosen];
  return {chosen, disregarded};
};
