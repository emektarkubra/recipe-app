import { useState, useEffect, useContext } from "react";
import { axiosRecipeApi } from "../axios";
import SiteContext from "../context";

export default function Price() {
  const { recipeId } = useContext(SiteContext);
  const [price, setPrice] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axiosRecipeApi.get(
        `/${recipeId}/priceBreakdownWidget.json`
      );
      const data = await response?.data;
      setPrice(data);
    }
    getData();
  }, [recipeId]);
  return (
    <>
      <div className="font-serif m-auto w-5/6 px-8">
        <h2 className="text-3xl px-8">Price Breakdown</h2>
        <div className="flex flex-col justify-center p-8">
          <div className="bg-green-800 text-white my-4 p-3 w-[17rem] text-xl">{`Cost per Serving: $${price?.totalCostPerServing}`}</div>
          <table className="w-[30rem] border-collapse">
            <thead className="">
              <tr className="">
                <th className="text-left p-3">Ingredient</th>
                <th className="text-left p-3">Price</th>
              </tr>
            </thead>
            <tbody>
              {price?.ingredients?.map((item, index) => (
                <tr key={index}>
                  <td className="p-2">{`${item.amount.us.value} ${item.amount.us.unit} ${item.name}`}</td>
                  <td className="p-2">{`$${item.price}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
