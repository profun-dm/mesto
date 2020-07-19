let name = document.querySelector('.profile__title');
let subtitle = document.querySelector('.profile__subtitle');
let editButton = document.querySelector('.profile__edit-button');
let popup = document.querySelector('.popup');
let popupForm = document.querySelector('.popup__form');
let popupName = document.querySelector('.popup__profile-title');
let popupSubtitle = document.querySelector('.popup__profile-subtitle');
let exitButton = document.querySelector('.popup__exit-button');

function popupOpener() {
    popup.classList.add('popup_opened');
    popupName.value = name.innerText;
    popupSubtitle.value = subtitle.innerText;
}

function popupCloser() {
    popup.classList.remove('popup_opened');
}

function popupFormSubmit(evt) {
    evt.preventDefault();
    name.textContent = popupName.value;
    subtitle.textContent = popupSubtitle.value;
    popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', popupOpener);
exitButton.addEventListener('click', popupCloser);
popupForm.addEventListener('submit', popupFormSubmit);