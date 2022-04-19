import { Button  } from 'antd';
import { Link} from "react-router-dom";


export const ChangeCalendarView = () => {
    return(
        <div className="wrapper">
          <Button><Link to = '/month'>Month</Link></Button>
          <Button><Link to = '/day'>Day</Link></Button>
        </div>
    )
}