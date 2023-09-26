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
      <div className="border-2 m-auto flex flex-col w-5/6">
        <h2 className="text-3xl p-8">Nutritional Information</h2>
        <div className="flex flex-wrap px-8">
          <ul>
            <li>{`${nutritionInfo?.calories} Calories`}</li>
            <li>{`${nutritionInfo?.protein} Protein`}</li>
            <li>{`${nutritionInfo?.fat} Total Fat`}</li>
            <li>{`${nutritionInfo?.carbs} Carbs`}</li>
            {nutritionInfo?.properties.map((item) => (
              <>
                <li>{`${item.amount} ${item.unit}${item.name}`}</li>
              </>
            ))}
          </ul>
        </div>
        <h2 className="text-3xl p-8">Limit these</h2>
        <div className="flex flex-wrap px-8">
          <table>
            {nutritionInfo?.bad.map((item) => (
              <>
                <tbody>
                  <tr>
                    <td>{`${item.title}`}</td>
                    <td>{`${item.amount}`}</td>
                  </tr>
                </tbody>
              </>
            ))}
          </table>
        </div>
        <h2 className="text-3xl p-8">Get Enough Of These</h2>
        <div className="flex flex-wrap px-8">
          <table>
            {nutritionInfo?.good.map((item) => (

              <tbody key={item.id}>
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
