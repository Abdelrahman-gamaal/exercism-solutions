export const getListOfWagons = (...IDs) => {
  return IDs;
};

export function fixListOfWagons(eachWagonsID) {
  const [a, b, ...otherIDs] = eachWagonsID;
  otherIDs.push(a);
  otherIDs.push(b);
  return otherIDs;
}

export function correctListOfWagons(eachWagonsID, missingWagons) {
  const [firstID, ...otherIDs] = eachWagonsID;
  return [firstID, ...missingWagons, ...otherIDs];
}

export function extendRouteInformation(route, moreRouteInformation) {
  const result = {
    ...route,
    ...moreRouteInformation,
  };
  return result;
}
const routeInformation = {
  from: "Berlin",
  to: "Hamburg",
  length: "100",
  timeOfArrival: "10:10",
};
export function separateTimeOfArrival(routeInformation) {
  const { timeOfArrival, ...otherRoute } = routeInformation;
  return [timeOfArrival, otherRoute];
}
