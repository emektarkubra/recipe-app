import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const SiteContext = createContext();

export default function SiteContextProvider({ children }) {
  const [onlineUser, setOnlineUser] = useState();
  const [recipeId, setRecipeId] = useState();

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
        }}>
        {children}
      </SiteContext.Provider>
    </>
  );
}
