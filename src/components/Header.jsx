import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import SiteContext from "../context"
import { BsBook, BsBookmarkStar, BsDropletHalf } from "react-icons/bs";
import { useState } from "react";


export default function Header() {
    const { onlineUser, setOnlineUser } = useContext(SiteContext)
    const [bgColor, setBgColor] = useState("white")
    const [color, setColor] = useState()

    window.onscroll = () => {
        if (window.scrollY > 100) {
            setBgColor("bg-green-700")
            setColor("text-white")
        } else {
            setBgColor("bg-white")
            setColor("text-base")
        }
    }

    const handleSignOut = () => {
        localStorage.removeItem("onlineUser")
        setOnlineUser()
    }

    return (<>
        <div className={`${bgColor} w-full flex justify-end ${color} font-serif m-auto sticky top-0 z-10`}>
            <div className="flex p-1">
                <Link to="/about-us" className="m-1 hover:underline underline-offset-4 flex items-center outline-none">About us</Link>
                {!onlineUser ? <Link to="/sign-in" className="p-4 hover:underline underline-offset-4 flex items-center outline-none">Sign in</Link> :
                    <button onClick={handleSignOut} className="p-4 hover:underline underline-offset-4 flex items-center outline-none">Sign out</button>}
            </div>
        </div>
        <div className="">
            {
                onlineUser && (<>
                    <div className="flex flex-col justify-center overflow-y-hidden h-[25rem] ">
                        <img
                            className=""
                            src="https://spoonacular.com/application/frontend/images/wallpaper1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="bg-gray-800/50 h-[25rem] absolute top-16 left-0 right-0">
                        <h1 className="text-white text-6xl p-5 text-center">Enjoy Your Food</h1>
                        <div className="flex justify-around text-white text-center text-4xl w-[90%] m-auto">
                            <NavLink to="/recipes">
                                <div className="border-4 flex flex-col justify-center items-center bg-green-800/50 w-[17rem] h-[17rem] p-14 rounded-full hover:bg-green-800/60">
                                    <BsBook className="text-5xl" />
                                    <h1 className="text-2xl">Look at the Recipes</h1>
                                </div>
                            </NavLink>
                            <NavLink to="/search-recipes">
                                <div className="border-4 flex flex-col justify-center items-center bg-pink-800/50 w-[17rem] h-[17rem] p-14 rounded-full hover:bg-pink-800/60">
                                    <BsDropletHalf className="text-5xl" />
                                    <h1 className="text-2xl w-56">What you have in your fridge?</h1>
                                </div>
                            </NavLink>
                            <NavLink to="/favorites">
                                <div className="border-4 flex flex-col justify-center items-center bg-orange-800/50 w-[17rem] h-[17rem] p-14 rounded-full hover:bg-orange-800/60">
                                    <BsBookmarkStar className="text-5xl" />
                                    <h1 className="text-2xl w-56">Your Favorite Recipes</h1>
                                </div>
                            </NavLink>
                        </div>
                    </div>

                </>)
            }


        </div>
    </>)
}