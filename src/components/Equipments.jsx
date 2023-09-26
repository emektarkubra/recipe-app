import { useState, useContext, useEffect } from "react";
import { axiosRecipeApi } from "../axios";
import SiteContext from "../context";
import GetEquipmentsImages from "./GetEquipmentsImages";

export default function Equipments() {
  const { recipeId } = useContext(SiteContext);
  const [equipments, setEquipments] = useState();

  useEffect(() => {
    async function getData() {
      const response = await axiosRecipeApi.get(
        `/${recipeId}/equipmentWidget.json`
      );
      const data = await response?.data;
      setEquipments(data?.equipment);
    }
    getData();
  }, [recipeId]);
  return (
    <>
      <div className="border-2 m-auto flex flex-col w-5/6">
        <h2 className="border-2 text-3xl p-8">Equipments</h2>
        <div className="border-2 flex flex-wrap">
          {equipments?.map((equipment, index) => (
            <div key={index} className="w-40 m-5 mx-10 flex flex-col">
              <GetEquipmentsImages path={equipment.image} />
              <div className="text-center">
                <span>{equipment.name}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
