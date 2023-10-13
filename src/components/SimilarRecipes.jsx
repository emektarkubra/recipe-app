import { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import { axiosRecipeApi } from "../axios";
import SiteContext from "../context";
import GetSimilarRecipesImages from "./GetSimilarRecipesImage";
import Summary from "./Summary";
import { BsBookmark, BsBookmarkFill, BsHeart } from "react-icons/bs";


export default function SimilarRecipes() {
  const { recipeId, handleGetRecipe, handleAddFavorites, favoritesRecipes } = useContext(SiteContext);
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
      <div className="font-serif m-auto w-5/6 px-8">
        <h2 className="text-3xl px-8">Related Recipes</h2>
        <div className="flex flex-wrap justify-between py-8">
          {similarRecipes?.map((similarRecipe, index) => (<>
            <div key={index} className="border-2 my-1 p-5" >

              <Link to={`/recipes/${similarRecipe.id}`} onClick={() => handleGetRecipe(similarRecipe?.id)} className="" >
                <div className="w-[100%] flex justify-center font-['nyt-cheltenham,georgia,'times new roman',times,serif']">

                  <div className="w-full">
                    <h5 className="card-title text-3xl hover:text-red-800 hover:underline">{`‘${similarRecipe.title}’`}</h5>
                    <Summary id={similarRecipe.id} />
                  </div>
                  <GetSimilarRecipesImages recipeId={similarRecipe.id} />
                </div>
              </Link>
              <div className="px-3">
                <div className="w-4/5 flex text-2xl text-black ">
                  <button onClick={() => handleAddFavorites(similarRecipe.id)} className="flex justify-center items-center border-[1px] border-gray-200 w-14 h-14 p-2 rounded-full hover:bg-gray-200 mx-2">
                    {
                      favoritesRecipes?.find(item => item.id === similarRecipe.id) ? <BsBookmarkFill /> : <BsBookmark />
                    }
                  </button>
                </div>
              </div>

            </div>
          </>))}
        </div>




      </div>
    </>
  );
}
