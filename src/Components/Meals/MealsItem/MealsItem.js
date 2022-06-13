import classess from "./MealsItem.module.css";
import MealsItemForm from "./MealsItemForm";

const MealsItem = (props) => {
  const price = `$${props.price.toFixed(2)}`;
  return (
    <li className={classess.meal}>
      <div>
        <h3>{props.name}</h3>
        <div className={classess.description}>{props.description}</div>
        <div className={classess.price}>{price}</div>
      </div>
      <div>
        <MealsItemForm />
      </div>
    </li>
  );
};

export default MealsItem;
