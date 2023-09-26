import axios from "axios";

const VITE_RECIPE_API_URL = import.meta.env.VITE_RECIPE_API_URL
const VITE_RECIPE_API_KEY = import.meta.env.VITE_RECIPE_API_KEY

export const axiosRecipeApi = axios.create({
    baseURL : VITE_RECIPE_API_URL,
    headers : {
        "Content-Type": "application/json",
        "x-api-key" : VITE_RECIPE_API_KEY,
    }

})

export const axiosIngredientsImageApi = axios.create({
    baseURL : `https://spoonacular.com/cdn/ingredients_100x100`,
})

export const axiosEquipmentsImageApi = axios.create({
    baseURL : `https://spoonacular.com/cdn/equipment_100x100`,
})