function getRandomIntInclusive(min, max) {
  if (min > 0 && max > 0) {
    min = Math.ceil(min);
    max = Math.floor(max);
    if (max < min) {
      const swap = max;
      max = min;
      min = swap;
    }
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }
  return null;
}

function getRandomСoordinate(min, max, afterPoint = 2) {
  if (min > 0 && max > 0) {
    if (max < min) {
      const swap = max;
      max = min;
      min = swap;
    }
    const coordinate = Math.random() * (max - min + 1) + min;
    return Number(coordinate.toFixed(afterPoint));
  }
  return null;
}

const getRandomArrayElement = (elements) => elements[getRandomIntInclusive(0, elements.length - 1)];

function handleContent(element, value, complexValue = true) {
  if (value && complexValue) {
    element.textContent = value;
  } else {
    element.remove();
  }

}

export { getRandomIntInclusive, getRandomСoordinate, getRandomArrayElement, handleContent };

/*
const makeUniqueRandomIntegerGenerator = (min, max) => {
  const previousValues = [];

  return () => {
    let currentValue = _.random(min, max);
    if (previousValues.length >= (max - min + 1)) {
      throw new Error('Перебраны все числа из диапазона от ' + min + ' до ' + max);
    }
    while (previousValues.includes(currentValue)) {
      currentValue = _.random(min, max);
    }
    previousValues.push(currentValue);
    return currentValue;
  };
};

const getUniqueRandomInteger = makeUniqueRandomIntegerGenerator(1, 3);
*/
