import './App.css';
import NavabarComp from './components/NavabarComp'
import Home from './components/Home'
import Services from './components/Services'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import Library from './components/Library'
import AdminDashboard from './components/AdminDashboard'
import UserDashboard from './components/UserDashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createContext, useReducer } from 'react';
import { initialState, reducer } from './reducer/UseReducer';

export const UserContext = createContext()

const Routing = () => {
  return (<Switch>

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

    <Route path="/library">
      <Library />
    </Route>

    <Route path="/logout">
      <Logout />
    </Route>

    <Route path="/admin-dashboard">
      <AdminDashboard />
    </Route>

    <Route path="/user-dashboard">
      <UserDashboard />
    </Route>

  </Switch>)
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (

    <Router>
      <div className="App">
        <UserContext.Provider value={{ state, dispatch }}>
          <NavabarComp />
          <Routing />
        </UserContext.Provider>
      </div>
    </Router>
  );
}

export default App;

