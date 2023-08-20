import { useState } from "react";
import { Nav } from "./components/mainPage/Nav";
import './css/monthsPage.css'

export const MonthsPage = ({setPageToRender, moneySpentInAMonths}) => {

  const [shiftIndex, setShiftIndex] = useState(0)
  const columnsToShow = Math.floor(9-(1400 - document.documentElement.clientWidth)/130)
  const maxMonthValue = Math.max.apply(null, Object.values(moneySpentInAMonths.months))
  const roundedMaxMonthValue = Math.ceil(maxMonthValue / 10 ** (maxMonthValue.toString().length-1)) * 10 ** (maxMonthValue.toString().length-1);
  let columnsShown = 0
  let monthsShown = 0

  console.dir(moneySpentInAMonths)

  const updateShiftIndex = (direction) => {
    if (direction === 'increase' && Object.keys(moneySpentInAMonths.months).length >= columnsToShow + shiftIndex ) {
      setShiftIndex(prev => prev + 1)
    } else if (direction === 'decrease' && shiftIndex > 0) {
      setShiftIndex(prev => prev - 1)
    }

    // if (shiftIndex === 0) {
    //   document.querySelectorAll('.graph__inner__arrow')[0].classList.add('hidden')
    // } else {
    //   document.querySelectorAll('.graph__inner__arrow')[0].classList.remove('hidden')
    // }
    // console.log(Object.keys(moneySpentInAMonths.months).length, columnsToShow + shiftIndex+1)
    // if (Object.keys(moneySpentInAMonths.months).length < columnsToShow + shiftIndex+1) {
    //   document.querySelectorAll('.graph__inner__arrow')[1].classList.add('hidden')
    // } else {
    //   document.querySelectorAll('.graph__inner__arrow')[1].classList.remove('hidden')
    // }
  }
  console.dir(roundedMaxMonthValue)
  if (Object.values(moneySpentInAMonths.months).length === 0) {
    return (
      <div className='months-page'>
        <Nav setPageToRender={setPageToRender} />
        <div className='graph graph--empty'>
          <div className='graph__title no-select'>Траты в месяцах</div>
          <div className='graph__empry-text'>Добавьте трату, чтобы появился график</div>
        </div>
      </div>
    )
  } else {
    return (
      <div className='months-page'>
        {console.log(moneySpentInAMonths)}
        <Nav setPageToRender={setPageToRender} />
        <div className='graph'>
          <div className='graph__title no-select'>Траты в месяцах</div>
          <div className='graph__legend-money-title no-select'>Количество</div>
          <div className='graph__legend-money-value no-select'>
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
          <div className='graph__legend-months-title no-select'>Месяц {moneySpentInAMonths.year} года</div>
          <div className='graph__legend-months-value no-select'>
            {Object.keys(moneySpentInAMonths.months).map((el, idx) => {
              if (idx >= shiftIndex && monthsShown < columnsToShow-1) {
                monthsShown += 1
                return (
                  <div key={idx} className='graph__legend-months-value__item'>{el}</div>
                )
              } else return null
            })}
          </div>
          <div className='graph__inner'>
            <div className='graph__inner__arrow graph__inner__arrow--left' onClick={()=>{updateShiftIndex('decrease')}}>
              <svg viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg"  className="si-glyph si-glyph-triangle-right">
                  
                  <title>1234</title>
                  
                  <defs>
  
              </defs>
                  <g stroke="none" strokeWidth="1" fillRule="evenodd">
                      <path d="M6.113,15.495 C5.531,16.076 4.01,16.395 4.01,14.494 L4.01,1.506 C4.01,-0.333 5.531,-0.076 6.113,0.506 L12.557,6.948 C13.137,7.529 13.137,8.47 12.557,9.052 L6.113,15.495 L6.113,15.495 Z" className="si-glyph-fill">
  
              </path>
                  </g>
              </svg>
            </div>
            <div className='graph__inner__columns'>
              {Object.keys(moneySpentInAMonths.months).map((el, idx) => {
                if (idx >= shiftIndex && columnsShown < columnsToShow-1) {
                  columnsShown += 1
                  return (
                    <div 
                      key={idx} 
                      className='graph__inner__columns__item' 
                      style={{ height: `${moneySpentInAMonths.months[el] / roundedMaxMonthValue * 400}px` }}
                    >
                      <div className='graph__inner__columns__item__value no-select'>{moneySpentInAMonths.months[el]}</div>
                    </div>
                  )
                } else return null
              })}
            </div>
            <div className='graph__inner__arrow' onClick={()=>{updateShiftIndex('increase')}}>
              <svg viewBox="0 -0.5 17 17" version="1.1" xmlns="http://www.w3.org/2000/svg"  className="si-glyph si-glyph-triangle-right">
                  
                  <title>1234</title>
                  
                  <defs>
  
              </defs>
                  <g stroke="none" strokeWidth="1" fillRule="evenodd">
                      <path d="M6.113,15.495 C5.531,16.076 4.01,16.395 4.01,14.494 L4.01,1.506 C4.01,-0.333 5.531,-0.076 6.113,0.506 L12.557,6.948 C13.137,7.529 13.137,8.47 12.557,9.052 L6.113,15.495 L6.113,15.495 Z" className="si-glyph-fill">
  
              </path>
                  </g>
              </svg>
            </div>
          </div>
        </div>
      </div>
    )
  }
}