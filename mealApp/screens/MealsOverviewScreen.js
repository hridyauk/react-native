import { useRoute } from "@react-navigation/native";
import { CATEGORIES, MEALS } from "../data/sample-data";
import { useLayoutEffect } from "react";
import MealsList from "../components/MealsList/MealsList";

function MealsOverviewScreen({ navigation }) {
  //   const categoryId = route.params.categoryId;

  //   alternative method
  const route = useRoute();
  const categoryId = route.params.categoryId;

  const displayedMeals = MEALS.filter((meal) => {
    return meal.categoryIds.includes(categoryId) ? meal : null;
  });

  //   console.log("meals: ", displayedMeals);

  useLayoutEffect(() => {
    const categoryTitle = CATEGORIES.find(
      (category) => category.id === categoryId
    ).title;

    navigation.setOptions({
      title: categoryTitle,
    });
  }, [categoryId, navigation]);

  return <MealsList items={displayedMeals} />;
}

export default MealsOverviewScreen;
