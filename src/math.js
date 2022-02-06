const pi = 3.1415962;

function doublePi() {
  return pi * 2;
}

function tripplePI() {
  return pi * 3;
}

// there is only 1 default per file
export default pi;

// within curly braces you can export non default exports
export { doublePi, tripplePI };
