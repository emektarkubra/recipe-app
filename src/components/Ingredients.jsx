import { useState, useEffect, useContext } from "react";
import { axiosRecipeApi } from "../axios";
import SiteContext from "../context";
import GetIngredientsImages from "./GetIngredientsImages";

export default function Ingredients() {
  const { recipeId } = useContext(SiteContext);
  const [ingredients, setIngredients] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axiosRecipeApi.get(`/${recipeId}/ingredientWidget.json`);
      const data = await response?.data;
      setIngredients(data?.ingredients);
    }
    getData();
  }, [recipeId]);
  return (
    <>
      <div className="border-2 font-serif m-auto w-5/6 p-8">
        <h2 className="border-2 text-3xl p-8">Ingredients</h2>
        <div className="flex flex-wrap">
          {ingredients?.map((ingredient) => (
            <div key={ingredient.id} className="w-40 m-5 mx-10 flex flex-col">
              <GetIngredientsImages path={ingredient.image} />
              <div className="text-center">
                <span>{`${ingredient?.amount.metric.value} ${ingredient?.amount.metric.unit} ${ingredient?.name}`}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

    </>
  )
}