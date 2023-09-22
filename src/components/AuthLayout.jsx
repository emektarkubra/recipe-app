import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import SiteContext from "../context";

export default function AuthLayout() {
  const { onlineUser } = useContext(SiteContext);
  if (onlineUser) {
    return <Navigate to="/" />;
  } else {
    return <Outlet />;
  }
}
