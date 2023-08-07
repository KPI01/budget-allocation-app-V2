import { useContext } from "react";
import { Context } from "../context/AppContext";

export const TotalSpent = () => {
    const {expenses, currency} = useContext(Context);

    let totalSpent = expenses.reduce((total, item)=> {
        return total += item.cost;
    },0)

    return (
        <div className="col">
            <div className="alert alert-danger h-100 d-flex align-items-center">
                Total Spent: <strong className="ms-1">{currency.symbol}</strong>{totalSpent}
            </div>
        </div>
    )
}

export default TotalSpent;