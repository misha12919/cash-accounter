

export const InfoPanel = ({historyItems, getDateNow, setNumberOfItemsToShow, setPaginationText, setPageToRender}) => {

  const countAmountOfMoneySpent = () => {
    const [currDay, currMonth, currYear] = [Number(getDateNow().slice(-2)), Number(getDateNow().slice(-5, -3)), Number(getDateNow().slice(0,4))].map((el) => {
      return Number(el)
    })
    let countMoneySpendInADay = 0
    const monthsList = {}
    let averageMoneySpendInAMonths = 0
    for (let index = 0; index < historyItems.length; index++) {
      const [itemDay, itemMonth, itemYear] = [historyItems[index].date.day, historyItems[index].date.month, historyItems[index].date.year].map((el) => {
        return Number(el)
      })

      if (currYear === itemYear && currMonth === itemMonth && currDay === itemDay) {
        countMoneySpendInADay += Number(historyItems[index].cost)
      }

      const itemDateId = `${itemYear}.${itemMonth}`
      if (!Object.keys(monthsList).includes(itemDateId)) {
        monthsList[itemDateId] = Number(historyItems[index].cost)
      } else {
        monthsList[itemDateId] += Number(historyItems[index].cost)
      }
    }
    Object.keys(monthsList).forEach(key => {
      averageMoneySpendInAMonths += monthsList[key]
    });  

    return [countMoneySpendInADay, 
      monthsList[`${getDateNow().slice(0,4)}.${Number(getDateNow().slice(5,7))}`] ? monthsList[`${getDateNow().slice(0,4)}.${Number(getDateNow().slice(5,7))}`] : 0, 
      Math.round(averageMoneySpendInAMonths/Object.keys(monthsList).length)]
  }

  return (
    <div className="info-panel" id='info-panel'>
      <div className="info-panel__title">Общая информация:</div>
      <div className="info-panel__items">
        
        <a 
          className="info-panel__item info-panel__item--today" 
          href="#history" 
          onClick={()=>{
            let count = 0
            for (let i = 0; i < historyItems.length; i++) {
              if ([historyItems[i].date.year, historyItems[i].date.month, historyItems[i].date.day].join('-') === getDateNow()) {
                count += 1
              }
            }
            setNumberOfItemsToShow(count)
            setPaginationText('Показать историю других дат')
          }}>
          <div className="info-panel__item__title">Расходы за сегодня</div>
          <div className="info-panel__item__text">{countAmountOfMoneySpent()[0] + ' руб.'}</div>
        </a>

        <div className="info-panel__item" onClick={()=>{setPageToRender('monthsPage')}}>
          <div className="info-panel__item__title">Расходы за месяц</div>
          <div className="info-panel__item__text">{countAmountOfMoneySpent()[1] + ' руб.'}</div>
        </div>

        <div className="info-panel__item" onClick={()=>{setPageToRender('monthsPage')}}>
          <div className="info-panel__item__title">Средние расходы за месяц</div>
          <div className="info-panel__item__text">{countAmountOfMoneySpent()[2] + ' руб.'}</div>
        </div>
        
      </div>
    </div>
  )
}