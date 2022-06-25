import Modal from './../UI/Model';
import classess from "./Cart.module.css";


const Cart = (props) => {
  const cartItems = (
    <ul className={classess["cart-items"]}>
      {[{ id: "c1", name: "Suchi", amount: 2, price: 12.4 }].map((item) => (
        <li>{item.name}</li>
      ))}
    </ul>
  );

  return (
    <Modal>
      {cartItems}
      <div>
        <span>Total Amount</span>
        <span>35.4</span>
      </div>
      <div>
        <div className={classess.actions}>
          <button className={classess["button-alt"]}>Close</button>
          <button className={classess.button}>Order</button>
        </div>
      </div>
    </Modal>
  );
};

export default Cart;
