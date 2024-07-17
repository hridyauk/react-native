import { StyleSheet, Text, View } from "react-native";

function MealDetails({ duration, complexity, affordability, textStyle }) {
  return (
    <View style={styles.details}>
      <Text style={textStyle}>{duration}m</Text>
      <Text style={textStyle}>{complexity.toUpperCase()}</Text>
      <Text style={textStyle}>{affordability.toUpperCase()}</Text>
    </View>
  );
}

export default MealDetails;

const styles = StyleSheet.create({
  details: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    padding: 8,
    gap: 10,
  },
});
