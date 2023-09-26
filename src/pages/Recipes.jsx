import { useState } from "react";
import { useEffect } from "react";
import { axiosRecipeApi } from "../axios";
import RecipeCard from "../components/RecipeCard";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axiosRecipeApi.get("/complexSearch");
      const recipes = await response?.data;
      setRecipes(recipes?.results);
      // console.log(recipes)
    }
    getData();
  }, []);
  return (
    <>
      <div className="flex justify-center font-serif m-10 ">
        <div className="w-[100rem]">
          <RecipeCard recipes={recipes} />
          <br />
        </div>
      </div>
    </>
  );
}
