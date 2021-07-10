function isPrimitive(value) {
  if (typeof value !== 'object' || value === null) {
    return true;
  }

  return false;
}

export default function stateClone(original) {
  if (typeof original === 'function') {
    console.warn('WARNING: NOT deep cloning a function. Sent a reference instead.');
    console.warn('You have a method inside your state. You sure you want to do this?');
    return original;
  }

  if (isPrimitive(original)) return original;

  let clone;

  if (!Array.isArray(original)) {
    clone = new original.constructor();

    for (let key in original) {
      clone[key] = stateClone(original[key]);
    }

    return clone;
  }

  clone = [];

  for (let i = 0; i < original.length; i += 1) {
    clone.push(stateClone(original[i]));
  }

  return clone;
}
