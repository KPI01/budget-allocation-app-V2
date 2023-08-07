import { useContext } from "react";
import { Context } from "../context/AppContext";

export const Budget = () => {
  const { budget, currency, dispatch } = useContext(Context);

  const submitBudget = (budget) => {
    dispatch({
      type: "SET_BUDGET",
      payload: budget,
    });
  };

  return (
    <div className="col">
      <div className="alert alert-secondary d-flex align-items-center h-100">
        Budget: <strong className="ms-2">{currency.symbol}</strong>
        <input
          id="budget"
          className="form-control ms-1 bg-white bg-opacity-25 border-secondary border-1"
          style={{"--bs-border-opacity": .5}}
          type="number"
          onChange={(e) => submitBudget(e.target.value)}
          value={budget}
        />
      </div>
    </div>
  );
};

export default Budget;
