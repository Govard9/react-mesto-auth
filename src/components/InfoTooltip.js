import React from 'react';
import crossCircleFail from "../images/icon/icon-cross-in-a-circle-popup-fail.svg";
import crossCircleSuccess from "../images/icon/icon-cross-in-a-circle-popup-success.svg";

function InfoTooltip({isOpen, onClose}) {

  if (!true) {
    return (
      <div className={`popup popup_tooltip popup_opened ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__main-container popup__main-container_flex-center">
          <button
            onClick={onClose}
            className="popup__close-button"
            type="button"
            aria-label="закрыть всплывающее окно"
          ></button>
          <img
            src={crossCircleSuccess}
            alt=" Крест в красном круге."
            className="popup__cross-in-circle"
          />
          <h2 className="popup__text popup__text_cross-circle">Вы успешно зарегистрировались!</h2>
        </div>
      </div>
    );
  } else {
    return (
      <div className={`popup popup_tooltip ${isOpen ? 'popup_opened' : ''}`}>
        <div className="popup__main-container popup__main-container_flex-center">
          <button
            onClick={onClose}
            className="popup__close-button"
            type="button"
            aria-label="закрыть всплывающее окно"
          ></button>
          <img
            src={crossCircleFail}
            alt=" Крест в красном круге."
            className="popup__cross-in-circle"
          />
          <h2 className="popup__text popup__text_cross-circle">Что-то пошло не так!
            Попробуйте ещё раз.</h2>
        </div>
      </div>
    );
  }

}

export default InfoTooltip;