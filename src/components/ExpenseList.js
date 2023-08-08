import { useContext } from "react";
import { Context } from "../context/AppContext";
import ExpenseItem from "./ExpenseItem";

export const ExpenseList = () => {
    const {expenses} =useContext(Context);

    return (
        <div className="col">
            <table className="table table-striped">
                <thead className="table-primary bg-opacity-50 border border-primary">
                    <tr className="text-center">
                        <th scope="col">#</th>
                        <th scope="col" className="text-start">Department</th>
                        <th scope="col">Allocated Budget</th>
                        <th scope="col">Increase by 10</th>
                        <th scope="col">Decrease by 10</th>
                        <th scope="col">Delete</th>
                    </tr>
                </thead>
                <tbody className="table-light">
                    {expenses.map((item)=> {
                        return <ExpenseItem id={item.id} name={item.name} cost={item.cost}/>
                    })}
                </tbody>
            </table>
        </div>
    )
}

export default ExpenseList;