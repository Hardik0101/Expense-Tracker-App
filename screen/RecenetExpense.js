import { View, Text, StyleSheet } from "react-native";
import ExpensesOutput from "../components/ExpensesOutput/ExpensesOutput";

function RecenetExpense() {
  return (
    <View>
      <ExpensesOutput expensesPeriod="Last 7 Days" />
    </View>
  );
}

export default RecenetExpense;

const styles = StyleSheet.create({});
