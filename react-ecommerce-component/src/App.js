import './App.css';
import MenuItem from './components/MenuItem/MenuItem';
import CartItem from './components/CartItem/CartItem';
import FrenchFries from './assets/plate__french-fries.png';
import SalmanPlate from "./assets/plate__salmon-vegetables.png";
import BaconEggs from './assets/plate__bacon-eggs.png';
import ChickenSalad from './assets/plate__chicken-salad.png';
import Ravioli from './assets/plate__ravioli.png'
import Spaghetti from './assets/plate__spaghetti-meat-sauce.png';
import Tortellini from './assets/plate__tortellini.png';
import React, {useState} from 'react'
import Plates from './data/plate.json'

/**
 * TODO: Create a data format state for food items
 * TODO: Create a cart array state
 * TODO: Function that when an menu item is click, the id is add to the cart state. 
 * If the id already exist, update number of items. Update the total amount displayed.
 * 
 */
function App() {
  const [menu, setMenu] = useState(Plates);
  const [cart, setCart] = useState([{"foodID":2, numberOfPlates:2}, {"foodID":4, numberOfPlates:3}]);

  /**
   * Function to add one plate meal type to the cart when the user click a menu item and update the 
   * menu's "In cart" notification.
   * @param {string} id 
   * TODO: When the menu's plate meal is clicked, add data to the cart state. 
   * TODO: User should see the "in cart" check on the menu.
   * TODO: User should see the plate meal in the cart with one item and the total equal to one item worth.
  */
  const addToCart = (id) => {
    setCart([...cart, {"foodID":id, numberOfPlates:1}]);
    setMenu(menu.map( (item) => {
      if(item.foodID === id){
        item.isInCart = true;
        return item;
      }else{
        return item;
      }
    }))
  }

  const plateImages = [FrenchFries, SalmanPlate, BaconEggs, ChickenSalad, Spaghetti, Ravioli, Tortellini];
  return (
    <div className="App">      
      <section id="menu">
        <h1>To Go Menu</h1>
        {
          menu.map((plate, id) => (
            <MenuItem action={() => addToCart(plate.foodID)} key={plate.foodID} pic={plateImages[id]} foodTitle={plate.foodTitle} foodPrice={plate.foodPrice} bgColor={plate.bgColor} isInCart={plate.isInCart} />
          ))
        }
      </section>
      <section id="cart">
        <h1>Your Cart</h1>
        {
          cart.map((item, id) => (
            <CartItem key={item.foodID} plateCount={item.numberOfPlates} pic={plateImages[item.foodID]} itemTitle={menu[item.foodID].foodTitle} itemPrice={menu[item.foodID].foodPrice} />
          ))
        }
      </section>
    </div>
  );
}

export default App;
