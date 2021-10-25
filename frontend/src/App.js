import './App.css';
import Footer from './components/Footer';
import { NavabarComp } from './components/NavabarComp'


function App() {
  return (
    <div className="App">
      <NavabarComp />
      <div className="content">
        This is the content.
      </div>
      <Footer />
    </div>
  );
}

export default App;
