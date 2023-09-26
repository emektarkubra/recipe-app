import { useState } from "react";
import { useEffect } from "react";
import { axiosIngredientsImageApi } from "../axios/axiosRecipeApi";

export default function GetIngredientsImages({ path }) {
  const [imageSrc, setImageSrc] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axiosIngredientsImageApi.get(`/${path}`);
      setImageSrc(response?.request.responseURL);
    }
    getData();
  }, [path]);

  return <img className="m-auto" src={imageSrc} />;
}
