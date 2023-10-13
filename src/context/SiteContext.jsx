import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";
import { axiosRecipeApi, axiosUserApi } from "../axios";

export const SiteContext = createContext();

export default function SiteContextProvider({ children }) {
  const [onlineUser, setOnlineUser] = useState();
  const [recipeId, setRecipeId] = useState();
  const [bgColor, setBgColor] = useState();
  const [color, setColor] = useState();
  const [values, setValues] = useState([]);
  const [favoritesRecipes, setFavoritesRecipes] = useState();
  const [isSuccessSignUp, setIsSuccessSignUp] = useState(false);
  const [isSignIn, setSignIn] = useState(false);
  const [isUpdatedPassword, setIsUpdatedPassword] = useState(false)

  useEffect(() => {
    const storedValues = JSON.parse(localStorage.getItem("values"));
    if (storedValues) {
      setValues(storedValues);
    }
    const storedOnlineUser = JSON.parse(localStorage.getItem("onlineUser"));
    setFavoritesRecipes(storedOnlineUser?.fav);
  }, []);

  window.onscroll = () => {
    if (window.scrollY > 300) {
      setBgColor("green-700");
      setColor("white");
    } else {
      setBgColor("white");
      setColor("base");
    }
  };

  useEffect(() => {
    const storedOnlineUser = JSON.parse(localStorage.getItem("onlineUser"));
    setOnlineUser(storedOnlineUser);
  }, []);

  const handleGetRecipe = (id) => setRecipeId(id);

  const handleAddFavorites = async (id) => {
    const response = await axiosRecipeApi.get(`/${id}/information`);
    const data = await response?.data;

    const storedOnlineUser = JSON.parse(localStorage.getItem("onlineUser"));
    let newFavorites;
    if (storedOnlineUser.fav?.some((item) => item.id === data.id)) {
      newFavorites = (storedOnlineUser.fav || []).filter(
        (item) => item.id !== data.id
      );
    } else {
      newFavorites = [
        ...(storedOnlineUser.fav || []),
        { id: data.id, title: data.title, image: data.image },
      ];
    }

    storedOnlineUser.fav = newFavorites;
    setFavoritesRecipes(storedOnlineUser?.fav);

    localStorage.setItem("onlineUser", JSON.stringify(storedOnlineUser));
    axiosUserApi.put(`/users/${storedOnlineUser.id}`, {
      ...storedOnlineUser,
    });
  };

  return (
    <>
      <SiteContext.Provider
        value={{
          onlineUser,
          setOnlineUser,
          handleGetRecipe,
          recipeId,
          bgColor,
          color,
          values,
          setValues,
          handleAddFavorites,
          favoritesRecipes,
          isSuccessSignUp, setIsSuccessSignUp,
          isSignIn, setSignIn,
          isUpdatedPassword, setIsUpdatedPassword
        }}>
        {children}
      </SiteContext.Provider>
    </>
  );
}
