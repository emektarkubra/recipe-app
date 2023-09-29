import axios from "axios";

const VITE_RECIPE_API_KEY = import.meta.env.VITE_RECIPE_API_KEY

export const axiosSearchRecipeApi = axios.create({
    baseURL : `https://api.spoonacular.com/food/ingredients`,
    headers : {
        "Content-Type": "application/json",
        "x-api-key" : VITE_RECIPE_API_KEY,
    }
})