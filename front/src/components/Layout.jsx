import "../App.css";
import WeekDays from "./WeekDays";
// import AddTask from "./AddTask";
import { Outlet } from "react-router-dom";
const Layout = () => {
    return (
        <div className="App">
      <header className="App-header">
        <div> <b style={{fontSize:'40px'}}>Welcome to Todo-App</b></div>
          <WeekDays  />
      {/* <div style={{ display: "flex", justifyContent: "center" }}><AddTask /></div> */}<br/>
      <Outlet/>
      </header>
    </div>
    );
}

export default Layout;