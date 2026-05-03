export function frontDoorResponse(string) {
  return string[0]; //first letter
  //
}

export function frontDoorPassword(string) {
  return string[0].toUpperCase() + string.slice(1).toLowerCase();
  // Capitalize a word
}
export function backDoorResponse(string) {
  let stringAfterTrim = string.trim();
  let lengthOfString = stringAfterTrim.length;
  return stringAfterTrim[lengthOfString - 1];
  //انت محتاج ايه
}

export function backDoorPassword(string) {
  return string[0].toUpperCase() + string.slice(1) + ", please";
}
//console.log(frontDoorResponse("abdo"));
//console.log(frontDoorPassword("Summer"));
//console.log(backDoorResponse("abdo"));
//console.log(backDoorPassword("abdo"));
