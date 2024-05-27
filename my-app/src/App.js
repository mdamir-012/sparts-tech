import './App.css';
import Navbar from './Components/Navbar';
import Academics from './Components/Academics';
import Cards from './Components/Cards';
import Footer from './Components/Footer';
import TopHero from './Components/TopHero';

function App() {
  return (
    <div className="App">
      <Navbar/>
      <TopHero/>
      <Academics/>
      <Cards/>
      <Footer/>
    </div>
  );
}

export default App;
