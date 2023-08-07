import { useContext } from "react";
import { Context } from "../context/AppContext";

export const ExpenseItem = (props) => {
  const { currency, expenses, dispatch } = useContext(Context);

  const addExpense = (id, qty) => {
    let tx = {
        id: id,
        cost: qty
    }

    dispatch({
        type: "ADD",
        payload: tx
    })
  };

  const redExpense = (id, qty) => {
    let tx = {
        id: id,
        cost: qty
    }

    dispatch({
        type: "RED",
        payload: tx
    })
  };

  return (
    <tr className="text-center">
      <th scope="row">{props.id}</th>
      <td className="text-start">{props.name}</td>
      <td>
        {currency.symbol}
        {props.cost}
      </td>
      <td>
        <button onClick={addExpense(props.id, 10)}>+</button>
        <button onClick={redExpense(props.id, 10)}>+</button>
      </td>
      <td>-</td>
    </tr>
  );
};

export default ExpenseItem;
