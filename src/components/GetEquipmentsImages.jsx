import { useState } from "react";
import { useEffect } from "react";
import { axiosEquipmentsImageApi } from "../axios/axiosRecipeApi";

export default function GetEquipmentsImages({ path }) {
  const [imageSrc, setImageSrc] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axiosEquipmentsImageApi.get(`/${path}`);
      setImageSrc(response?.request.responseURL);
    }
    getData();
  }, [path]);

  return <img className="m-auto" src={imageSrc} />;
}
