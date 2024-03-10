//import logo from './logo.svg';
//import './App.css';

import { BrowserRouter as Router} from "react-router-dom";
import MainNavBar from "./main/MainNavBar";
import AdminNavBar from "./admin/AdminNavBar";
import EmpNavBar from "./employee/EmpNavBar";

function App() {
  return (
    <div >
      <br/>
      <Router>
        <EmpNavBar/>
        {/* <AdminNavBar/> */}
        {/* <MainNavBar/> */}
      </Router>
      
    </div>
  );
}

export default App;
