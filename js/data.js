import {getRandomIntInclusive, getRandomСoordinate, getRandomArrayElement} from './util.js';

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

const author = {
  avatar: `img/avatars/${getRandomArrayElement(NUMBERS)}.png`,
};

const offer = {
  title: 'заголовок',
  address: String(getRandomСoordinate(59.41504210490353, 18.25022450632139)),
  price: getRandomIntInclusive(50, 3500),
  type: getRandomArrayElement(TYPES),
  rooms: getRandomIntInclusive(1, 250),
  guests: getRandomIntInclusive(1, 500),
  checkin: getRandomArrayElement(CHECK),
  checkout: getRandomArrayElement(CHECK),
  features: new Array(getRandomIntInclusive(1, 6)).fill(null).map(() => FEATURES.slice(0, getRandomArrayElement(FEATURES))),
  description: 'описание',
  photos: new Array(getRandomIntInclusive(1, 3)).fill(null).map(() => getRandomArrayElement(PHOTOS)),
};

const loc = {
  lat: getRandomСoordinate(35.65000, 35.70000),
  lng: getRandomСoordinate(139.70000, 139.80000),
};

const createAnnouncement = () => ({ author, offer, loc });

export {createAnnouncement};
