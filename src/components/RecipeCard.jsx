import { useContext } from "react";
import { Link } from "react-router-dom";
import SiteContext from "../context";
import Summary from "./Summary";
import { BsBookmark, BsHeart } from "react-icons/bs";

export default function RecipeCard({ recipes }) {
  const { handleGetRecipe } = useContext(SiteContext)

  return (
    <>
      {recipes?.map((recipe) => (<>
        <div className="">

          <div className="w-[70rem] border-t-[1px] flex justify-center p-5 font-['nyt-cheltenham,georgia,'times new roman',times,serif']">
            <Link key={recipe.id} to={`/recipes/${recipe.id}`} onClick={() => handleGetRecipe(recipe.id)} className="">
              <div className="w-full">
                <h5 className="card-title text-3xl m-4 hover:text-red-800 hover:underline">{`‘${recipe.title}’`}</h5>
                <Summary id={recipe.id} />
              </div>
            </Link>
            {recipe.image && <img src={recipe.image} className="w-56" alt="..." />}
          </div>
          <div className="p-3">
            <div className="w-4/5 flex text-2xl text-black ">
              <button className="flex justify-center items-center border-[1px] border-gray-200 w-14 h-14 p-2 rounded-full hover:bg-gray-200 m-2"><BsHeart /></button>
              <button className="flex justify-center items-center border-[1px] border-gray-200 w-14 h-14 p-2 rounded-full hover:bg-gray-200 m-2"><BsBookmark /></button>
            </div>
            <button className="text-s px-2">149 likes</button>
          </div>
        </div>

      </>))}

    </>
  );
}
