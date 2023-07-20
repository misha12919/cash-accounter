import { InfoPanel } from "./components/InfoPanel";
import { Forms } from "./components/Forms";
import { History } from "./components/History";
import { useState } from "react";

function App() {
  const [historyItems, setHistoryItems] = useState([
    {
      name: "Перчатки",
      cost: "1679",
      date: {
        day: '20',
        month: '07',
        year: '2023',
      },
      id: 0
    },
    {
      name: "Зимняя куртка",
      cost: "13790",
      date: {
        day: '14',
        month: '07',
        year: '2023',
      },
      id: 1
    },
    {
      name: "Шапка",
      cost: "2190",
      date: {
        day: '6',
        month: '07',
        year: '2023',
      },
      id: 2
    },
    {
      name: "Шарф",
      cost: "780",
      date: {
        day: '2',
        month: '07',
        year: '2023',
      },
      id: 3
    },
    {
      name: "Футболка",
      cost: "1830",
      date: {
        day: '24',
        month: '06',
        year: '2023',
      },
      id: 4
    },
  ])

  const addHistoryItem = (newItem) => {
    setHistoryItems([{

      name: newItem[0].charAt(0).toUpperCase() + newItem[0].slice(1),
      cost: `${newItem[1]}`,
      date: 
      {
        year: Number(newItem[2].split('-')[0]),
        month: Number(newItem[2].split('-')[1]),
        day: Number(newItem[2].split('-')[2]),
      },
      id: 0

    }, ...historyItems.map((el)=>{
      el.id = el.id+1
      return el
    })])
  }

  const getDateNow = () => {
    const currDate = new Date()
    return `${currDate.toDateString().split(' ')[3]}-${currDate.getMonth().toString().length<2 ? `0${currDate.getMonth()+1}` : currDate.getMonth()+1}-${currDate.toDateString().split(' ')[2].length<2 ? `0${currDate.toDateString().split(' ')[2]}` : currDate.toDateString().split(' ')[2]}`
  }

  return (
    <div className="container">
      <InfoPanel historyItems={historyItems} getDateNow={getDateNow} />
      <Forms addHistoryItem={addHistoryItem} getDateNow={getDateNow}/>
      <History historyItems={historyItems} getDateNow={getDateNow}/>
    </div>
  );
}

export default App;
