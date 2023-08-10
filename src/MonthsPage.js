import { useState } from "react";
import { Nav } from "./components/mainPage/Nav";
import './css/monthsPage.css'

export const MonthsPage = ({setPageToRender, moneySpentInAMonths}) => {

  const [shiftIndex, setShiftIndex] = useState(0)
  const columnsToShow = Math.floor(9-(1400 - document.documentElement.clientWidth-150)/130)
  console.log(document.documentElement.clientWidth);
  console.log(columnsToShow);
  const maxMonthValue = Math.max.apply(null, Object.values(moneySpentInAMonths.months))
  const roundedMaxMonthValue = Math.ceil(maxMonthValue / 10 ** (maxMonthValue.toString().length-1)) * 10 ** (maxMonthValue.toString().length-1);
  

  return (
    <div className='months-page'>
      <Nav setPageToRender={setPageToRender} />
      <div className='graph'>
        <div className='graph__title'>Траты в месяцах</div>
        <div className='graph__legend-money-title'>Количество</div>
        <div className='graph__legend-money-value'>
          {[0,1,2,3,4].map((_, idx) => {
            const value = roundedMaxMonthValue - (idx * roundedMaxMonthValue/5)
            if (value.toString().length <= 3) {
              return (
                <div key={idx} className='graph__legend-money-value__item'>{value}</div>
              )
            } else {
              return (
                <div key={idx} className='graph__legend-money-value__item'>
                  {(roundedMaxMonthValue - (idx * roundedMaxMonthValue/5))/1000}k
                </div>
              )
            }
              
          })}
          <div className='graph__legend-money-value__item'>0</div>
        </div>
        <div className='graph__legend-months-title'>Месяц {moneySpentInAMonths.year} года</div>
        <div className='graph__legend-months-value'>
          {Object.keys(moneySpentInAMonths.months).map((el, idx) => {
            if (idx >= shiftIndex) {
              return (
                <div key={idx} className='graph__legend-months-value__item'>{el}</div>
              )
            } else return null
          })}
        </div>
        <div className='graph__columns'>
          {Object.keys(moneySpentInAMonths.months).map((el, idx) => {
            if (idx >= shiftIndex) {
              return (
                <div 
                  key={idx} 
                  className='graph__columns__item' 
                  style={{ height: `${moneySpentInAMonths.months[el] / roundedMaxMonthValue * 400}px` }}
                >
                  <div className='graph__columns__item__value'>{moneySpentInAMonths.months[el]}</div>
                </div>
              )
            } else return null
          })}
        </div>
      </div>
    </div>
  )
}