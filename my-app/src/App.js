import './App.css';
import Navbar from './Components/Navbar';
import Academics from './Components/Academics';
import Header from './Components/Header';
import Cards from './Components/Cards';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <Header/>
      <Academics/>
      <Cards/>
    </div>
  );
}

export default App;
