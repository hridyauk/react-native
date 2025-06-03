import { createContext, useReducer } from "react";

const Dummy_Expenses = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 99.99,
    date: new Date("2024-10-11"),
  },
  {
    id: "e2",
    description: "A shirt",
    amount: 15.99,
    date: new Date("2024-10-21"),
  },
  {
    id: "e3",
    description: "Apple",
    amount: 6.99,
    date: new Date("2025-5-29"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 20.99,
    date: new Date("2025-1-16"),
  },
  {
    id: "e5",
    description: "A pair of pants",
    amount: 40.75,
    date: new Date("2024-12-13"),
  },
];

export const ExpensesContext = createContext({
  expenses: [],
  addExpense: ({ description, amount, date }) => {},
  deleteExpense: (id) => {},
  updateExpense: (id, { description, amount, date }) => {},
});

function expensesReducer(state, action) {
  switch (action.type) {
    case "ADD":
      const id = new Date().getUTCDate().toString() + Math.random().toString();
      return [{ ...action.payload, id: id }, ...state];
    case "UPDATE":
      const updateExpenseIndex = state.findIndex((expense) => expense.id === action.payload.id);
      const updateExpense = state[updateExpenseIndex];
      const updatedItem = { ...updateExpense, ...action.payload.data };
      const updatedExpenses = [...state];
      updatedExpenses[updateExpenseIndex] = updatedItem;
      return updatedExpenses;
    case "DELETE":
      return state.filter((expense) => expense.id !== action.payload);
    default:
      return state;
  }
}

function ExpensesContextProvider({ children }) {
  const [expensesState, dispatch] = useReducer(expensesReducer, Dummy_Expenses);

  function addExpense(expenseData) {
    dispatch({ type: "ADD", payload: expenseData });
  }

  function deleteExpense(id) {
    dispatch({ type: "DELETE", payload: id });
  }

  function updateExpense(id, expenseData) {
    dispatch({ type: "UPDATE", payload: { id: id, data: expenseData } });
  }

  const value = {
    expenses: expensesState,
    addExpense: addExpense,
    deleteExpense: deleteExpense,
    updateExpense: updateExpense,
  };

  return <ExpensesContext.Provider value={value}>{children}</ExpensesContext.Provider>;
}

export default ExpensesContextProvider;
