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
      <div className="border-2 m-auto flex flex-col w-5/6">
        <h2 className="text-3xl p-8">Price Breakdown</h2>
        <div className="flex flex-col justify-center p-8">
          <div>{`Cost per Serving: $${price?.totalCostPerServing}`}</div>
          <table className="border-2 ">
            <thead className="border-2">
              <tr className="border-2">
                <th className="border-2">Ingredient</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {price?.ingredients?.map((item) => (
                <tr key={item.id}>
                  <td className="border-2">{`${item.amount.us.value} ${item.amount.us.unit} ${item.name}`}</td>
                  <td>{`$${item.price}`}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}
