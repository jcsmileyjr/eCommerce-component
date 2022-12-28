import './App.css';
import MenuItem from './components/MenuItem/MenuItem';
import FrenchFries from './assets/plate__french-fries.png';
import SalmanPlate from "./assets/plate__salmon-vegetables.png";
import BaconEggs from './assets/plate__bacon-eggs.png';
import ChickenSalad from './assets/plate__chicken-salad.png';
import Ravioli from './assets/plate__ravioli.png'
import Spaghetti from './assets/plate__spaghetti-meat-sauce.png';
import Tortellini from './assets/plate__tortellini.png';

function App() {
  return (
    <div className="App">      
      <section id="menu">
        <h1>To Go Menu</h1>
        <MenuItem pic={FrenchFries} foodTitle="French Fries with Ketchup" foodPrice="$2.23" bgColor="lightBlue" isInCart={false} />
        <MenuItem pic={SalmanPlate} foodTitle="Salmon and Vegetables" foodPrice="$5.12" bgColor="lightPink" isInCart={true} />
        <MenuItem pic={BaconEggs} foodTitle="Bacon and Eggs All-Star Breakfast" foodPrice="$3.39" bgColor="lightBlue" isInCart={false} />
        <MenuItem pic={ChickenSalad} foodTitle="Chrunchy Chicken Salad" foodPrice="$4.50" bgColor="lightPink" isInCart={true} />
        <MenuItem pic={Spaghetti} foodTitle="Hot Spaghetti and Meat Sauce" foodPrice="$4.15" bgColor="lightBlue" isInCart={false} />
        <MenuItem pic={Ravioli} foodTitle="Delicous Meaty Ravioli" foodPrice="$6.25" bgColor="lightPink" isInCart={true} />
        <MenuItem pic={Tortellini} foodTitle="Fried Tortellini" foodPrice="$7.00" bgColor="lightBlue" isInCart={false} />
      </section>
      <section id="cart">
        <h1>Your Cart</h1>
      </section>
    </div>
  );
}

export default App;
