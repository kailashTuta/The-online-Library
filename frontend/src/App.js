import './App.css';
import Footer from './components/Footer';
import NavabarComp from './components/NavabarComp'
import Home from './components/Home'


function App() {
  return (
    <div className="App">
      <NavabarComp />
      <div className="content">
        <Home />
      </div>
      <Footer />
    </div>
  );
}

export default App;
