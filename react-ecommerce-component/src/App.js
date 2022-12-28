import './App.css';
import MenuItem from './components/MenuItem/MenuItem';
import FrenchFries from './assets/plate__french-fries.png';
import SalmanPlate from "./assets/plate__salmon-vegetables.png";

function App() {
  return (
    <div className="App">      
      <section id="menu">
        <h1>To Go Menu</h1>
        <MenuItem pic={FrenchFries} foodTitle="French Fries with Ketchup" foodPrice="$2.23" />
        <MenuItem pic={SalmanPlate} foodTitle="Salmon and Vegetables" foodPrice="$5.12" />
      </section>
      <section id="cart">
        <h1>Your Cart</h1>
      </section>
    </div>
  );
}

export default App;
