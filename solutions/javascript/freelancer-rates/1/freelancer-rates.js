export function dayRate(priceOfHour) {
  return priceOfHour * 8;
}

export function daysInBudget(budget, priceOfHour) {
  return Math.floor(budget / dayRate(priceOfHour));
}

export function priceWithMonthlyDiscount(priceOfHour, days, discount = 0.42) {
  const dailyRate = dayRate(priceOfHour);

  const months = Math.floor(days / 22);
  const remainingDays = days % 22;

  const discountedPart = months * 22 * dailyRate * (1 - discount);
  const normalPart = remainingDays * dailyRate;

  return Math.ceil(discountedPart + normalPart);
}