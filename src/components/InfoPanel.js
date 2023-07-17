

export const InfoPanel = () => {
  return (
    <div className="info-panel">
      <div className="info-panel__title">Общая информация:</div>
      <div className="info-panel__items">
        <div className="info-panel__item">
          <div className="info-panel__item__title">Расходы за месяц</div>
          <div className="info-panel__item__text">31582 руб.</div>
        </div>
        <div className="info-panel__item">
          <div className="info-panel__item__title">Средние расходы за месяц</div>
          <div className="info-panel__item__text">30627 руб.</div>
        </div>
        <div className="info-panel__item">
          <div className="info-panel__item__title">Доходы за месяц</div>
          <div className="info-panel__item__text">35714 руб.</div>
        </div>
      </div>
    </div>
  )
}

// Расходы за месяц
// 31582 руб.
// Доходы за месяц
// 35714 руб.
// Средние расходы за месяц
// 30627 руб.