import { Route, Routes } from "react-router-dom";
import PageNotFound from "./components/PageNotFound";
import AboutUs from "./pages/AboutUs";
import Favorites from "./pages/Favorites";
import ForgatPassword from "./pages/ForgatPassword";
import Home from "./pages/Home";
import Recipes from "./pages/Recipes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function SiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route path="/forgat-password" element={<ForgatPassword />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
