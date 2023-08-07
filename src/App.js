import Budget from "./components/Budget";
import Remaining from "./components/Remaining";
import { Provider } from "./context/AppContext";

function App() {
  return (
    <Provider>
      <div className="container">
        <div className="row">
          <div className="col">
            <h1 className="display-1 fw-bold">Company's Budget Allocation</h1>
          </div>
        </div>
        <div className="row">
          <Budget />
          <Remaining />
        </div>
      </div>
    </Provider>
  );
}

export default App;
