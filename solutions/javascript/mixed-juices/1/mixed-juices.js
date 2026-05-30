const timeToMixJuice = (juice) => {
  if (juice === "Pure Strawberry Joy") return 0.5;
  else if (juice === "Energizer" || juice === "Green Garden") return 1.5;
  else if (juice === "Tropical Island") return 3;
  else if (juice === "All or Nothing") return 5;
  else return 2.5;
};

const limesToCut = (LimeNeeds, array) => {
  let NumberOfLimes = 0;
  let Howmany = 0;

  for (let i = 0; i < array.length; i++) {
    if (NumberOfLimes >= LimeNeeds) break;

    if (array[i] === "small") NumberOfLimes += 6;
    else if (array[i] === "medium") NumberOfLimes += 8;
    else if (array[i] === "large") NumberOfLimes += 10;

    Howmany++;
  }

  return Howmany;
};

const remainingOrders = (numberOfMinutesLeft, juices) => {
  while (numberOfMinutesLeft > 0 && juices.length > 0) {
    const juiceMinutes = timeToMixJuice(juices[0]);
    numberOfMinutesLeft -= juiceMinutes;
    juices.shift();
  }

  return juices;
};

export { timeToMixJuice, limesToCut, remainingOrders };