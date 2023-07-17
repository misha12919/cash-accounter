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
      date: "15.07.2023",
      id: 0
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023",
      id: 1
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023",
      id: 2
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023",
      id: 3
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023",
      id: 4
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023",
      id: 5
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023",
      id: 6
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023",
      id: 7
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023",
      id: 8
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023",
      id: 9
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023",
      id: 10
    },
    {
      name: "Перчатки",
      cost: "1679 руб.",
      date: "13.07.2023",
      id: 11
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
          <div className="history__item" key={item.id}>
            <div className="history__item__name">{item.name}</div>
            <div className="history__item__cost">{item.cost}</div>
            <div className="history__item__date">{item.date}</div>
          </div>
        )
      })}

    </div>
  </div>)
}