import { Link } from "react-router-dom";

export default function ForgatPassword(){
    return (
        <div className="max-w-lg m-auto mt-16 flex flex-col font-serif">
           <h2 className="text-2xl m-2">Enter your e-mail </h2>
           <form className="flex flex-col" >
               <input className="bg-gray-100 rounded-md border-2 p-4 m-2" type="email" placeholder="Enter your e-mail" />
               <input className="bg-gray-100 rounded-md border-2 p-4 m-2" type="password" placeholder="Enter your old password" />
               <input className="bg-gray-100 rounded-md border-2 p-4 m-2" type="password" placeholder="Enter your new password" />
               <button className="bg-red-700 p-4 m-2 rounded text-white text-lg" type="submit">Submit</button>
               <div className="ml-auto mx-2">Back to <Link to="/sign-in" className="text-blue-800 hover:underline">Sign in</Link></div>
           </form>
        </div>
    )
}