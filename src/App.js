import { InfoPanel } from "./components/InfoPanel";
import { Forms } from "./components/Forms";
import { History } from "./components/History";
import { useState } from "react";

function App() {
  const [historyItems, setHistoryItems] = useState([
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

  const addHistoryItem = (newItem) => {
    setHistoryItems([{

      name: newItem[0],
      cost: `${newItem[1]} руб.`,
      date: newItem[2],
      id: 0

    }, ...historyItems.map((el)=>{
      el.id = el.id+1
      return el
    })])
  }

  const currDate = new Date()

  const getDateNow = () => {
    return `${currDate.toDateString().split(' ')[3]}-${currDate.getMonth().toString().length<2 ? `0${currDate.getMonth()}` : currDate.getMonth()}-${currDate.toDateString().split(' ')[2]}`
  }

  return (
    <div className="container">
      <InfoPanel />
      <Forms addHistoryItem={addHistoryItem} getDateNow={getDateNow}/>
      <History historyItems={historyItems}/>
    </div>
  );
}

export default App;
