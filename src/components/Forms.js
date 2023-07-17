

export const Forms = () => {
  
  return <div className="forms">
    <div className="form">
      <div className="form__title">Добавить новую трату или поступление:</div>
      <div className="form__group">
        <div className="form__group__info">
          <div className="form__group__info__text">Название:</div>
          <input className="form__group__info__input"></input>
        </div>
        <div className="form__group__info">
          <div className="form__group__info__text">Стоимость:</div>
          <input className="form__group__info__input"></input>
        </div>
        <div className="form__group__plus"></div>
      </div>
    </div>
  </div>
}