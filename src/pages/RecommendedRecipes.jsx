import { useState } from "react";
import { useEffect } from "react";
import { axiosRecipeApi } from "../axios";
import RecipeCard from "../components/RecipeCard";

export default function RecomendedRecipes({ values }) {
  const [recommendedRecipes, setRecommendedRecipes] = useState();

  useEffect(() => {
    // edited ingredient path
    const arr = [];
    values?.map((value) => arr.push(`${value},+`));
    const str = arr.join("");
    const ingredients = str.slice(0, str.length - 2);

    const fetchDataFromApi = async () => {
      try {
        const response = await axiosRecipeApi.get(
          `/findByIngredients?ingredients=${ingredients}&number=5`
        );
        setRecommendedRecipes(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataFromApi();
  }, [values]);

  return (
    <div className="flex flex-col items-center">
      {values.length > 0 ? (
        <>
          <h1 className="text-3xl m-5 p-5">RECOMMENDED RECIPES</h1>
          <RecipeCard recipes={recommendedRecipes} />
        </>
      ) : (
        <h1 className="text-3xl m-5 p-5">Not Found Recommended Recipes</h1>
      )}
    </div>
  );
}
