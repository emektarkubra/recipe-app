import { useState } from "react";
import { useEffect } from "react";
import { axiosRecipeApi } from "../axios/axiosRecipeApi";

export default function GetSimilarRecipesImages({ recipeId }) {
  const [imageSrc, setImageSrc] = useState();


  useEffect(() => {
    async function getData() {
      const response = await axiosRecipeApi.get(`/${recipeId}/information`);
      const data = await response?.data;
      setImageSrc(data.image);
    }
    getData();
  }, []);

  return <img className="m-auto w-48" src={imageSrc || `https://mir-s3-cdn-cf.behance.net/projects/230/1cd44457344623.Y3JvcCw4MTIsNjM1LDAsODg.jpg`} />;
}