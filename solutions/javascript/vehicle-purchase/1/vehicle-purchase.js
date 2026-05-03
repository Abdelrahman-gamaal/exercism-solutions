export function needsLicense(string) {
  if (string === "car" || string === "truck") return true;
  else return false;
}

export function chooseVehicle(option1, option2) {
  if (option1 < option2) return option1 + " is clearly the better choice.";
  else return option2 + " is clearly the better choice.";
}

export function calculateResellPrice(originalPrice, age) {
  if (age < 3) return originalPrice * 0.8;
  else if (age >= 3 && age <= 10) return originalPrice * 0.7;
  else return originalPrice * 0.5;
}
/*
console.log(needsLicense("car"));
// => true

console.log(needsLicense("bike"));
// => false

console.log(chooseVehicle("Wuling Hongguang", "Toyota Corolla"));
// =>  'Toyota Corolla is clearly the better choice.'

console.log(chooseVehicle("Volkswagen Beetle", "Volkswagen Golf"));
// =>  'Volkswagen Beetle is clearly the better choice.

console.log(calculateResellPrice(1000, 1));
// => 800

console.log(calculateResellPrice(1000, 5));
// => 700

console.log(calculateResellPrice(1000, 15));
// => 500
*/
