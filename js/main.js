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
  return Number(coordinate.toFixed(afterPoint));
}
getRandomСoordinate(59.41504210490353, 18.25022450632139);

const getRandomArrayElement = (elements) => {
  return elements[getRandomIntInclusive(0, elements.length - 1)];
};

const SIMILAR_OBJECT_COUNT = 10;

const NUMBERS = [
  '01',
  '02',
  '03',
  '04',
  '05',
  '06',
  '07',
  '08',
];

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECK = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const AUTHOR = {
  avatar: 'img/avatars/' + getRandomArrayElement(NUMBERS) + '.png',
};

const OFFER = {
  title: 'заголовок',
  address: String(getRandomСoordinate(59.41504210490353, 18.25022450632139)),
  price: getRandomIntInclusive(50, 3500),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomIntInclusive(1, 250),
  guests: getRandomIntInclusive(1, 500),
  checkin: getRandomArrayElement(CHECK),
  checkout: getRandomArrayElement(CHECK),
  features: new Array(getRandomIntInclusive(1, 6)).fill(null).map(() => getRandomArrayElement(FEATURES)),
  description: 'описание',
  photos: new Array(getRandomIntInclusive(1, 3)).fill(null).map(() => getRandomArrayElement(PHOTOS)),
};

const LOCATION = {
  lat: getRandomСoordinate(35.65000, 35.70000),
  lng: getRandomСoordinate(139.70000, 139.80000),
};

const createAnnouncement = () => {
  return {
    author: '',
    offer: '',
    location: '',
  };
};

const similarObjects = new Array(SIMILAR_OBJECT_COUNT).fill(null).map(() => createAnnouncement());
