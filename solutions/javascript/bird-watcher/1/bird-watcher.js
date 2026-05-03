export function totalBirdCount(bird) {
  let sum = 0;

  for (let i = 0; i < bird.length; i++) {
    sum += bird[i];
  }
  return sum;
}

export function birdsInWeek(birdsPerDay, week) {
  const start = (week - 1) * 7;
  const end = start + 7;
  let sum = 0;
  for (let i = start; i < end; i++) {
    sum += birdsPerDay[i];
  }
  return sum;
}

export function fixBirdCountLog(birdsPerDay) {
  for (let i = 0; i < birdsPerDay.length; i += 2) {
    birdsPerDay[i]++;
  }
  return birdsPerDay;
}
/*
let birdsPerDay = [2, 5, 0, 7, 4, 1, 3, 0, 2, 5, 0, 1, 3, 1];
console.log(totalBirdCount(birdsPerDay));
console.log(birdsInWeek(birdsPerDay, 2));
console.log(fixBirdCountLog([2, 5, 0, 7, 4, 1]));
*/