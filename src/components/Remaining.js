import { useContext } from "react";
import { Context } from "../context/AppContext";

export const Remaining = () => {
  const { budget, remaining, currency } = useContext(Context);

  return (
    <div className="col">
      <div className={"h-100 d-flex align-items-center alert " + (remaining / budget < 0.1 ? "alert-danger" : "alert-success")}>
        Remaining: <strong className="ms-1">{currency.symbol}</strong>{remaining}
      </div>
    </div>
  );
};

export default Remaining;
