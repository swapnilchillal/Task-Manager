import { useState } from 'react';
import {Link} from 'react-router-dom'
const WeekDays = () => {

  const weekDays = ["monday","tuesday","wednesday","thursday","friday","saturday","sunday" ]
  const [days] = useState(weekDays);

  return <div id="List" style={{ display: "flex", justifyContent: "center" }}>
          {days.map(val => <button key={val} type="button" id="subText" style={{marginLeft:'10px'}}><Link to={`/${val}`}> {val}</Link></button>)}
          </div>
};
export default WeekDays;
