import { createContext, useReducer } from "react";

// 5. Reducer
export const Reducer = (state, action) => {
  switch (action.type) {
    case "ADD_EXP":
      let totalSpent = state.expenses.reduce((total, item) => {
        return (total += item.cost);
      }, 0);
      totalSpent += action.payload.cost;

      action.type = "DONE";

      if (state.budget >= totalSpent) {
        totalSpent = 0;

        state.expenses.map((item) => {
          if (item.id === action.payload.id) {
            item.cost += action.payload.cost;
            console.log("Now ", item.name, " costs: ", item.cost);
          }
          return item;
        });

        return { ...state };
      } else {
        alert("The allocated budget cannot exceed the budget!");
        return { ...state };
      }

    case "RED_EXP":
      action.type = "DONE";

      state.expenses.map((item) => {
        if (item.id === action.payload.id) {
          if (item.cost - action.payload.cost < 0) {
            alert("Cannot reduce the allocated budget below 0");
            item.cost = 0;
          } else {
            item.cost -= action.payload.cost;
            console.log("Now ", item.name, " costs: ", item.cost);
          }
        }
        return item;
      });

      return { ...state };

    case "DEL_EXP":
      action.type = "DONE";

      state.expenses.map((item) => {
        if (item.id === action.payload) {
          item.cost = 0;
          console.log(
            "The allocated budget for",
            item.name,
            "has been deleted"
          );
        }
        return item;
      });

      return { ...state };

    case "SET_BUDGET":
      action.type = "DONE";

      if (action.payload <= 20000) {
        state.budget = action.payload;
        console.log("New budget is: ", state.budget);

        return { ...state };
      } else {
        alert("Budget cannot exceed " + state.currency.symbol + "20.000");
        return { ...state };
      }

    case "CHG_CRRNCY":
      action.type = "DONE";

      state.currency = action.payload;
      console.log(
        "New currency is: ",
        state.currency.symbol,
        state.currency.name
      );

      return { ...state };

    default:
      return state;
  }
};

// 1. Initial state
export const initState = {
  budget: 1000,
  currency: { name: "Euro", symbol: "€" },
  expenses: [
    { id: 1, name: "Marketing", cost: 50 },
    { id: 2, name: "Finance", cost: 300 },
    { id: 3, name: "Sales", cost: 70 },
    { id: 4, name: "Human Resource", cost: 40 },
    { id: 5, name: "IT", cost: 500 },
  ],
};

// Some currencies to select
export const currencies = [
  { name: "Dollar", symbol: "$" },
  { name: "Euro", symbol: "€" },
  { name: "Pound", symbol: "£" },
  { name: "Rupee", symbol: "₹" },
];

// 2. Creation of context
export const Context = createContext();

// 3. Provider component
export const Provider = (props) => {
  // 4. Set app state
  const [state, dispatch] = useReducer(Reducer, initState);
  let remaining = 0;

  if (state.expenses) {
    const totalSpent = state.expenses.reduce((total, item) => {
      return (total += item.cost);
    }, 0);

    if (state.budget - totalSpent >= 0) {
      remaining = state.budget - totalSpent;
    }
  }

  return (
    <Context.Provider
      value={{
        budget: state.budget,
        remaining: remaining,
        currency: state.currency,
        expenses: state.expenses,
        dispatch,
      }}
    >
      {props.children}
    </Context.Provider>
  );
};
