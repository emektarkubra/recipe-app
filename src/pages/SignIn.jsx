import { useContext } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosUserApi } from "../axios";
import Alert from "../components/Alert";
import SiteContext from "../context";

export default function SignIn() {
  const navigate = useNavigate();

  const { setOnlineUser, isSuccessSignUp, setSignIn } = useContext(SiteContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [isWrongEmailOrPassword, setIsWrongEmailOrPassword] = useState(false)

  const handleSignIn = async (e) => {
    e.preventDefault();
    const response = await axiosUserApi.get("/users");
    const usersData = await response?.data;
    const user = usersData.find((user) => user.email === email && user.password === password)
    if (user) {
      localStorage.setItem("onlineUser", JSON.stringify({ ...user }));
      setOnlineUser(user);
      navigate("/");
      // alert("Giriş yapıldı")
      setSignIn(true)
      setTimeout(() => {
        setSignIn(false)
      }, 2000);
    } else {
      // alert("Kullanıcı girişi hatalı. Email veya password yanlış");
      setIsWrongEmailOrPassword(true)
      setTimeout(() => {
        setIsWrongEmailOrPassword(false)
      }, 2000);
    }
  };

  return (
    <div className="max-w-lg m-auto my-16 flex flex-col font-serif">
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
          Change your password ?
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
      {
        isSuccessSignUp ? <Alert title="Success" message="You have been signed up" color="green" icon="✓" /> : null
      }

      {
        isWrongEmailOrPassword ? <Alert title="Danger" message="Email or password is incorrect!" color="red" icon="✗" /> : null
      }
    </div>
  );

}
