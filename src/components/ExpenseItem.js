import { useContext } from "react";
import { Context } from "../context/AppContext";
import { BsXCircleFill, BsPlusCircleFill, BsFillDashCircleFill } from "react-icons/bs"

export const ExpenseItem = (props) => {
  const { currency, dispatch } = useContext(Context);

  const addExpense = (id, qty) => {
    let tx = {
        id: id,
        cost: qty
    }

    dispatch({
        type: "ADD_EXP",
        payload: tx
    })
  };

  const redExpense = (id, qty) => {
    let tx = {
        id: id,
        cost: qty
    }

    dispatch({
        type: "RED_EXP",
        payload: tx
    })
  };

  const delExpense = (id) => {
    dispatch({
      type: "DEL_EXP",
      payload: id
    })
  }

  return (
    <tr className="text-center">
      <th scope="row">{props.id}</th>
      <td className="text-start">{props.name}</td>
      <td>
        {currency.symbol}
        {props.cost}
      </td>
      <td>
        <button className="btn" onClick={(e)=> addExpense(props.id, 10)}><BsPlusCircleFill color="green" size={"3ch"}/></button>
      </td>
      <td>
        <button className="btn" onClick={(e)=> redExpense(props.id, 10)}><BsFillDashCircleFill color="red" size={"3ch"} /></button>
      </td>
      <td>
        <button className="btn" onClick={(e)=> delExpense(props.id, 10)}><BsXCircleFill size={"3ch"} /></button>
      </td>
    </tr>
  );
};

export default ExpenseItem;
