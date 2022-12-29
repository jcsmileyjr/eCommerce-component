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
// {"foodID":2, numberOfPlates:2}, {"foodID":4, numberOfPlates:3}

/**
 * TODO: Create a data format state for food items
 * TODO: Create a cart array state
 * TODO: Function that when an menu item is click, the id is add to the cart state. 
 * If the id already exist, update number of items. Update the total amount displayed.
 * 
 */
function App() {
  const [menu, setMenu] = useState(Plates);
  const [cart, setCart] = useState([]);

  /**
   * Function to add one plate meal type to the cart when the user click a menu item and update the 
   * menu's "In cart" notification.
   * @param {string} id - Id of menu item chosen by the  user
  */
  const addToCart = (id) => {
    const isFoodItemInCart = cart.find((foodItem) => foodItem.foodID === id);

    if(isFoodItemInCart !== undefined){
      setCart(cart.map((plate) => {
        if(plate.foodID === id){
          plate.numberOfPlates += 1;
          return plate;
        }else{
          return plate;
        }
      }))
    }else{
      // Add user's choice of plates to the cart
      setCart([...cart, {"foodID":id, numberOfPlates:1}]);
      
      // Update the menu "in cart" notification
      setMenu(menu.map( (item) => {
        if(item.foodID === id){
          item.isInCart = true;
          return item;
        }else{
          return item;
        }
      }))
    }
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
