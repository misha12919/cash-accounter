import { useState } from "react"
import MainPage from "./MainPage"
import { MonthsPage } from "./MonthsPage"

const App = () => {
  const [pageToRender, setPageToRender] = useState('mainPage')
  const [moneySpentInAMonths, setMoneySpentInAMonths] = useState({year: '2023'})
  if (pageToRender === 'mainPage') {
    return (
      <MainPage setPageToRender={setPageToRender} 
      moneySpentInAMonths={moneySpentInAMonths}
      setMoneySpentInAMonths={setMoneySpentInAMonths} />
    )
  } else if (pageToRender === 'monthsPage') {
    return (
      <MonthsPage setPageToRender={setPageToRender}
      moneySpentInAMonths={moneySpentInAMonths} />
    )
  }
}

export default App