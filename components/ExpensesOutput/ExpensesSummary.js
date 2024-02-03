import { View, FlatList, StyleSheet, Text } from "react-native";

function ExpensesSummary({ children, style }) {
  return (
    <View>
      <Text>{children}</Text>
    </View>
  );
}

export default ExpensesSummary;

const styles = StyleSheet.create({});
