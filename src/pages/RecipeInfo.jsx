import Diets from "../components/Diets";
import Equipments from "../components/Equipments";
import Ingredients from "../components/Ingredients";
import Instructions from "../components/Instructions";
import Nutrition from "../components/Nutrition";
import Price from "../components/Price";
import SimilarRecipes from "../components/SimilarRecipes";

export default function RecipeInfo() {
  return (
    <div className="border-2 m-10 flex flex-col mx-auto w-4/6">
      <Diets />
      <Ingredients />
      <Equipments />
      <Instructions />
      <Price />
      <Nutrition />
      <SimilarRecipes />
    </div>
  );
}
