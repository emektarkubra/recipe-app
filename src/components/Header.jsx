import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import logo from "../assets/logo.png"
import SiteContext from "../context"
import { BsBook, BsBookmarkStar, BsDropletHalf } from "react-icons/bs";


export default function Header() {
    const { onlineUser, setOnlineUser } = useContext(SiteContext)

    const handleSignOut = () => {
        localStorage.removeItem("onlineUser")
        setOnlineUser()
    }

    return (<>
        <div className="bg-white w-full flex justify-between text-base font-serif m-auto sticky top-0 z-10">
            <div className="flex mx-16">
                <Link to="/" className="w-20 outline-none"><img className="w-full" src={logo} alt="" /></Link>
                <Link to="/" className="p-4 m-1 hover:underline underline-offset-4 flex items-center outline-none">HOME</Link>
            </div>
            <div className="flex mx-16">
                <Link to="/about-us" className="p-4 m-1 hover:underline underline-offset-4 flex items-center outline-none">ABOUT US</Link>
                {!onlineUser ? <Link to="/sign-in" className="p-4 m-1 hover:underline underline-offset-4 flex items-center outline-none">SIGN IN</Link> :
                    <button onClick={handleSignOut} className="p-4 m-1 hover:underline underline-offset-4 flex items-center outline-none">SIGN OUT</button>}
            </div>
        </div>
        <div className="">
            {
                onlineUser && (<>
                    <div className="flex flex-col justify-center overflow-y-hidden h-[32rem] ">
                        <img
                            className=""
                            src="https://spoonacular.com/application/frontend/images/wallpaper1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="bg-gray-800/50 h-[32rem] absolute top-20 left-0 right-0">
                        <h1 className="text-white text-6xl p-5 text-center">Enjoy Your Food</h1>
                        <div className="flex justify-around text-white text-center text-4xl">
                            <NavLink to="/recipes">
                                <div className="border-4 flex flex-col justify-center items-center bg-green-800/50 w-80 h-80 p-14 rounded-full hover:bg-green-800/60">
                                    <BsBook className="text-7xl" />
                                    <h1>Look at the Recipes</h1>
                                </div>
                            </NavLink>
                            <NavLink to="/">
                                <div className="border-4 flex flex-col justify-center items-center bg-pink-800/50 w-80 h-80 p-14 rounded-full hover:bg-pink-800/60">
                                    <BsDropletHalf className="text-7xl" />
                                    <h1>What you have in your fridge?</h1>
                                </div>
                            </NavLink>
                            <NavLink to="/favorites">
                                <div className="border-4 flex flex-col justify-center items-center bg-orange-800/50 w-80 h-80 p-14 rounded-full hover:bg-orange-800/60">
                                    <BsBookmarkStar className="text-7xl" />
                                    <h1>Your Favorite Recipes</h1>
                                </div>
                            </NavLink>
                        </div>
                    </div>

                </>)
            }


        </div>
    </>)
}