import classess from "./Cart.module.css";

const Cart = (props) => {
  return <div className={classess.card}>{props.children}</div>;
};
export default Cart;
