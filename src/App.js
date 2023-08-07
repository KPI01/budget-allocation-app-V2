import { useEffect } from "react";
import Budget from "./components/Budget";
import Currency from "./components/Currency";
import Remaining from "./components/Remaining";
import TotalSpent from "./components/TotalSpent";
import { Provider } from "./context/AppContext";

function App() {
  useEffect(() => {
    require("bootstrap/dist/js/bootstrap.min.js");
  });
  return (
    <Provider>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="display-1 fw-bold mb-5">Company's Budget Allocation</h1>
          </div>
        </div>
        <div className="row">
          <Budget />
          <Remaining />
          <TotalSpent />
          <Currency />
        </div>
      </div>
    </Provider>
  );
}

export default App;
