function getRandomIntInclusive(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min) {
    const swap = max;
    max = min;
    min = swap;
  }
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
getRandomIntInclusive(10.5, 58.67);

function getRandomСoordinate(min, max, afterPoint = 2) {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (max < min) {
    const swap = max;
    max = min;
    min = swap;
  }
  const coordinate = Math.floor(Math.random() * (max - min + 1)) + min;
  return coordinate.toFixed(afterPoint);
}
getRandomСoordinate(59.41504210490353, 18.25022450632139);
