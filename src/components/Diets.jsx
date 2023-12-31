import { useState, useEffect, useContext } from "react";
import { axiosRecipeApi } from "../axios";
import SiteContext from "../context";
import { BsHeart, BsBookmark, BsBookmarkFill } from "react-icons/bs";

export default function Diets() {
  const { recipeId, handleAddFavorites, favoritesRecipes } = useContext(SiteContext);
  const [infoDatas, setInfoDatas] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axiosRecipeApi.get(`/${recipeId}/information`);
      const data = await response?.data;
      setInfoDatas(data);
    }
    getData();
  }, [recipeId]);
  return (
    <>
      <div className="m-auto flex flex-col items-center w-5/6">
        <div className="border-t-[1px] border-b-[1px] p-8 text-gray-800 m-10 text-[#121212] font-extralight w-4/5">
          <h1 className="py-4 text-[2.5rem] tracking-wider leading-[3.125rem]">{`‘${infoDatas?.title}’`}</h1>
          <div className="flex flex-wrap justify-center py-5">
            <div className="text-[1.2rem]" dangerouslySetInnerHTML={{ __html: infoDatas?.summary }}></div>
          </div>
          <div className="w-4/5 flex text-2xl text-black ">
            <button onClick={() => handleAddFavorites(recipeId)} className="flex justify-center items-center border-[1px] border-gray-200 w-14 h-14 p-2 rounded-full hover:bg-gray-200 m-2">
              {
                favoritesRecipes?.find(item => item.id === recipeId) ? <BsBookmarkFill /> : <BsBookmark />
              }
            </button>
          </div>
        </div>
        <img src={infoDatas?.image} alt="" className="w-4/5" />
        <div className="flex flex-wrap justify-center">
          <div className="flex justify-between p-3">
            {infoDatas?.diets?.map((item, index) => (
              <div key={index} className="bg-gray-200 m-2 p-2 rounded">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
