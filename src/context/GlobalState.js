import React, { createContext, useReducer } from "react";
import AppReducer from "./AppReducer";

const initialState = {
  transactions: [
    { id: 1, text: "salary", amount: 200000, date: "8/13/2020, 3:19:03 PM" },
    { id: 2, text: "food", amount: -60000, date: "8/14/2020, 11:19:26 AM" },
    { id: 3, text: "rent", amount: -35000, date: "8/17/2020, 1:19:51 PM" },
    { id: 4, text: "Transport", amount: -30000, date: "8/19/2020, 2:19:01 PM" },
    { id: 5, text: "Internet", amount: -20000, date: "8/20/2020, 4:37:07 PM" },
  ],
};

export const GlobalContext = createContext(initialState);

export const GlobalProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  function deleteTransaction(id) {
    dispatch({
      type: "DELETE_TRANSACTION",
      payload: id,
    });
  }

  function addTransactions(transaction) {
    dispatch({
      type: "ADD_TRANSACTION",
      payload: transaction,
    });
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransactions,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
