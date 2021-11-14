import './App.css';
import Home from './components/Home'
import Services from './components/Services'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import Library from './components/Library'
import AdminDashboard from './components/AdminDashboard'
import UserDashboard from './components/UserDashboard';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        
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

        </Switch>

      </div>
    </Router>
  );
}
export default App;

