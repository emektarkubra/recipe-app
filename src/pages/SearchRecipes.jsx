import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { axiosSearchRecipeApi } from "../axios/axiosSearchRecipeApi";
import RecomendedRecipes from "../components/RecommendedRecipes";
import SiteContext from "../context";

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
    <div className="py-20">
      <form>
        <div className="flex justify-center w-[40%] m-auto">
          <input
            className="bg-gray-100 rounded-md border-2 p-4 w-[80%] h-[7vh] m-2 outline-0"
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
            className="bg-green-600 rounded-md w-[20%] h-[7vh] m-2 text-white text-lg outline-0">
            Add
          </button>
        </div>
      </form>
      <div className="flex justify-center w-[70%] m-auto flex-wrap p-5">
        {values?.map((value, index) => (
          <div
            key={index}
            className="flex justify-between bg-gray-100 rounded text-center p-2 m-2">
            <div className="flex justify-between flex">
              <div className="px-3">{value}</div>
              <button
                onClick={(e) =>
                  setValues(
                    values?.filter(
                      (item) => values.indexOf(value) !== values.indexOf(item)
                    )
                  )
                }
                className="">
                <span>x</span>
              </button>
            </div>
          </div>
        ))}
      </div>
      <RecomendedRecipes values={values} />
    </div>
  );
}
