import { useState, useEffect, useContext } from "react";
import { axiosRecipeApi } from "../axios";
import SiteContext from "../context";
import RecipeCard from "./RecipeCard";

export default function SimilarRecipes() {
  const { recipeId } = useContext(SiteContext);
  const [similarRecipes, setSimilarRecipes] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axiosRecipeApi.get(`/${recipeId}/similar`);
      const data = await response?.data;
      setSimilarRecipes(data);
    }
    getData();
  }, [recipeId]);
  return (
    <>
      <div className="border-2 border-blue-800 font-serif text-left">
        <h2 className="text-3xl m-10">Related Recipes</h2>
        <div className="flex flex-wrap justify-between p-5">
          {similarRecipes?.map((recipe) => (
            <div key={recipe.id}>
              <RecipeCard recipes={similarRecipes} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
