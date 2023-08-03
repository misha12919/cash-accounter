import { Nav } from "./components/mainPage/Nav";
import './css/monthsPage.css'

export const MonthsPage = ({setPageToRender}) => {

  

  return (
    <div className='months-page'>
      <Nav setPageToRender={setPageToRender} />
        
    </div>
  )
}