import React, { useContext } from "react";
import { GlobalContext } from "../context/GlobalState";

export const Transaction = (props) => {
  const { deleteTransaction } = useContext(GlobalContext);

  return (
    <div>
      <li>Date: {props.transaction.date}</li>
      <li className={props.transaction.amount < 0 ? "minus" : "plus"}>
        {props.transaction.text}{" "}
        <span>RWF {Math.abs(props.transaction.amount)}</span>{" "}
        <button
          onClick={() => deleteTransaction(props.transaction.id)}
          className="delete-btn"
        >
          <small>Delete</small>
        </button>
      </li>
    </div>
  );
};
