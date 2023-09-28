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
      <div className="font-serif m-auto w-5/6 p-8">
        <h2 className="text-3xl px-8">Instructions</h2>
        <div className="m-auto flex flex-col flex-wrap py-8">
          {steps?.map((item) => (
            <div key={item?.id} className="flex m-3 px-8">
              <div className="font-bold">{`${item.number}-`}</div>
              <div>{item.step}</div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
