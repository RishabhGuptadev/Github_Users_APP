import './App.css';
import Navbar  from './components/Navbar';
import SearchBar  from './components/SearchBar';
import GitContainer  from './components/GitContainer';
import UserInfo  from './components/UserInfo';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
function App() {
  return (

    <div className="App">
    <Router>
    <Switch>
    <Route exact path="/">
    <Navbar/>
    <SearchBar/>
    <GitContainer/>   
    </Route>
     
    <Route exact path ="/:login">
      <UserInfo/>
    </Route>

    </Switch>
   
    </Router>
    </div>
  );
}

export default App;
