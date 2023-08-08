import { useEffect } from "react";
import { Provider } from "./context/AppContext";
import Budget from "./components/Budget";
import Currency from "./components/Currency";
import Remaining from "./components/Remaining";
import TotalSpent from "./components/TotalSpent";
import ExpenseList from "./components/ExpenseList";
import AllocationForm from "./components/AllocationForm";

function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  });
  return (
    <Provider>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="display-1 fw-bold">Company's Budget Allocation</h1>
          </div>
        </div>
        <div className="row mt-3 g-5">
          <Budget />
          <Remaining />
          <TotalSpent />
          <Currency />
        </div>
        <div className="row mt-5">
          <ExpenseList />
        </div>
        <div className="row mt-3">
          <h2 className="display-6">Change allocation</h2>
          <AllocationForm />
        </div>
      </div>
    </Provider>
  );
}

export default App;
