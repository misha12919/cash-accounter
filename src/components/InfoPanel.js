

export const InfoPanel = ({historyItems, getDateNow}) => {

  let countMoneySpendInADay = 0
  let countMoneySpendInAMonth = 0

  const countAmountOfMoneySpent = () => {
    const [currDay, currMonth, currYear] = [Number(getDateNow().slice(-2)), Number(getDateNow().slice(-5, -3)), Number(getDateNow().slice(0,4))].map((el) => {
      return Number(el)
    })
    for (let index = 0; index < historyItems.length; index++) {
      const [itemDay, itemMonth, itemYear] = [historyItems[index].date.day, historyItems[index].date.month, historyItems[index].date.year].map((el) => {
        return Number(el)
      })
      if (currYear === itemYear) {

        if (currMonth === itemMonth) {
          countMoneySpendInAMonth += Number(historyItems[index].cost)

          if (currDay === itemDay) {
            countMoneySpendInADay += Number(historyItems[index].cost)
          }
        } else {break}
      } else {break}
  }
}

  countAmountOfMoneySpent()

  return (
    <div className="info-panel">
      <div className="info-panel__title">Общая информация:</div>
      <div className="info-panel__items">
        <div className="info-panel__item">
          <div className="info-panel__item__title">Расходы за сегодня</div>
          <div className="info-panel__item__text">{countMoneySpendInADay + ' руб.'}</div>
        </div>
        <div className="info-panel__item">
          <div className="info-panel__item__title">Расходы за месяц</div>
          <div className="info-panel__item__text">{countMoneySpendInAMonth + ' руб.'}</div>
        </div>
        <div className="info-panel__item">
          <div className="info-panel__item__title">Средние расходы за месяц</div>
          <div className="info-panel__item__text">30627 руб.</div>
        </div>
      </div>
    </div>
  )
}