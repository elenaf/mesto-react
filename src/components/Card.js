export default function Card({ card, onCardClick }) {
    function handleClick() {
        onCardClick({ ...card});
    }

    return(
    <div className="element">
        <img onClick={handleClick} className="element__image" src={card.link} alt={card.name}/>
        <button type="button" className="element__trash-button"></button>
        <div className="element__caption">
          <h2 className="element__place-name">{card.name}</h2>
          <div className="element__like">
            <button type="button" className="element__like-button"></button>
            <div className="element__like-amount">{card.likes.length}</div>
          </div>
        </div>
    </div> 
    );
}