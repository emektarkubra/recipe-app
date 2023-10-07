import { useEffect, useState, useContext } from "react";
import { axiosRecipeApi } from "../axios";
import SiteContext from "../context";

export default function Nutrition() {
  const { recipeId } = useContext(SiteContext);
  const [nutritionInfo, setNutritionInfo] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axiosRecipeApi.get(
        `/${recipeId}/nutritionWidget.json`
      );
      const data = await response?.data;
      setNutritionInfo(data);
    }
    getData();
  }, [recipeId]);
  return (
    <>
      <div className="font-serif m-auto w-5/6 px-8">
        <h2 className="text-3xl p-8">Nutritional Information</h2>
        <div className="flex flex-col justify-center px-8">
          <ul className="text-lg">
            <li className="py-1">{`${nutritionInfo?.calories} Calories`}</li>
            <li className="py-1">{`${nutritionInfo?.protein} Protein`}</li>
            <li className="py-1">{`${nutritionInfo?.fat} Total Fat`}</li>
            <li className="py-1">{`${nutritionInfo?.carbs} Carbs`}</li>
            {nutritionInfo?.properties.map((item, index) => (<li key={index} className="py-1">{`${item.amount} ${item.unit}${item.name}`}</li>))}
          </ul>
        </div>
        <h2 className="text-3xl p-8">Limit these</h2>
        <div className="px-8">
          <table className="text-lg w-[15rem]">
            {nutritionInfo?.bad.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <td>{`${item.title}`}</td>
                  <td>{`${item.amount}`}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
        <h2 className="text-3xl p-8">Get Enough Of These</h2>
        <div className="p-8">
          <table className="text-lg w-[20rem]">
            {nutritionInfo?.good.map((item, index) => (
              <tbody key={index}>
                <tr>
                  <td>{`${item.title}`}</td>
                  <td>{`${item.amount}`}</td>
                </tr>
              </tbody>
            ))}
          </table>
        </div>
      </div>
    </>
  );
}
