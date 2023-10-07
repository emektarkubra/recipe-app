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
      <div className="font-serif m-auto w-5/6 p-8">
        <h2 className="text-3xl p-8">Ingredients</h2>
        <div className="m-auto flex flex-wrap">
          {ingredients?.map((ingredient, index) => (
            <div key={index} className="w-40 m-5 mx-1 flex flex-col">
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