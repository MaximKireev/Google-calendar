import { Link} from "react-router-dom";


export const CalendarHeader = () => {
  return(
    <header
  style = {{
    width: '100%',
    height: '50px',
    display: 'flex',
    alignItems: 'flex-end'
  }}>
      <Link to = '/month'>Month</Link>
      <Link to = '/day'>Day</Link>
  </header>
  )
}