import './App.css';
import FirstPage from './Views/FirstPage'
import UserProfile from './Components/UserProfile'
import TableList from  './Components/TableList'
import Typography from './Components/Typography'
import Icons from './Components/Icons'
import Maps from './Components/Maps'
import Notifications from './Components/Notifications'
import RTLSupport from './Components/RTLSupport'
import UpgradeToPRO from './Components/UpgradeToPRO'
import CreateSearchbox  from './Searchbox/CreateSearchbox'
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";



function App() {
  return (
    <div className="App">
      
      <Router>
        <Switch>
          <Route exact path='/' component={FirstPage}></Route>
          {/* <Route exact path='/Dashboard' component={Dashboard}></Route> */}
          <Route exact path='/UserProfile' component={UserProfile}></Route>
          <Route exact path='/TableList' component={TableList}></Route>
          <Route exact path='/Typography' component={Typography}></Route>
          <Route exact path='/Icons' component={Icons}></Route>
          <Route exact path='/Maps' component={Maps}></Route>
          <Route exact path='/Notifications' component={Notifications}></Route>
          <Route exact path='/RTLSupport' component={RTLSupport}></Route>
          <Route exact path='/UpgradeToPRO' component={UpgradeToPRO}></Route>


        </Switch>
      </Router>

      {/* <CreateSearchbox/> */}
   
    </div>
  );
}

export default App;

