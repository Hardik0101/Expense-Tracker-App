import { View, FlatList, StyleSheet, Text } from "react-native";

function ExpensesOutput() {
  return (
    <View>
      <View>
        <Text> Last 7 day</Text>
        <Text>$177.95</Text>
      </View>
      <FlatList />
    </View>
  );
}

export default ExpensesOutput;

const styles = StyleSheet.create({});
