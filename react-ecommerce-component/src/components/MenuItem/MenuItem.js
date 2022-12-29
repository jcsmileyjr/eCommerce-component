import "./menuItem.css";
import CheckIcon from '../../assets/check.svg';

const MenuItem = ({pic, foodTitle, foodPrice, isInCart, bgColor, action}) => {
  return (
    <div className={`menuItem--container ${bgColor}`} onClick={action}>
      <img src={pic} className="menuItem__image--style" alt="" />
      <div className="menuItem__details--container">
        <p className="menuItem__foodTitle--style">{foodTitle}</p>
        <p className="menuItem__foodPrice--style">{foodPrice}</p>
        <div className={`menuItem__inCart--container ${isInCart?"show":"hide"}`}>
            <img src={CheckIcon} alt="" className="menuItem__check--style" />
            <p>In Cart</p>
        </div>
      </div>
    </div>
  );
};

export default MenuItem;
