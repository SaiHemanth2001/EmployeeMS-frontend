import './App.css';
import {BrowserRouter as Router,Route,Routes} from "react-router-dom"
import HomePage from './components/HomePage';
import EmployeeLogin from './components/EmployeeLogin';
import ManagerLogin from './components/ManagerLogin';
import AdminLogin from './components/AdminLogin';
import EmployeeDetails from './components/EmployeeDetails';
import AdminControl from './components/AdminControl';
import ApplyLeave from './components/ApplyLeave';
import ManagerControl from './components/ManagerControl';
import Reject from './components/Reject';
import Approve from './components/Approve';
import AddEmployee from './components/AddEmployee';
import UpdateEmployee from './components/UpdateEmployee';
import Assign from './components/Assign';
import Done from './components/Done';
import InProgress from './components/InProgress';

function App() {
  return (
    <div className='right'>
      <Router>
    <div className="container">
     <Routes>
      <Route exact path='/' Component={HomePage}></Route>
      <Route exact path='/employee-login' Component={EmployeeLogin}></Route>
      <Route exact path='/manager-login' Component={ManagerLogin}></Route>
      <Route exact path='/admin-login' Component={AdminLogin}></Route>
      <Route exact path='/employee/:email' Component={EmployeeDetails}></Route>
      <Route exact path='/admin' Component={AdminControl}></Route>
      <Route exact path='/leave' Component={ApplyLeave}></Route> 
      <Route exact path='/manager/:manager' Component={ManagerControl}></Route>
      <Route exact path='/reject' Component={Reject}></Route> 
      <Route exact path='/approve' Component={Approve}></Route> 
      <Route exact path='/register-employee' Component={AddEmployee}></Route> 
      <Route exact path='/update/:emai' Component={UpdateEmployee}></Route> 
      <Route exact path='/assign' Component={Assign}></Route> 
      <Route exact path='/done' Component={Done}></Route> 
      <Route exact path='/inprogress' Component={InProgress}></Route> 
     </Routes>
    </div>
    </Router>
    </div>
  );
}

export default App;
