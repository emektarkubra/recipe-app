import { useContext } from "react";
import { Link } from "react-router-dom";
import SiteContext from "../context";
import Summary from "./Summary";

export default function RecipeCard({ recipes }) {
  const { handleGetRecipe } = useContext(SiteContext)

  return (
    <>
      {recipes?.map((recipe) => (
        <Link key={recipe.id} to={`/recipes/${recipe.id}`} onClick={() => handleGetRecipe(recipe.id, recipe.image)} className=" border-t-[1px] flex justify-center m-4 p-5 w-[70rem] font-['nyt-cheltenham,georgia,'times new roman',times,serif']">
          <div className="w-full">
            <h5 className="card-title text-3xl m-4">{`‘${recipe.title}’`}</h5>
            <Summary id={recipe.id} />
          </div>
          {recipe.image && <img src={recipe.image} className="w-56" alt="..." />}
        </Link>

      ))}

    </>
  );
}
