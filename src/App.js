import './App.css';
import Home from './components/Home/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import Login from './components/Login/Login';

import Error from './components/Error/Error';
import Destination from './components/Destination/Destination';


function App() {
  return (
    <Router>
      <Switch>

        <Route path="/home">
          <Home></Home>
        </Route>

        <Route path="/login">
          <Login></Login>
        </Route>
        <Route path="/destination">
         <Destination></Destination>
        </Route>

        <Route path="/type/:type">
        <Destination></Destination>
        </Route>

        <Route exact path="/">
          <Home></Home>
        </Route>

        <Route path="*">
          <Error></Error>
        </Route>

      </Switch>
    </Router>
  );
}

export default App;
