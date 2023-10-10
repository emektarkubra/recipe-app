import { useState } from "react";
import { useContext } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { axiosMealPlanApi } from "../axios/axiosMealPlanApi";
import SiteContext from "../context";

export default function DailyMeals() {
  const { handleGetRecipe } = useContext(SiteContext)
  const [mealPlan, setMealPlan] = useState([]);
  const [count, setCount] = useState(0);

  const days = ["sunday", "monday", "tuesday", "wednesday", "thursday", "friday", "saturday"]
  const currentDate = new Date();
  const currentDayOfWeek = currentDate.getDay();

  useEffect(() => {
    async function getData() {
      const response = await axiosMealPlanApi.get("/");
      const data = await response?.data.week;
      const currentDayRecipes = data[Object.keys(data)[currentDayOfWeek]];
      setMealPlan(currentDayRecipes);
    }
    getData();
  }, []);


  return (
    <div className="py-20">
      <h1 className="bg-gray-200 w-[25%] text-center text-[2.3vw] mt-6 mx-auto p-2">Today's Recipes</h1>

      <h1 className="text-center text-lg m-7">{days[currentDayOfWeek].toLocaleUpperCase()}</h1>
      <div className="border-2 flex justify-content-between items-center w-[50%] m-auto py-5 mb-5">
        <a
          className="m-2 text-2xl font-bold"
          onClick={() => count > 1 && setCount((prev) => prev - 1)}
          href={`#recipe-${count}`}>
          <button>{`<`}</button>
        </a>
        <div className="w-[100%] flex justfiy-content-between overflow-hidden">
          {mealPlan?.meals?.map((meal, index) => (
            <Link
              to={`/recipes/${meal.id}`}
              onClick={() => handleGetRecipe(meal.id)}
              id={`recipe-${index + 1}`}
              key={index}
              className=" flex flex-col justify-content-between w-[100%] min-w-[100%] object-cover min-h-[100px]">
              <img
                className="w-[100%] rounded m-auto"
                src={`https://spoonacular.com/recipeImages/${meal.id}-556x370.jpg`}
                alt=""
              />
              <h2 className="text-center mt-4">{meal.title}</h2>
            </Link>
          ))}
        </div>
        <a
          className="m-2 text-2xl font-bold"
          onClick={() => count < 3 && setCount((prev) => prev + 1)}
          href={`#recipe-${count}`}>
          <button>{`>`}</button>
        </a>
      </div>
      <p className="text-[1vw] text-gray-500 text-center mb-20">If you don't like the recipes, just refresh the page to see new recipes..</p>
    </div>
  );
}
