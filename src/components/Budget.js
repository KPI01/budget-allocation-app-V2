import { useContext } from "react";
import { Context } from "../context/AppContext";

export const Budget = () => {
  const { expenses, budget, currency, dispatch } = useContext(Context);

  const totalSpent = expenses.reduce((total, item) => {
    return (total += item.cost);
  }, 0);

  const submitBudget = (bdgt) => {
    if (bdgt - totalSpent < 0) {
      alert("The new budget cannot be less than what you have spent");
      return;
    } else {
      dispatch({
        type: "SET_BUDGET",
        payload: bdgt,
      });
    }
  };

  return (
    <div className="col">
      <div className="alert alert-primary d-flex align-items-center h-100">
        Budget: <strong className="ms-2">{currency.symbol}</strong>
        <input
          id="budget"
          className="form-control ms-1 bg-white bg-opacity-25 border-primary border-1"
          style={{ "--bs-border-opacity": 0.5 }}
          type="number"
          onChange={(e) => submitBudget(e.target.value)}
          value={budget}
        />
      </div>
    </div>
  );
};

export default Budget;
