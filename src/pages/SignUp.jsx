import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { axiosUserApi } from "../axios";
import { v4 as uuidv4 } from "uuid";

export default function SignUp() {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repeatPassword, setrepeatPassword] = useState("");

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (password === repeatPassword) {
      const response = await axiosUserApi.get("/users");
      const usersData = await response?.data;

      if (!usersData.find((user) => user.email === email)) {
        axiosUserApi
          .post("/users", {
            uuid: uuidv4(),
            email: email,
            password: password,
            comments: [],
            fav: [],
            avatar: "",
          })
          .then(() => {
            alert("başarılı eklendi");
          })
          .catch((err) => {
            console.log(err);
          });
        e.target.reset();
        navigate("/sign-in");
      } else {
        alert("kullanıcı var");
      }
    } else {
      alert("Şifreniz aynı olmalıdır");
    }
  };

  return (
    <div className="max-w-lg m-auto mt-14 flex flex-col font-serif">
      <h2 className="text-2xl m-2">Create an Account</h2>
      <form onSubmit={handleSignUp} className="flex flex-col">
        <input
          onChange={(e) => setEmail(e.target.value)}
          className="bg-gray-100 rounded-md border-2 p-4 m-2"
          type="email"
          placeholder="Enter an e-mail"
          required
        />
        <input
          onChange={(e) => setPassword(e.target.value)}
          className="bg-gray-100 rounded-md border-2 p-4 m-2"
          type="password"
          placeholder="Enter your password"
          required
        />
        <input
          onChange={(e) => setrepeatPassword(e.target.value)}
          className="bg-gray-100 rounded-md border-2 p-4 m-2"
          type="password"
          placeholder="Repeat your password"
          required
        />
        <button
          className="bg-red-700 p-4 m-2 rounded text-white text-lg"
          type="submit">
          SIGN UP
        </button>
        <div className="mx-2">
          Already have an account ?
          <Link to="/sign-in" className="text-blue-800 hover:underline">
            Sign in
          </Link>
        </div>
      </form>
    </div>
  );
}
