import { View } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const Dummy_Expenses = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 99.99,
    date: new Date("2022-10-11"),
  },
  {
    id: "e2",
    description: "A shirt",
    amount: 15.99,
    date: new Date("2022-10-21"),
  },
  {
    id: "e3",
    description: "Apple",
    amount: 6.99,
    date: new Date("2022-11-05"),
  },
  {
    id: "e4",
    description: "A book",
    amount: 20.99,
    date: new Date("2022-11-16"),
  },
  {
    id: "e5",
    description: "A pair of pants",
    amount: 40.75,
    date: new Date("2022-12-13"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary periodName={expensesPeriod} expenses={Dummy_Expenses} />
      <ExpensesList expenses={Dummy_Expenses} />
    </View>
  );
}

export default ExpensesOutput;
