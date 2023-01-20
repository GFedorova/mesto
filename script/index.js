const popup = document.querySelector('.popup');
const popupOpen = document.querySelector('.profile__edit-button');
const popupClose = document.querySelector('.popup__close-button');

popupOpen.addEventListener('click', function () {
    popup.classList.add('popup_opened');
});

popupClose.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
});

const editForm = document.querySelector('.popup__container');
const nameAdd = document.querySelector('.popup__name-user');
const aboutAdd = document.querySelector('.popup__about-user');
const saveButton = document.querySelector('.popup__submit');
const userName = document.querySelector('.profile__title');
const aboutUser = document.querySelector('.profile__subtitle');

function handleFormSubmit(evt) {
    evt.preventDefault();
    userName.textContent = nameAdd.value;
    aboutUser.textContent = aboutAdd.value;
};

editForm.addEventListener('submit', handleFormSubmit);

saveButton.addEventListener('click', function () {
    popup.classList.remove('popup_opened');
})