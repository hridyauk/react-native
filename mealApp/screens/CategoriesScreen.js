import { CATEGORIES } from "../data/sample-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function CategoriesScreen({ navigation }) {
  function renderCategory(itemData) {
    function buttonHandler() {
      navigation.navigate("Meals", {
        categoryId: itemData.item.id,
      });
    }
    return (
      <CategoryGridTile
        title={itemData.item.title}
        color={itemData.item.color}
        onPressNavigate={buttonHandler}
      />
    );
  }

  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={(item) => item.id}
        renderItem={renderCategory}
        horizontal={false}
        numColumns={2}
      />
    </>
  );
}

export default CategoriesScreen;
