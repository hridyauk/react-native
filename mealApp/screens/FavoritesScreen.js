import { useContext } from "react";
import { StyleSheet, Text, View } from "react-native";
import { FavoritesContext } from "../store/context/favorites-context";
import { MEALS } from "../data/sample-data";
import MealsList from "../components/MealsList/MealsList";

function FavoritesScreen() {
  const favMealsCtx = useContext(FavoritesContext);

  const favMeals = MEALS.filter((meal) => favMealsCtx.ids.includes(meal.id));
  // console.log("fav meal: ", favMeals);

  if (favMeals.length === 0) {
    return (
      <View style={styles.rootContainer}>
        <Text style={styles.textStyle}>You have no favorites yet</Text>
      </View>
    );
  }

  return <MealsList items={favMeals} />;
}

export default FavoritesScreen;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 18,
    fontWeight: "bold",
    color: "white",
  },
});
