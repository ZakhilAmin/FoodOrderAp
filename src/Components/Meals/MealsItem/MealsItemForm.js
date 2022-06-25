import Input from "../../UI/Input";
import classess from "./MealsItemForm.module.css";

const MealsItemForm = (props) => {
  return (
    <form className={classess.form}>
      <Input
        label="Amount"
        input={{
          id: "Amount" + props.id,
          type: "number",
          min: "1",
          max: "5",
          step: "1",
          defaultValue: "1",
        }}
      />
      <button>+ Add</button>
    </form>
  );
};

export default MealsItemForm;
