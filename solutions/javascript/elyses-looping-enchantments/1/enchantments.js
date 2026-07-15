export function cardTypeCheck(array, cardType) {
  let times = 0;
  array.forEach((element) => {
    if (element === cardType) times++;
    
  });
  return times;
}

export function determineOddEvenCards(array, state) {
  let times = 0;
  if (state === true) {
    for (const num of array) {
      if (num % 2 === 0) times++;
    }
    return times;
  } else {
    for (const num of array) {
      if (num % 2 !== 0) times++;
    }
    return times;
  }
}
