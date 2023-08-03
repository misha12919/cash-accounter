import { InfoPanel } from "./components/mainPage/InfoPanel";
import { Forms } from "./components/mainPage/Forms";
import { History } from "./components/mainPage/History";
import { useState } from "react";
import { Nav } from "./components/mainPage/Nav";
import './css/mainPage.css';

function MainPage({setPageToRender}) {
  const [numberOfItemsToShow, setNumberOfItemsToShow] = useState(5);
  const [paginationText, setPaginationText] = useState('Показать больше')
  const [historyItems, setHistoryItems] = useState([
    {
      name: "Перчатки",
      cost: "1679",
      quantity: 1,
      date: {
        day: '28',
        month: '07',
        year: '2023',
      },
      id: 0
    },
    {
      name: "Зимняя куртка",
      cost: "13790",
      quantity: 1,
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
      quantity: 1,
      date: {
        day: '06',
        month: '07',
        year: '2023',
      },
      id: 2
    },
    {
      name: "Шарф",
      cost: "780",
      quantity: 1,
      date: {
        day: '02',
        month: '07',
        year: '2023',
      },
      id: 3
    },
    {
      name: "Футболка",
      cost: "1830",
      quantity: 1,
      date: {
        day: '24',
        month: '06',
        year: '2023',
      },
      id: 4
    },
  ])

  const addHistoryItem = (newItem) => {
    const newDate = {
      newYear: newItem[3].split('-')[0],
      newMonth: newItem[3].split('-')[1],
      newDay: newItem[3].split('-')[2],
    }

    let newId = historyItems.length
    for (let idx = 0; idx < historyItems.length; idx++) {
      const el = historyItems[idx]
      // if (newDate.newYear >= el.date.year && newDate.newMonth >= el.date.month && newDate.newDay >= el.date.day) {
      //   newId = idx
      //   break
      // }
      if (newDate.newYear < el.date.year) {
        newId = idx
        break
      } else if (newDate.newMonth < el.date.month) {
        newId = idx
        break
      } else if (newDate.newDay <= el.date.day) {
        newId = idx
        break
      }
    } 

    setHistoryItems([
      ...historyItems.filter((_, idx)=>{
        return idx < newId
      }),

      {
        name: newItem[0].charAt(0).toUpperCase() + newItem[0].slice(1),
        costOfAPart: newItem[1],
        quantity: Number(newItem[2]),
        cost: newItem[1]*newItem[2],
        date: 
        {
          year: newDate.newYear,
          month: newDate.newMonth,
          day: newDate.newDay,
        },
        id: newId
      }, 

      ...historyItems
      .filter((_, idx)=>{
        return idx >= newId
      })
      .map((el)=>{
        el.id = el.id+1
        return el
      })
    ])
  }

  const removeHishtoryItem = (idToRemove) => {
    setHistoryItems(historyItems
    .filter((item)=>{
      return item.id !== idToRemove
    })
    .map((item) => {
      if (item.id > idToRemove) {
        item.id -= 1
      }
      return item
    }))
  }

  const getDateNow = () => {
    const currDate = new Date()
    return `${currDate.toDateString().split(' ')[3]}-${currDate.getMonth().toString().length<2 ? `0${currDate.getMonth()+1}` : currDate.getMonth()+1}-${currDate.toDateString().split(' ')[2].length<2 ? `0${currDate.toDateString().split(' ')[2]}` : currDate.toDateString().split(' ')[2]}`
  }

  return (
    <div className='main-page'>
      <div className="container"> 
        <Nav setPageToRender={setPageToRender} />
        <InfoPanel 
          historyItems={historyItems} 
          getDateNow={getDateNow} 
          setNumberOfItemsToShow={setNumberOfItemsToShow} 
          setPaginationText={setPaginationText} 
          setPageToRender={setPageToRender}
        />
        <Forms addHistoryItem={addHistoryItem} getDateNow={getDateNow}/>
        <History 
          historyItems={historyItems} 
          getDateNow={getDateNow} 
          removeHishtoryItem={removeHishtoryItem} 
          numberOfItemsToShow={numberOfItemsToShow} 
          setNumberOfItemsToShow={setNumberOfItemsToShow} 
          paginationText={paginationText} 
          setPaginationText={setPaginationText}
        />
      </div>
    </div>
  );
}

export default MainPage;
