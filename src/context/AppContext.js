import { createContext, useReducer } from "react"

// 5. Reducer
export const Reducer = (state, action) => {
    switch (action.type) {
        default:
            return state;
    }
};

// 1. Initial state
export const initState = {
    budget: 1000,
    currency: {name: "Euro", symbol: "€"},
    expenses: [
        {id: 1, name: "Marketing", cost: 50},
        {id: 2, name: "Finance", cost: 300},
        {id: 3, name: "Sales", cost: 70},
        {id: 4, name: "Human Resource", cost: 40},
        {id: 5, name: "IT", cost: 500},
    ]
};

// 2. Creation of context
export const Context = createContext();

// 3. Provider component
export const Provider = (props) => {
    // 4. Set app state
    const [state, dispatch] = useReducer(Reducer, initState);
    let remaining = 0;

    if (state.expenses) {
        const totalSpent = state.expenses.reduce((total,item)=> {
            return total += item.cost;
        },0);
        remaining = state.budget - totalSpent;
    }


    return (
        <Context.Provider value={{
            budget: state.budget,
            remaining: remaining,
            currency: state.currency,
            expenses: state.expenses,
            dispatch,
        }} >{props.children}</Context.Provider>
    )
}