import { useState } from "react"
import MainPage from "./MainPage"
import { MonthsPage } from "./MonthsPage"

const App = () => {
  const [pageToRender, setPageToRender] = useState('mainPage')
  if (pageToRender === 'mainPage') {
    return (
      <MainPage setPageToRender={setPageToRender} />
    )
  } else if (pageToRender === 'monthsPage') {
    return (
      <MonthsPage setPageToRender={setPageToRender} />
    )
  }
}

export default App