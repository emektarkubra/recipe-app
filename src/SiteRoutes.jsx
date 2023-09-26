import { Route, Routes } from "react-router-dom";
import AuthLayout from "./components/AuthLayout";
import MainLayout from "./components/MainLayout";
import PageNotFound from "./components/PageNotFound";
import AboutUs from "./pages/AboutUs";
import Favorites from "./pages/Favorites";
import ForgatPassword from "./pages/ForgatPassword";
import Home from "./pages/Home";
import RecipeInfo from "./pages/RecipeInfo";
import Recipes from "./pages/Recipes";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";

export default function SiteRoutes() {
  return (
    <>
      <Routes>
        <Route path="/" element={<MainLayout />}> {/* giriş yapmış */}
          <Route path="/" element={<Home />} />
          <Route path="/recipes" element={<Recipes />}/>
          <Route path="/recipes/:id" element = {<RecipeInfo />} />
          <Route path="/about-us" element={<AboutUs />} />
          <Route path="/favorites" element={<Favorites />} />
        </Route>
        <Route path="/" element={<AuthLayout />}> {/* giriş yapmamış */}     
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/forgat-password" element={<ForgatPassword />} />
        </Route>
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </>
  );
}
