import axios from "axios";

const VITE_RECIPE_API_KEY = import.meta.env.VITE_RECIPE_API_KEY

export const axiosMealPlanApi = axios.create({
    baseURL : "https://api.spoonacular.com/mealplanner/generate",
    headers : {
        "Content-Type": "application/json",
        "x-api-key" : VITE_RECIPE_API_KEY,
    }

})  