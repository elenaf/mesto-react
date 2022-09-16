import React from "react";
import api from "../utils/api";
import Card from "./Card";

class Main extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      userName: '',
      userDescription: '',
      userAvatar: '',
      cards: [],
    }
  }

  componentDidMount() {
    api.getUserInfo()
    .then(data => {
      this.setState({
        userName: data.name,
        userDescription: data.about,
        userAvatar: data.avatar,
      })
    })

    api.getInitialCards()
    .then(data => {
      this.setState({
        cards: data,
      })
    })

  }

  render() {
    return(
      <main className="content">
          <section className="profile">
          <div className="profile__info">
              <div className="profile__avatar-container" >
                <img className="profile__avatar" src={this.state.userAvatar} alt="Фото профиля" />
                <button type="button" className="profile__avatar-overlay"
                onClick={this.props.onEditAvatar}
                ></button>
              </div>
              <div className="profile__person">
                <div className="profile__person-name">
                  <h1 className="profile__person-text profile__title">{this.state.userName}</h1>
                  <p className="profile__person-text profile__subtitle">{this.state.userDescription}</p>
                </div>
                <button type="button" className="profile__edit-button"
                onClick={this.props.onEditProfile}
                ></button>
              </div>
            </div>
            <button type="button" className="profile__add-button"
            onClick={this.props.onAddPlace}
            ></button>
          </section>
    
          {/* <!-- Контейнер для карточек с фото --> */}
          <div className="elements">
            {this.state.cards.map((card) => 
              <Card card={card} key={card._id} onCardClick={this.props.onCardClick}/>
            )}
          </div>
            
      </main>
    );
  }
}

export default Main;