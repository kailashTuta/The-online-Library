import './App.css';
import NavabarComp from './components/NavabarComp'
import Home from './components/Home'
import Services from './components/Services'
import Signup from './components/Signup'
import Login from './components/Login'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <NavabarComp />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/services">
            <Services />
          </Route>

          <Route path="/signup">
            <Signup />
          </Route>

          <Route path="/login">
            <Login />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}

export default App;
