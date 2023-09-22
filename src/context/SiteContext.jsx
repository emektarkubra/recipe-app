import { useState } from "react";
import { useEffect } from "react";
import { createContext } from "react";

export const SiteContext = createContext();

export default function SiteContextProvider({ children }) {
  const [onlineUser, setOnlineUser] = useState();

  useEffect(() => {
    const storedOnlineUser = JSON.parse(localStorage.getItem("onlineUser"));
    setOnlineUser(storedOnlineUser);
  }, []);

  return (
    <>
      <SiteContext.Provider value={{ onlineUser, setOnlineUser }}>
        {children}
      </SiteContext.Provider>
    </>
  );
}
