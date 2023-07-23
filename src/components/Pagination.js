
export const Pagination = ({numberOfItemsToShow, setNumberOfItemsToShow, historyItems}) => {
  if (numberOfItemsToShow < historyItems.length) {
    return <div className="history__items__pagination-button" onClick={()=>{setNumberOfItemsToShow(prev => prev+5)}}>Показать больше</div>
  }
}