import { useDispatch } from "react-redux";
import classes from "./CartButton.module.css";
import { quantActions } from "../../storage/storage";
import { useSelector } from "react-redux";
const CartButton = (props) => {
  const dispatch = useDispatch();
  const quantity = useSelector((state) => state.quant.quantity);
  const cardShowHandler = () => {
    dispatch(quantActions.cardShow());
  };
  return (
    <button className={classes.button} onClick={cardShowHandler}>
      <span>My Cart</span>
      <span className={classes.badge}>{quantity > 0 ? "1" : "0"}</span>
    </button>
  );
};

export default CartButton;
