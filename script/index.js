const popup = document.querySelector('.popup');
const editForm = popup.querySelector('.popup__form');
const popupOpenButton = document.querySelector('.profile__edit-button');
const popupCloseButton = document.querySelector('.popup__close-button');

const nameAdd = editForm.querySelector('.popup__input_user_name');
const aboutAdd = editForm.querySelector('.popup__input_user_about');
const userName = document.querySelector('.profile__title');
const userAbout = document.querySelector('.profile__subtitle');

const popupPlace = document.querySelector('.popup_type_place');
const editFormPlace = popupPlace.querySelector('.popup__form_type_place');
const popupOpenButtonPlace = document.querySelector('.profile__add-button');


function popupOpen () {
    popup.classList.add('popup_opened');
    nameAdd.value = userName.textContent;
    aboutAdd.value = userAbout.textContent;
}

popupOpenButton.addEventListener('click', popupOpen);

function popupOpenPlace () {
  popupPlace.classList.add('popup_opened');
}

popupOpenButtonPlace.addEventListener('click', popupOpenPlace);

function popupClose () {
    popup.classList.remove('popup_opened');
}

popupCloseButton.addEventListener('click', popupClose);

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = nameAdd.value;
    userAbout.textContent = aboutAdd.value;
    popupClose();
}

editForm.addEventListener('submit', handleFormSubmit);

function addCardd
