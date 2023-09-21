import { Link } from "react-router-dom";

export default function SignUp() {
  return (
    <div className="max-w-lg m-auto mt-14 flex flex-col font-serif">
        <h2 className="text-2xl m-2">Create an Account</h2>
        <form className="flex flex-col" >
            <input className="bg-gray-100 rounded-md border-2 p-4 m-2" type="email" placeholder="Enter an e-mail" />
            <input className="bg-gray-100 rounded-md border-2 p-4 m-2" type="password" placeholder="Enter your password" />
            <input className="bg-gray-100 rounded-md border-2 p-4 m-2" type="password" placeholder="Repeat your password" />
            <button className="bg-red-700 p-4 m-2 rounded text-white text-lg" type="submit">SIGN UP </button>
            <div className="mx-2">Already have an account ? <Link to="/sign-in" className="text-blue-800 hover:underline">Sign in</Link> </div>
      </form>
    </div>
  );
}
