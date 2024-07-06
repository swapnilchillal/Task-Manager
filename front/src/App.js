import EachDayTask from "./components/EachDayTask";
import Layout from "./components/Layout";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditTask from "./components/EditTask";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/:day" element={<EachDayTask />} />
          <Route path="/edit" element={<EditTask />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
