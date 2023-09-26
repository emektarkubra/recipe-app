import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosUserApi } from "../axios";
import SiteContext from "../context";

export default function SignIn() {
  const navigate = useNavigate();

  const { setOnlineUser } = useContext(SiteContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await axiosUserApi.get("/users");
    const usersData = await response?.data;
    if (usersData.find((user) => user.email === email && user.password === password)) {
      localStorage.setItem("onlineUser", JSON.stringify({ email, password }));
      setOnlineUser({ email, password });
      navigate("/");
    } else {
      alert("Kullanıcı girişi hatalı. Email veya password yanlış");
    }
  };

  return (
    <div className="max-w-lg m-auto mt-14 flex flex-col font-serif">
      <h2 className="text-2xl m-2">Enter your account </h2>
      <form onSubmit={handleSignIn} className="flex flex-col">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 rounded-md border-2 p-4 m-2"
          type="email"
          placeholder="Enter your e-mail"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-100 rounded-md border-2 p-4 m-2"
          type="password"
          placeholder="Enter your password"
          required
        />
        <Link
          to="/forgat-password"
          className="ml-auto mx-2 text-blue-800 hover:underline">
          Forgat your password ?
        </Link>
        <button
          className="bg-blue-700 p-4 m-2 rounded text-white text-lg"
          type="submit">
          SIGN IN
        </button>
        <div className="mx-2">
          Don't have an account?
          <Link to="/sign-up" className="text-blue-800 hover:underline">
            Sign up
          </Link>
        </div>
      </form>
    </div>
  );
}
