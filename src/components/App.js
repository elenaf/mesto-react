import '../index.css';
import Header from './Header';
import Main from './Main';
import Footer from './Footer';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import React from 'react';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      selectedCard: null,
    }
  }

  render() {
    return (
      <div className='page'>
      < Header />
      < Main
        onEditProfile = {this.handleEditProfileClick}
        onAddPlace = {this.handleAddPlaceClick}
        onEditAvatar = {this.handleEditAvatarClick}
        onCardClick = {this.handleCardClick}
      />
      < Footer />
      < PopupWithForm
        title="Редактировать профиль" 
        name="profile-edit"
        buttonName="Сохранить"
        isOpen={this.state.isEditProfilePopupOpen}
        onClose={this.closeAllPopups}
      > 
        <label className="popup__label">
          <input id="name-input" type="text" placeholder="Имя" className="popup__input popup__input_field_name" name="name" required minLength="2" maxLength="40"/>
          <span id="name-input-error" className="popup__error"></span>
        </label>
        <label className="popup__label">
          <input id="occupation-input" type="text" placeholder="Род занятий" className="popup__input popup__input_field_occupation" name="about" required minLength="2" maxLength="200"/>
          <span id="occupation-input-error" className="popup__error"></span>
        </label>
      </PopupWithForm>
      <PopupWithForm
        title="Новое место" 
        name="place-add"
        buttonName="Создать"
        isOpen={this.state.isAddPlacePopupOpen}
        onClose={this.closeAllPopups}
      >
        <label className="popup__label">
          <input id="place-name-input" type="text" placeholder="Название" className="popup__input popup__input_field_place-name" name="name" required minLength="2" maxLength="30" />
          <span id="place-name-input-error" className="popup__error"></span>
        </label>
        <label className="popup__label">
          <input id="picture-link-input" type="url" placeholder="Ссылка на картинку" className="popup__input popup__input_field_picture-link" name="link" required />
          <span id="picture-link-input-error" className="popup__error"></span>
        </label>
      </PopupWithForm>
        
          
      < PopupWithForm
        title="Обновить аватар" 
        name="avatar-update"
        buttonName="Сохранить"
        isOpen={this.state.isEditAvatarPopupOpen}
        onClose={this.closeAllPopups}
      >
        <label className="popup__label">
          <input id="avatar-link-input" type="url" placeholder="Ссылка на новый аватар" className="popup__input popup__input_field_picture-link" name="avatar" required />
          <span id="avatar-link-input-error" className="popup__error"></span>
        </label>
      </PopupWithForm>
      < PopupWithForm
        title="Вы уверены?" 
        name="remove-submit"
        buttonName="Да"
      />
      < ImagePopup 
        name="image-show"
        isOpen={!!this.state.selectedCard}
        card={this.state.selectedCard}
        onClose={this.closeAllPopups}
      />
      </div>
    );
  }

  handleEditAvatarClick = () => {
    this.setState({ isEditAvatarPopupOpen: true });
  }

  handleEditProfileClick = () => {
    this.setState({ isEditProfilePopupOpen: true });
  }

  handleAddPlaceClick = () => {
    this.setState({ isAddPlacePopupOpen: true });
  }

  handleCardClick = (card) => {
    this.setState( {
      selectedCard: { ...card },
    })
  }

  closeAllPopups = () => {
    this.setState({ 
      isEditAvatarPopupOpen: false,
      isEditProfilePopupOpen: false,
      isAddPlacePopupOpen: false,
      selectedCard: null,
    });
  }
}

export default App;
