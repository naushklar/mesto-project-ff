// создание карточки
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

// удаление карточки
function deleteCard(evt) {
  const targetCard = evt.target.closest('.card');
  targetCard.remove();
};



export {createCard, deleteCard};

