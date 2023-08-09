import { Nav } from "./components/mainPage/Nav";
import './css/monthsPage.css'

export const MonthsPage = ({setPageToRender}) => {

  

  return (
    <div className='months-page'>
      <Nav setPageToRender={setPageToRender} />
      <div className='graph'>
        <div className='graph__title'>Траты в месяцах</div>
        <div className='graph__legend-title--money'>Количество</div>
        <div className='graph__legend-value--money'></div>
        <div className='graph__legend-title--months'>Месяц</div>
        <div className='graph__legend-value--months'></div>
        <div className='graph__columns'></div>
      </div>
    </div>
  )
}