import {Routes,Route} from "react-router-dom"
import EditUser from './components/EditUser';
import AddUser from './components/AddUser';
import Home from './components/Home'

import './App.css';

const App = () =>
  <>
  <Routes>
  <Route path="/" Component={Home}/>
  <Route path="/adduser" Component={AddUser}/>
  <Route path="/edituser" Component={EditUser}/>
  </Routes>

  </>


export default App;
