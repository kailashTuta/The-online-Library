import './App.css';
import Home from './components/Home'
import Services from './components/Services'
import Signup from './components/Signup'
import Login from './components/Login'
import Logout from './components/Logout'
import Library from './components/Library'
import AdminDashboard from './components/AdminDashboard'
import UserDashboard from './components/UserDashboard';
import IssuedBooks from './components/IssuedBooks'
import BookDetails from './components/BookDetails'
import UserBooks from './components/UserBooks'
import AdminBooks from './components/AdminBooks'
import BookSection from './components/BookSection'
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

          <Route path="/issued-books">
            <IssuedBooks/>
          </Route>

          <Route path="/user-books">
            <UserBooks/>
          </Route>

          <Route path="/admin-books">
            <AdminBooks/>
          </Route>

          <Route path="/books/:id">
            <BookDetails />
          </Route>

          <Route path="/book-section">
            <BookSection />
          </Route>

        </Switch>

      </div>
    </Router>
  );
}
export default App;

