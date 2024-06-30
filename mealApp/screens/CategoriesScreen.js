import { CATEGORIES } from "../data/sample-data";
import { FlatList } from "react-native";
import CategoryGridTile from "../components/CategoryGridTile";

function renderCategory(itemData) {
  return <CategoryGridTile title={itemData.item.title} color={itemData.item.color} /> ;
}

function CategoriesScreen() {
  return (
    <>
      <FlatList
        data={CATEGORIES}
        keyExtractor={item => item.id}
        renderItem={renderCategory}
        horizontal={false}
        numColumns={2}
      />
    </>
  );
}

export default CategoriesScreen;
