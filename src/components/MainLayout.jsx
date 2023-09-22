import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SiteContext from "../context";

export default function MainLayout() {
  const { onlineUser } = useContext(SiteContext);
  if (!onlineUser) {
    return <Navigate to="/sign-in" />;
  } else {
    return <Outlet />;
  }
}
