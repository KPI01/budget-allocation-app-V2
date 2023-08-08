import { useContext, useState } from "react";
import { Context } from "../context/AppContext";

export const AllocationForm = () => {
  const { currency, expenses, dispatch } = useContext(Context);
  const [department, setDepartment] = useState("");
  const [allocationAction, setAllocationAction] = useState("");
  const [allocationQty, setAllocationQty] = useState("");

  console.log("Department selected:", department);
  console.log("Action selected:", allocationAction);
  console.log("Amount to add: ", allocationQty);

  const submitAllocation = (id, action, qty) => {
    if (id === "") {
      alert("You must select a department");
      return false;
    } else if (action === "") {
      alert("You must select an action to allocation");
      return false;
    } else if (qty === "" || qty === 0) {
      alert("You must enter a value different from cero or non-empty");
      return false;
    } else {
      let tx = {
        id: parseInt(id),
        cost: parseInt(qty),
      };

      dispatch({
        type: action,
        payload: tx,
      });
    }
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-4">
          <div className="input-group">
            <label className="input-group-text" htmlFor="selectDepartment">
              Department:
            </label>
            <select
              className="form-select"
              id="selectDepartment"
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option value="" selected>
                Choose...
              </option>
              {expenses.map((item) => {
                return <option value={item.id}>{item.name}</option>;
              })}
            </select>
          </div>
        </div>
        <div className="col">
          <div className="input-group">
            <label className="input-group-text" htmlFor="selectAction">
              Allocation
            </label>
            <select
              className="form-select"
              id="selectAction"
              disabled={department === "" ? true : false}
              onChange={(e) => setAllocationAction(e.target.value)}
            >
              <option value="" selected>
                Choose...
              </option>
              <option value="ADD_EXP">Add</option>
              <option value="RED_EXP">Reduce</option>
            </select>
          </div>
        </div>
        <div className="col">
          <div className="input-group">
            <span className="input-group-text">{currency.symbol}</span>
            <input
              type="number"
              className="form-control"
              disabled={allocationAction === "" ? true : false}
              step={10}
              onChange={(e) => setAllocationQty(e.target.value)}
            />
          </div>
        </div>
        <div className="col">
          <button
            className="btn btn-primary"
            onClick={(e) =>
              submitAllocation(department, allocationAction, allocationQty)
            }
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationForm;
