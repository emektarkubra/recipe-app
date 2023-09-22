import { useContext } from "react"
import { Link } from "react-router-dom"
import logo from "../assets/logo.png"
import SiteContext from "../context"

export default function Header(){
   const {onlineUser, setOnlineUser} = useContext(SiteContext)
   
   const handleSignOut = () => {
        localStorage.removeItem("onlineUser")
       setOnlineUser()
   }

    return (<>
        <div className="bg-white w-full flex justify-between py-1 text-base font-serif m-auto sticky top-0 shadow-lg">
            <div className="flex mx-16">
                <Link to="/" className="w-20 outline-none"><img className="w-full" src={logo} alt="" /></Link>
                <Link to="/" className="p-4 m-1 hover:underline underline-offset-4 flex items-center outline-none">HOME</Link>
                <Link to="/recipes" className="p-4 m-1 hover:underline underline-offset-4 flex items-center outline-none">RECIPES</Link>
                {onlineUser && <Link to="/favorites" className="p-4 m-1 hover:underline underline-offset-4 flex items-center outline-none">FAVORITES</Link>}
            </div>
            <div className="flex mx-16">
                <Link to="/about-us" className="p-4 m-1 hover:underline underline-offset-4 flex items-center outline-none">ABOUT US</Link>
                {!onlineUser ? <Link to="/sign-in" className="p-4 m-1 hover:underline underline-offset-4 flex items-center outline-none">SIGN IN</Link> :
                <button onClick={handleSignOut} className="p-4 m-1 hover:underline underline-offset-4 flex items-center outline-none">SIGN OUT</button>}
            </div>
        </div>
    </>)
}