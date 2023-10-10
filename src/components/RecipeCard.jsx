import { useContext } from "react";
import { Link } from "react-router-dom";
import SiteContext from "../context";
import Summary from "./Summary";
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";

export default function RecipeCard({ recipes }) {
  const { handleGetRecipe, handleAddFavorites, favoritesRecipes } = useContext(SiteContext);

  return (
    <>
      {recipes?.map((recipe) => (

        <div key={recipe.id} className="border-2 flex flex-col justify-between items-start w-[24%] min-w-[200px] m-1 p-4">
          {recipe.image && (
            <img src={recipe.image} className="w-[100%] rounded" alt="..." />
          )}
          <Link
            to={`/recipes/${recipe.id}`}
            onClick={() => handleGetRecipe(recipe.id)}
            className="">
            <div className="w-full">
              <h5 className="card-title text-lg m-3 hover:text-red-800 hover:underline">{`‘${recipe.title}’`}</h5>
              <Summary id={recipe.id} />
            </div>
          </Link>
          <button
            onClick={() => handleAddFavorites(recipe.id)}
            className="flex justify-center items-center hover:bg-gray-200 mx-4">
            {
              favoritesRecipes?.find(item => item.id === recipe.id) ? <BsBookmarkFill /> : <BsBookmark />
            }

          </button>
        </div>

      ))}
    </>
  );
}
