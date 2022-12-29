import './cartItem.css';
import Arrow from '../../assets/chevron.svg';

const CartItem = ({pic, itemTitle, itemPrice, plateCount, addPlate}) => {
    return(
        <div className='cartItem--container'>
            <img src={pic} className="cartItem__pic--style" alt='' />
            <div className='cartItem__details--container'>
                <p>{itemTitle}</p>
                <p className='cartItem__price--style'>{itemPrice}</p>
                <div className='details--control-container'>
                    <div className='control--container'>
                        <span  className='control__arrow-container'><img src={Arrow} className="cartItem__arrow--style" alt="" /></span>
                        <span className='control__plateCount--style'>{plateCount}</span>
                        <span onClick={addPlate} className='control__arrow-container rightArrow'><img src={Arrow} className="cartItem__arrow--style" alt="" /></span>
                    </div>
                    <p className='details__totalPrice--style'>{itemPrice}</p>
                </div>
            </div>
        </div>
    )
}

export default CartItem;