
export function canExecuteFastAttack(knightIsAwake) {
  return !knightIsAwake;
}
export function canSpy(knight, archer, prisoner) {
  return knight || archer || prisoner;
  // return true if one is awake
}

export function canSignalPrisoner(archerIsAwake, prisonerIsAwake) {
  if (prisonerIsAwake) {
    if (!archerIsAwake) return true;
  }
  return false;
}

export function canFreePrisoner(
  knightIsAwake,
  archerIsAwake,
  prisonerIsAwake,
  petDogIsPresent,
) {
  if (petDogIsPresent) {
    if (!archerIsAwake) return true;
  } else {
    if (prisonerIsAwake) {
      if (!knightIsAwake && !archerIsAwake) return true;
    }
  }
  return false;
}
