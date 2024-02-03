import { View, FlatList, StyleSheet, Text } from "react-native";
import ExpensesSummary from "./ExpensesSummary";
import ExpensesList from "./ExpensesList";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    description: "A pair of shoes",
    amount: 59.89,
    date: new Date("2024-02-03"),
  },
  {
    id: "e2",
    description: "A pair of Apple",
    amount: 29.34,
    date: new Date("2024-03-10"),
  },
  {
    id: "e3",
    description: "A pair of Banana",
    amount: 5.49,
    date: new Date("2024-01-27"),
  },
  {
    id: "e4",
    description: "A pair of Book",
    amount: 30.42,
    date: new Date("2024-05-15"),
  },
  {
    id: "e5",
    description: "A pair of Glass",
    amount: 23.5,
    date: new Date("2024-08-22"),
  },
];

function ExpensesOutput({ expenses, expensesPeriod }) {
  return (
    <View>
      <ExpensesSummary expenses={DUMMY_EXPENSES} periodName={expensesPeriod} />
      <ExpensesList expenses={DUMMY_EXPENSES} />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({});
