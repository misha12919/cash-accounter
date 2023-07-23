import { useState } from "react"
import { Pagination } from "./Pagination"

export const History = ({historyItems, getDateNow}) => {

  const [filter, setFilter] = useState(['',''])
  const [numberOfItemsToShow, setNumberOfItemsToShow] = useState(2)

  return (<div className="history">
    
    <div className="history__filter">

      <div className="history__filter__group">
        <div className="history__filter__text">По слову(ам):</div>
        <input className="history__filter__input" onChange={()=>{setFilter(prev => [document.querySelector('.history__filter__input').value, prev[1]])}}></input>
      </div>

      <div className="history__filter__group">
        <div className="history__filter__text history__filter__text--date">По дате:</div>
        <div className="history__filter__input-date-group">
          <input className="history__filter__input history__filter__input--date" defaultValue={getDateNow()} type="date" min="2023-01-01" max="2024-12-31"></input>
          <div className="history__filter__input-date-icon">
            <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" enableBackground="new 0 0 64 64">
              <g>
                <path  d="M60,4h-7V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H17V3c0-1.657-1.343-3-3-3s-3,1.343-3,3v1H4
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

    </div>

    <div className="history__title">История</div>
    <div className="history__items">

      {historyItems.map((item, idx) => {
        console.log(item);
        if (item.name.toLowerCase().includes(filter[0].toLowerCase()) && numberOfItemsToShow > idx) {
          if (item.quantity <= 1) {
            return (
              <div className="history__item" key={item.id}>
                <div className="history__item__name">{item.name}</div>
                <div className="history__item__date">{`${item.date.day}.${item.date.month}.${item.date.year}`}</div>
                <div className="history__item__cost">{`${item.cost} руб.`}</div>
                <div className="history__item__quantity">{`x${item.quantity ? item.quantity : 1}`}</div>
              </div>
            )
          } else if (item.quantity > 1) {
            return (
              <div className="history__item" key={item.id}>
                <div className="history__item__name">{item.name}</div>
                <div className="history__item__date">{`${item.date.day}.${item.date.month}.${item.date.year}`}</div>
                <div className="history__item__cost">{`${item.cost} руб.`}</div>
                <div className="history__item__quantity">{`x${item.quantity} по ${item.costOfAPart} руб.`}</div>
              </div>
            )
          } else return null
        } else return null
      })}
      <Pagination numberOfItemsToShow={numberOfItemsToShow} setNumberOfItemsToShow={setNumberOfItemsToShow} historyItems={historyItems}/>
      
    </div>
  </div>)
}