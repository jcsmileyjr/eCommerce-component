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
 * React app that displays an menu of food plates that when clicked updates a cart.
 */
function App() {
  const [menu, setMenu] = useState(Plates);
  const [cart, setCart] = useState([]);
  const [showMobileCart, setShowMobileCart] = useState(true);

  /**
   * Function to remove a plate from the CartItem component
   * @param {number} id 
   */
  const removePlate = (id) => {
    // Update the CartItem's number of plates and if it's "0", remove the "in cart" notification
    setCart(cart.map((plate) => {
      if(plate.foodID === id){
        if(plate.numberOfPlates > 0){
          plate.numberOfPlates -= 1;
        }

        if(plate.numberOfPlates === 0){
          removeInCartNotification(id);
        }
        return plate;
      }else{
        return plate;
      }
    }))
    
    // Remove the CartItem plate when it's zero
    setCart(cart.filter((plate) => plate.numberOfPlates !== 0))
  }

  /**
   * Remove the "in cart" notification on the Menu item when the cart's plate count is zero
   * @param {number} id 
   */
  const removeInCartNotification = (id) => {
    setMenu(menu.map((item) => {
      if(item.foodID === id){
        item.isInCart = false;
        return item;
      }else{
        return item;
      }
    }))
  }

  /**
   * Function to add a plate to the cart
   * @param {string} id - Id of menu item 
   */
  const addPlate = (id) => {
    setCart(cart.map((plate) => {
      if(plate.foodID === id){
        plate.numberOfPlates += 1;
        return plate;
      }else{
        return plate;
      }
    }))
  }

  /**
   * Function to add one plate meal type to the cart when the user click a menu item and update the 
   * menu's "In cart" notification.
   * @param {string} id - Id of menu item chosen by the  user
  */
  const addToCart = (id) => {
    const isFoodItemInCart = cart.find((foodItem) => foodItem.foodID === id);

    // Check if the plate is already in the cart. If so, update the cart inventory. If not, add to the cart.
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

  /**
   * Function to show the cart in mobile view but only if the cart has items in it
   */
  const displayMobileCart = () => {
    if(cart.length > 0){
      setShowMobileCart(false);
    }
  }

  // Array of images to matched the plate lunch array indexes
  const plateImages = [FrenchFries, SalmanPlate, BaconEggs, ChickenSalad, Spaghetti, Ravioli, Tortellini];
  return (
    <div className="App">      
      <section id="menu" className={`${!showMobileCart?'hideUI':'showUI'}`}>
        <h1 className='desktop__header--style'>To Go Menu</h1>
        <div className='mobile__header--container'>
          <h1 onClick={()=> setShowMobileCart(true)}>To Go Menu</h1>
          <span></span>
          <h1 onClick={()=> displayMobileCart()}>Your Cart</h1>
        </div>
        {/**Displays the menu plates details and images */}
        {
          menu.map((plate, id) => (
            <MenuItem action={() => addToCart(plate.foodID)} key={plate.foodID} pic={plateImages[id]} foodTitle={plate.foodTitle} foodPrice={plate.foodPrice} bgColor={plate.bgColor} isInCart={plate.isInCart} />
          ))
        }
      </section>
      <section id="cart" className={`${showMobileCart?'hideUI':'showUI'}`}>
        {cart.length > 0 &&
          <div className='mobile__header--container'>
            <h1 onClick={()=> setShowMobileCart(true)}>To Go Menu</h1>
            <span></span>
            <h1 onClick={()=> displayMobileCart()}>Your Cart</h1>
          </div>
        }
        {/**Displays plate objects in the cart state */}
        {cart.length === 0 &&
          <h1>Your Cart is Empty</h1>

        }
        {
          cart.map((item, id) => (
            <CartItem removePlate={() => removePlate(item.foodID)} addPlate={()=> addPlate(item.foodID)} key={item.foodID} plateCount={item.numberOfPlates} pic={plateImages[item.foodID]} itemTitle={menu[item.foodID].foodTitle} itemPrice={menu[item.foodID].foodPrice} />
          ))
        }
      </section>
    </div>
  );
}

export default App;
