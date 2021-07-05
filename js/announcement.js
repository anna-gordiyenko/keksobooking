import { similarAnnouncement } from './data.js';
import {handleContent} from './util.js';

const typeDictionary = {
  flat: 'Квартира',
  bungalow: 'Бунгало',
  house: 'Дом',
  palace: 'Дворец',
  hotel: 'Отель',
};

const similarListElement = document.querySelector('.map');
const announcementTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const announcementsFragment = document.createDocumentFragment();

similarAnnouncement.forEach(({ offer, author }) => {
  const announcementElement = announcementTemplate.cloneNode(true);
  handleContent(announcementElement.querySelector('.popup__title'), offer.title);
  handleContent(announcementElement.querySelector('.popup__text--address'),offer.address);
  handleContent(announcementElement.querySelector('.popup__text--price'),`${offer.price}₽/ночь`);
  handleContent(announcementElement.querySelector('.popup__type'), typeDictionary[offer.type]);
  handleContent(announcementElement.querySelector('.popup__text--capacity'), `${offer.rooms} комнаты для ${offer.guests} гостей`, offer.rooms && offer.guests);
  handleContent(announcementElement.querySelector('.popup__text--time'),`Заезд после ${offer.checkin}, выезд до ${offer.checkout}`,offer.checkin && offer.checkout);
  handleContent(announcementElement.querySelector('.popup__features'),offer.features);
  handleContent(announcementElement.querySelector('.popup__description'),offer.description);
  for (let idx = 0; idx < offer.photos.length; idx++) {
    announcementElement.querySelector('.popup__photo').src = offer.photos[idx];
    const photoElement = announcementElement.querySelector('.popup__photo').cloneNode(true);
    photoElement.src = offer.photos[idx];
    announcementElement.querySelector('.popup__photos').appendChild(photoElement);
  }
  announcementElement.querySelector('.popup__avatar').src = author.avatar;
  announcementsFragment.appendChild(announcementElement);
});

similarListElement.appendChild(announcementsFragment);

export {announcementsFragment};
