import './styles/index.css';
import {openModal, closeModal, closeModalOnEscape, closeModalOnOverlay} from "./modal";
import {createCard, deleteCard} from './card';

// selectors and forms
const cardTemplate = document.querySelector('#card-template').content;
const placesList = document.querySelector('.places__list');

const profile = document.querySelector('.profile');
const editButton = document.querySelector('.profile__edit-button');
const addButton = document.querySelector('.profile__add-button');

const popupEdit = document.querySelector('.popup_type_edit');
const popupAddNewCard = document.querySelector('.popup_type_new-card');
const popupImage = document.querySelector('.popup_type_image');


const formProfile = document.forms['edit-profile'];
const NameInput = document.querySelector('.profile__title');
const JobInput = document.querySelector('.profile__description');

const popupAddNewCardForm = document.forms('new-place');
const placeNameInput = document.querySelector('.popup__input_type_card-name');
const placeImgInput = document.querySelector('.popup__input_type_url');


const profileTitle = profile.querySelector('.profile__title');
const profileDescription = profile.querySelector('.profile__description');


const popupimageElement = popupImage.querySelector('.popup__image');
const popupimageCaption = popupImage.querySelector('.popup__caption');


// functions

 openModal = (element) => {
    element.classList.add("popup_is-opened");
    document.addEventListener("keydown", closeModalOnEscape);
  };
  
   closeModal = (element) => {
    element.classList.remove("popup_is-opened");
    document.removeEventListener("keydown", closeModalOnEscape);
  };
  
  
  function handlePreviewImage(popupImageData) {
    openPopup(popupImage);
  
    popupimageElement.src = popupImageData.link;
    popupimageElement.alt = popupImageData.name;
    popupimageCaption.textContent = popupImageData.name;
  };
  
  
  function createCard(card, deleteCard) {
    const cardElement = cardTemplate.querySelector('.card').cloneNode(true);
    cardElement.querySelector('.card__title').textContent = card.name;
    cardElement.querySelector('.card__image').src = card.link;
    cardElement.querySelector('.card__image').alt = card.description;
    cardElement.querySelector('.card__image').addEventListener('click', evt => {
      const targetImg = evt.target;
      const cardInfo = {
        name: targetImg.name,
        link: targetImg.src
      };
      handlePreviewImage(cardInfo);
    })
    cardElement.querySelector('.card__like-button').addEventListener('click', evt => {
      evt.target.classList.toggle('card__like-button_active');
    });
    cardElement.querySelector('.card__delete-button').addEventListener('click', (evt) => {
        deleteCard(evt);
    });
    return cardElement;
  }; 

function addCard(cardInfo, placesList, newCard) {
    const card = createCard(cardInfo);
    if (newCard) {
        placesList.prepend(card);
    } else {
        placesList.append(card);
    };
};

initialCards.forEach(function(card) {
    placesList.append(createCard(card, deleteCard));
  });



editButton.addEventListener('click', () => {
    openPopup(popupEdit);
  
    NameInput.value = profileTitle.textContent;
    JobInput.value = profileDescription.textContent;
  });
  
  
  
  
  
  function handleFormSubmit(evt) {
    evt.preventDefault();
  
    profileTitle.textContent = NameInput.value;
    profileDescription.textContent = JobInput.value;
  
    closePopup(popupEdit);
  }
  
  formProfile.addEventListener('submit', handleFormSubmit);
  
  
 
  
  addButton.addEventListener('click', () => {
    openPopup(popupAddNewCard);
  });
  
  
  
  
  
  function handleCardFormSubmit(evt) {
    evt.preventDefault();
  
    addCard({
      name: placeNameInput.value,
      link: placeImgInput.value
    }, cardsList, true);
  
    closePopup(popupAddNewCard);
  
    popupAddNewCardForm.reset();
  }
  
  popupAddNewCardForm.addEventListener('submit', handleCardFormSubmit);
  
