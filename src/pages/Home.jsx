import { useState } from "react";
import { useEffect } from "react";
import { axiosRecipeApi } from "../axios";
import RecipeCard from "../components/RecipeCard";

export default function Home() {
  const [recipes, setRecipes] = useState([]);
  useEffect(() => {
    async function getData() {
      const response = await axiosRecipeApi.get("/complexSearch");
      const recipes = await response?.data;
      setRecipes(recipes?.results);
    }
    getData();
  }, []);
  return (
    <>
      <div className="font-serif m-10 ">
        <div className=" m-auto w-[30%] text-center my-14">
          <h1 className="text-3xl p-5 flex justify-center"> ALL RECIPES</h1>
          <input type="text" placeholder="Filter recipe.." className="border-2 w-[100%] rounded p-1" />
        </div>
        <div className="flex flex-wrap justify-between">
          <RecipeCard recipes={recipes} />
        </div>
      </div>
    </>
  );
}
