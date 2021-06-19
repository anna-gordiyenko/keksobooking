import {createAnnouncement} from './data.js';

document.querySelector('.promo').classList.remove('visually-hidden');
document.querySelector('.ad-form').classList.remove('visually-hidden');
document.querySelector('.checkbox').classList.remove('visually-hidden');

const similarListElement = document.querySelector('.map');
const similarAnnouncementTemplate = document.querySelector('#card')
  .content
  .querySelector('.popup');

const similarAnnouncement = createAnnouncement();

const similarListFragment = document.createDocumentFragment();

similarAnnouncement.forEach(({title, address, price, type, rooms, guests, checkin, checkout, features, description, photos, avatar}) => {
  const announcementElement = similarAnnouncementTemplate.cloneNode(true);
  announcementElement.querySelector('.popup__title').textContent = title;
  announcementElement.querySelector('.popup__text--address').textContent = address;
  announcementElement.querySelector('.popup__text--price').textContent = `${price}₽/ночь`;
  if (type === 'flat') {
    announcementElement.querySelector('.popup__type').textContent = 'Квартира';
  } else if (type === 'bungalow') {
    announcementElement.querySelector('.popup__type').textContent = 'Бунгало';
  } else if (type === 'house') {
    announcementElement.querySelector('.popup__type').textContent = 'Дом';
  } else if (type === 'palace') {
    announcementElement.querySelector('.popup__type').textContent = 'Дворец';
  } else if (type === 'hotel') {
    announcementElement.querySelector('.popup__type').textContent = 'Отель ';
  }
  announcementElement.querySelector('.popup__text--capacity').textContent = `${rooms} комнаты для ${guests} гостей`;
  announcementElement.querySelector('.popup__text--time').textContent = `Заезд после ${checkin}, выезд до ${checkout}`;
  announcementElement.querySelector('.popup__features').textContent = features;
  announcementElement.querySelector('.popup__description').textContent = description;
  for (let i = 0; i < photos.length; i++) {
    announcementElement.querySelector('.popup__photo').img.src = photos[i];
  }
  announcementElement.querySelector('.popup__avatar').img.src = avatar;
  similarListFragment.appendChild(announcementElement);
});

similarListElement.appendChild(similarAnnouncement);

const mapCanva = document.querySelector('#map-canvas');
mapCanva.appendChild(similarListFragment);

export {similarListFragment};
