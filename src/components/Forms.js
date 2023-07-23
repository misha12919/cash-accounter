
export const Forms = ({addHistoryItem, getDateNow}) => {

  // const validate = (className) => {
  //   console.log(`.${className}`);
  //   const el = document.querySelector(`.${className}`)
  //   if (el.value !== el.value.replace(/[^a-zA-Z0-9@]+/, '')) {
  //     el.value = el.value.slice(0,-1)
  //   }
  // };

  return <div className="forms">
    <div className="form">
      <div className="form__title">Добавить новую трату:</div>
      <div className="form__group">

        <div className="form__group__info form__group__info--name">
          <div className="form__group__info__text">Название:</div>
          <input className="form__group__info__input"></input>
          {/* <input className="form__group__info__input" onKeyUp={validate('form__group__info__input')}></input> */}
        </div>

        <div className="form__group__info">
          <div className="form__group__info__text">Стоимость:</div>
          <input className="form__group__info__input" type="number"></input>
        </div>

        <div className="form__group__info">
          <div className="form__group__info__text">Количество:</div>
          <input className="form__group__info__input" type="number" defaultValue={1}></input>
        </div>

        <div className="form__group__info">
          <div className="form__group__info__text">Дата:</div>
          <div className="form__group__info__input-date-group">
            <input className="form__group__info__input" defaultValue={getDateNow()} type="date" min="2023-01-01" max="2024-12-31"></input>
            <div className="form__group__info__input-date-icon">
              <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
                <g>
                  <path d="M60,4h-7V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H17V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H4
                    C1.789,4,0,5.789,0,8v52c0,2.211,1.789,4,4,4h56c2.211,0,4-1.789,4-4V8C64,5.789,62.211,4,60,4z M18,53c0,0.553-0.447,1-1,1h-6
                    c-0.553,0-1-0.447-1-1v-5c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1V53z M18,42c0,0.553-0.447,1-1,1h-6c-0.553,0-1-0.447-1-1v-5
                    c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1V42z M18,31c0,0.553-0.447,1-1,1h-6c-0.553,0-1-0.447-1-1v-5c0-0.553,0.447-1,1-1h6
                    c0.553,0,1,0.447,1,1V31z M30,53c0,0.553-0.447,1-1,1h-6c-0.553,0-1-0.447-1-1v-5c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1V53z
                    M30,42c0,0.553-0.447,1-1,1h-6c-0.553,0-1-0.447-1-1v-5c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1V42z M30,31
                    c0,0.553-0.447,1-1,1h-6c-0.553,0-1-0.447-1-1v-5c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1V31z M42,53c0,0.553-0.447,1-1,1h-6
                    c-0.553,0-1-0.447-1-1v-5c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1V53z M42,42c0,0.553-0.447,1-1,1h-6c-0.553,0-1-0.447-1-1v-5
                    c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1V42z M42,31c0,0.553-0.447,1-1,1h-6c-0.553,0-1-0.447-1-1v-5c0-0.553,0.447-1,1-1h6
                    c0.553,0,1,0.447,1,1V31z M54,42c0,0.553-0.447,1-1,1h-6c-0.553,0-1-0.447-1-1v-5c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1V42z
                    M54,31c0,0.553-0.447,1-1,1h-6c-0.553,0-1-0.447-1-1v-5c0-0.553,0.447-1,1-1h6c0.553,0,1,0.447,1,1V31z M62,15H2V8
                    c0-1.104,0.896-2,2-2h7v4c0,1.657,1.343,3,3,3s3-1.343,3-3V6h30v4c0,1.657,1.343,3,3,3s3-1.343,3-3V6h7c1.104,0,2,0.896,2,2V15z"/>
                </g>
              </svg>
            </div>
          </div>
        </div>

        <div className="form__group__plus" onClick={() => {
          addHistoryItem([...document.querySelectorAll('.form__group__info__input')].map((el) => {
            return el.value
          }))
        }}></div>
      </div>
    </div>
  </div>
}