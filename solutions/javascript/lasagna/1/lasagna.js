export const EXPECTED_MINUTES_IN_OVEN = 40;

export function remainingMinutesInOven(minutes_lasag_spent_in_the_oven) {
  return EXPECTED_MINUTES_IN_OVEN - minutes_lasag_spent_in_the_oven;
}
export function preparationTimeInMinutes(numberOFLayers) {
  return numberOFLayers * 2;
}
export function totalTimeInMinutes(numberOFLayers, actualMinutesInOven) {
  return preparationTimeInMinutes(numberOFLayers) + actualMinutesInOven;
}
