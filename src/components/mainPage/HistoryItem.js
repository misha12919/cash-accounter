export const HistoryItem = ({item, idx, numberOfItemsToShow, filter, removeHishtoryItem}) => {
  const width = `${110 + ((item.cost.toString().length - 5) > 0 ? (item.cost.toString().length - 5)*10 : 0)}px`
  const dateString = Object.keys(item.date).reverse().map(key => item.date[key]).join('-')
  const filterDate = {
    year: Number(filter.date.value.split('-')[0]),
    month: Number(filter.date.value.split('-')[1]),
    day: Number(filter.date.value.split('-')[2]),
  }
  const itemDate = {
    year: Number(item.date.year),
    month: Number(item.date.month),
    day: Number(item.date.day)
  }
  
  let renderComponent = false

  // if (item.name.toLowerCase().includes(filter[0].toLowerCase()) && 
  // (Object.keys(item.date).reverse().map(key => item.date[key]).join('-') === filter[1][0] || filter[1][1] === 'unchanged') && 
  // numberOfItemsToShow > idx) {

  if (numberOfItemsToShow > idx &&
  item.name.toLowerCase().includes(filter.words.toLowerCase())) {

    if (filter.date.changed === 'unchanged' || filter.date.value === dateString) {
      renderComponent = true
      
    } else if (filter.date.direction === 'after') {
      if (itemDate.year > filterDate.year) {
        renderComponent = true
      } else if (itemDate.year === filterDate.year) {
        if (itemDate.month > filterDate.month) {
          renderComponent = true
        } else if (itemDate.month === filterDate.month) {
          if (itemDate.day > filterDate.day) {
            renderComponent = true
          }
        }
      }
  
    } else if (filter.date.direction === 'before') {
      if (itemDate.year < filterDate.year) {
        renderComponent = true
      } else if (itemDate.year === filterDate.year) {
        if (itemDate.month < filterDate.month) {
          renderComponent = true
        } else if (itemDate.month === filterDate.month) {
          if (itemDate.day < filterDate.day) {
            renderComponent = true
          }
        }
      }
    }
  }
  // (filter.date.direction === 'after' && 
  // itemDate.year >= filterDate.year && itemDate.month >= filterDate.month && itemDate.day >= filterDate.day) || 
  // (filter.date.direction === 'before' && 
  // filterDate.year >= itemDate.year && filterDate.month >= itemDate.month && filterDate.day >= itemDate.day)))}
  if (renderComponent) {
    return (
      <div className="history__item" key={item.id}>
        <div className="history__item__name">
          <div className="history__item__icon" onClick={()=>{removeHishtoryItem(item.id)}}>
            <svg viewBox="0 0 22 22" xmlns="http://www.w3.org/2000/svg">
                <path height='30px' d="M18 6L17.1991 18.0129C17.129 19.065 17.0939 19.5911 16.8667 19.99C16.6666 20.3412 16.3648 20.6235 16.0011 20.7998C15.588 21 15.0607 21 14.0062 21H9.99377C8.93927 21 8.41202 21 7.99889 20.7998C7.63517 20.6235 7.33339 20.3412 7.13332 19.99C6.90607 19.5911 6.871 19.065 6.80086 18.0129L6 6M4 6H20M16 6L15.7294 5.18807C15.4671 4.40125 15.3359 4.00784 15.0927 3.71698C14.8779 3.46013 14.6021 3.26132 14.2905 3.13878C13.9376 3 13.523 3 12.6936 3H11.3064C10.477 3 10.0624 3 9.70951 3.13878C9.39792 3.26132 9.12208 3.46013 8.90729 3.71698C8.66405 4.00784 8.53292 4.40125 8.27064 5.18807L8 6M14 10V17M10 10V17" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
          {item.name}
        </div>
        <div className="history__item__details">

          <div className="history__item__details__date" style={{width: width}}>{`${item.date.day}.${item.date.month}.${item.date.year}`}</div>
          <div className="history__item__details__cost" style={{width: width}}>{`${item.cost} руб.`}</div>
          <div className="history__item__details__quantity" style={{width: width}}>{item.quantity === 1 ? `x1` : `x${item.quantity} по ${item.costOfAPart} руб.`}</div>
        </div>
      </div>
    )
  } else {
    return null
  }
}