import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { axiosSearchRecipeApi } from "../axios/axiosSearchRecipeApi";
import SiteContext from "../context";
import RecomendedRecipes from "./RecommendedRecipes";

export default function SearchRecipes() {
  const { values, setValues } = useContext(SiteContext);
  const [inputValue, setInputValue] = useState("");
  const [searchValues, setSearchValues] = useState();

  useEffect(() => {
    const fetchDataFromApi = async () => {
      try {
        const response = await axiosSearchRecipeApi.get(
          `/autocomplete?query=${inputValue}&number=10&apiKey=5e62f47d48d74bd9a9ac571ea2040a42`
        );
        setSearchValues(response?.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchDataFromApi();
  }, [inputValue]);

  useEffect(() => {
    localStorage.setItem("values", JSON.stringify(values));
  }, [values]);

  const getValues = (e) => {
    e.preventDefault();
    if (inputValue.length > 2) {
      setValues((prev) => [...prev, inputValue]);
    }
  };

  return (
    <div className="p-14">
      <form>
        <div className="flex justify-center w-[40%] m-auto w-[100%]">
          <input
            className="bg-gray-100 rounded-md border-2 p-4 w-[80%] m-2 outline-0"
            placeholder="What's in your fridge?"
            onChange={(e) => setInputValue(e.target.value)}
            type="text"
            list="data"
          />
          <datalist id="data">
            {searchValues?.map((item, index) => (
              <option key={index} value={item.name} />
            ))}
          </datalist>
          <button
            onClick={getValues}
            className="bg-blue-700 rounded-md p-4 w-[20%] m-2 text-white text-lg outline-0">
            Add
          </button>
        </div>
      </form>
      <div className="flex justify-center w-[70%] m-auto flex-wrap p-5">
        {values?.map((value, index) => (
          <div
            key={index}
            className="bg-gray-100 rounded text-center w-[15%] p-2 m-2">
            <button
              onClick={(e) =>
                setValues(
                  values?.filter(
                    (item) => values.indexOf(value) !== values.indexOf(item)
                  )
                )
              }
              className="float-right">
              x
            </button>
            <div className="flex justify-between flex">
              <div className="p-1">{value}</div>
            </div>
          </div>
        ))}
      </div>
      <RecomendedRecipes values={values} />
    </div>
  );
}
