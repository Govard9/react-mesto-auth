import React, {useEffect, useRef} from 'react';
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpen, onAddPlace, onClose}) {

  const refTitle = useRef();

  const refLink = useRef();

  useEffect(() => {
      refTitle.current.value = '';
      refLink.current.value = '';
  }, [isOpen])

  function handleSubmit(e) {
    // Запрещаем браузеру переходить по адресу формы
    e.preventDefault();

    // Передаём значения управляемых компонентов во внешний обработчик
    onAddPlace({
      name: refTitle.current.value,
      link: refLink.current.value,
    });
  }

  return (
    <PopupWithForm
      title={'Новое место'}
      name={'add-card'}
      isOpen={isOpen}
      onClose={onClose}
      buttonText={'Создать'}
      onSubmit={handleSubmit}
    >
      <input
        type="text"
        name="name"
        placeholder="Название"
        minLength="2"
        maxLength="30"
        className="popup__input popup__input_data_title"
        required
        id="title"
        ref={refTitle}
      />
      <span className="popup__error title-error"></span>
      <input
        type="url"
        name="link"
        placeholder="Ссылка на картинку"
        required
        className="popup__input popup__input_data_link-img"
        id="link"
        ref={refLink}
      />
      <span className="popup__error link-error"></span>
    </PopupWithForm>
  );
}

export default AddPlacePopup;