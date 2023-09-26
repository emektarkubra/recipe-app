import { useState, useContext, useEffect } from "react";
import { axiosRecipeApi } from "../axios";
import SiteContext from "../context";

export default function Instructions() {
  const { recipeId } = useContext(SiteContext);
  const [steps, setSteps] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axiosRecipeApi.get(
        `/${recipeId}/analyzedInstructions`
      );
      const data = await response?.data;
      setSteps(data[0].steps);
    }
    getData();
  }, [recipeId]);
  return (
    <>
      <div className="border-2 m-auto flex flex-col w-5/6">
        <h2 className="border-2 text-3xl p-8">INSTRUCTIONS</h2>
        <div className="flex flex-col">
          {steps?.map((item) => (
            <div key={item.id} className="flex m-3 px-8">
              <div className="font-bold">{`${item.number}-`}</div>
              <div>{item.step}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
