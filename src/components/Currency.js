import { useContext } from "react";
import { Context, currencies } from "../context/AppContext";

export const Currency = () => {
  const { currency, dispatch } = useContext(Context);

  const submitCurrency = (crrncy) => {
    let currency = JSON.parse(crrncy)

    dispatch({
      type: "CHG_CRRNCY",
      payload: currency,
    });
  };

  return (
    <div className="col">
      <div className="input-group mt-2">
        <label
          className="input-group-text bg-secondary bg-opacity-25 fw-bold border border-secondary"
          style={{"--bs-border-opacity": .25}}
          htmlFor="select-currency"
        >
          Currency: 
        </label>
        <select
          className="form-select bg-secondary bg-opacity-25 py-3 border border-secondary"
          style={{"--bs-border-opacity": .25}}
          id="select-currency"
          onChange={(e)=> submitCurrency(e.target.value)}
        >
          {currencies.map((item) => {
            return (
              <option 
              value={JSON.stringify(item)}
              selected={item.name === currency.name ? true : false}>
                {item.symbol} {item.name}
              </option>
            );
          })}
        </select>
      </div>
    </div>
  );
};

export default Currency;
