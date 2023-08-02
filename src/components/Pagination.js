
export const Pagination = ({numberOfItemsToShow, setNumberOfItemsToShow, historyItems, paginationText, setPaginationText}) => {
  if (numberOfItemsToShow < historyItems.length) {
    return <div className="history__items__pagination-button" onClick={()=>{
      setNumberOfItemsToShow(prev => prev+5)
      setPaginationText('Показать больше')
    }}>{paginationText}</div>
  }
}