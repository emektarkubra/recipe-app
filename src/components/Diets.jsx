import { useState, useEffect, useContext } from "react";
import { axiosRecipeApi } from "../axios";
import SiteContext from "../context";
import { BsHeart, BsBookmark } from "react-icons/bs";

export default function Diets() {
  const { recipeId } = useContext(SiteContext);
  const [infoDatas, setInfoDatas] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axiosRecipeApi.get(`/${recipeId}/information`);
      const data = await response?.data;
      console.log(data)
      setInfoDatas(data);
    }
    getData();
  }, [recipeId]);
  return (
    <>
      <div className="border-2 m-auto flex flex-col items-center w-5/6">
        <div className="border-t-[1px] border-b-[1px] p-8 text-gray-800 m-10 text-[#121212] font-extralight w-4/5">

          <h1 className="py-4 text-[2.5rem] tracking-wider leading-[3.125rem]">{`‘${infoDatas?.title}’`}</h1>
          <div className="flex flex-wrap justify-center py-5">
            <div dangerouslySetInnerHTML={{ __html: infoDatas?.summary }}></div>
          </div>
          <div className="w-4/5 flex text-2xl text-black ">
            <button className="flex justify-center items-center border-[1px] border-gray-200 w-14 h-14 p-2 rounded-full hover:bg-gray-200 m-2"><BsHeart /></button>
            <button className="flex justify-center items-center border-[1px] border-gray-200 w-14 h-14 p-2 rounded-full hover:bg-gray-200 m-2"><BsBookmark /></button>
          </div>
        </div>
        <img src={infoDatas?.image} alt="" className="border-2 w-4/5" />
        <div className="flex flex-wrap justify-center">
          <div>
            {infoDatas?.diets?.map((item) => (
              <div key={item.id} className="bg-gray-200 p-2 rounded">{item}</div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
