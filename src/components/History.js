import { useEffect, useState } from "react";


export const History = () => {
  const [amoutOfRows, setAmontOfRows] = useState({
    value: 2,
    isUpdated: false,
  })

  const [items, setItems] = useState([
    {
      name: "Зимняя куртка",
      cost: "13790 руб.",
      date: "15.07.2023"
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023"
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023"
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023"
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023"
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023"
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023"
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023"
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023"
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023"
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023"
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023"
    },
  ])

  useEffect(()=>{
    if (!amoutOfRows.isUpdated) {
      setAmontOfRows({
        value: document.querySelector(".history__items").childElementCount,
        isUpdated: true
      })
    }
  })

  return (<div className="history">
    
    <div className="history__search">

      <div className="history__search__group">
        <div className="history__search__text">По слову(ам):</div>
        <input className="history__search__input"></input>
      </div>

      <div className="history__search__group">
        <div className="history__search__text">По дате:</div>
        <input className="history__search__input" type="date"></input>
      </div>

    </div>

    <div className="history__title">История</div>
    
    <div className="history__items" style={{ gridTemplate: `repeat(${Math.ceil(amoutOfRows.value/5)}, 142px) / repeat(5, 142px)` }}>

      {items.map((item) => {
        return (
          <div className="history__item">
            <div className="history__item__name">{item.name}</div>
            <div className="history__item__cost">{item.cost}</div>
            <div className="history__item__date">{item.date}</div>
          </div>
        )
      })}

    </div>
  </div>)
}