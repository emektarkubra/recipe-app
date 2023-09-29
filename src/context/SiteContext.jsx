import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const SiteContext = createContext();

export default function SiteContextProvider({ children }) {
  const [onlineUser, setOnlineUser] = useState();
  const [recipeId, setRecipeId] = useState();
  const [bgColor, setBgColor] = useState()
  const [color, setColor] = useState()

  const [values, setValues] = useState([]);

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("values"));
    if (storedValues) {
      setValues(storedValues);
    }
  }, []);

  window.onscroll = () => {
    if (window.scrollY > 300) {
      setBgColor("green-700")
      setColor("white")
    } else {
      setBgColor("white")
      setColor("base")
    }
  }

  useEffect(() => {
    const storedOnlineUser = JSON.parse(localStorage.getItem("onlineUser"));
    setOnlineUser(storedOnlineUser);
  }, []);

  function handleGetRecipe(id) {
    setRecipeId(id);
  }

  return (
    <>
      <SiteContext.Provider
        value={{
          onlineUser,
          setOnlineUser,
          handleGetRecipe,
          recipeId,
          bgColor,
          color,values, setValues
        }}>
        {children}
      </SiteContext.Provider>
    </>
  );
}
