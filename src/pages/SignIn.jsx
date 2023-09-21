import { Link } from "react-router-dom";

export default function SignIn() {
  return (
    <div className="max-w-lg m-auto mt-14 flex flex-col font-serif">
        <h2 className="text-2xl m-2">Enter your account </h2>
        <form className="flex flex-col" >
            <input className="bg-gray-100 rounded-md border-2 p-4 m-2" type="email" placeholder="Enter your e-mail" />
            <input className="bg-gray-100 rounded-md border-2 p-4 m-2" type="password" placeholder="Enter your password" />
            <Link to="/forgat-password" className="ml-auto mx-2 text-blue-800 hover:underline">Forgat your password ?</Link> 
            <button className="bg-blue-700 p-4 m-2 rounded text-white text-lg" type="submit">SIGN IN </button>
            <div className="mx-2">Don't have an account? <Link to="/sign-up" className="text-blue-800 hover:underline">Sign up</Link> </div>
      </form>
    </div>
  );
}
