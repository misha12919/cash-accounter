
export const Forms = ({addHistoryItem, getDateNow}) => {

  const validate = (className) => {
    const el = document.querySelector(`.${className}`)
    if (el.value !== el.value.replace(/[^a-zA-Z0-9@]+/, '')) {
      el.value = el.value.slice(0,-1)
    }
  };

  return <div className="forms">
    <div className="form">
      <div className="form__title">Добавить новую трату:</div>
      <div className="form__group">
        <div className="form__group__info">
          <div className="form__group__info__text">Название:</div>
          <input className="form__group__info__input"></input>
        </div>
        <div className="form__group__info">
          <div className="form__group__info__text">Стоимость:</div>
          <input className="form__group__info__input" type="number"></input>
        </div>
        <div className="form__group__info">
          <div className="form__group__info__text">Дата:</div>
          <input className="form__group__info__input" type="date" defaultValue={getDateNow()} min="2022-01-01" max="2023-12-31"></input>
        </div>
        <div className="form__group__plus" onClick={() => {
          addHistoryItem([...document.querySelectorAll('.form__group__info__input')].map((el) => {
            return el.value.split('-').reverse().join('.')
          }))
        }}></div>
      </div>
    </div>
  </div>
}