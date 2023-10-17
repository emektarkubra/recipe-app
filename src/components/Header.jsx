import { useContext } from "react"
import { Link, NavLink } from "react-router-dom"
import SiteContext from "../context"
import { BsBook, BsBookmarkStar, BsDropletHalf, BsArrowLeft } from "react-icons/bs";
import { useState } from "react";
import DropDown from "./DropDown";
import ImageModal from "./ImageModal";
import LazyLoadImage from "./LazyLoadImage";


export default function Header() {
    const { onlineUser, setOnlineUser, setValues, setIsOpenDropDown } = useContext(SiteContext)
    const [bgColor, setBgColor] = useState("white")
    const [color, setColor] = useState()
    const [backButtonVisiblity, setBackButtonVisiblity] = useState(false)

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
        localStorage.removeItem("values")
        setValues([])
        setOnlineUser()
        setBackButtonVisiblity(false)
        setIsOpenDropDown(false)
    }

    return (<>
        <style>
            {`

          @media (max-width: 860px) {
            
            .navs {
                flex-direction:column;
                width : 40%;


            }
            .circle {
                border-radius : 0;
                padding : 0px;
                flex-direction : row;
                height : 7vh;
                width : 100%;
                background-color : transparent;
                border: none;
                text-align : center;
            }

            .navlink {

            }
            .heading {
                border-bottom: 1px solid white;
                width : auto;
                
            }
            .icon {
                display : none;
            }
            .head {
                font-size : 7vw;
            }
          }

          @media (max-width: 691px) {
          .box,
          .img {
            height : 40vw;
          }
          .heading {
            font-size : 2.9vw;
          }
        }

        `}
        </style>
        <div className={`${bgColor} shadow-lg w-full flex justify-between ${color} font-serif m-auto sticky top-0 z-10 pl-3`}>
            <Link onClick={() => setBackButtonVisiblity(false)} to="/" className={` m-1 hover:underline underline-offset-4 flex justify-between items-center outline-none text-sm ${backButtonVisiblity ? `visible` : `invisible`}`}>
                <BsArrowLeft className="mr-2" />
                go back home page
            </Link>
            <div className="flex p-1">
                {
                    !onlineUser ? <Link to="/sign-in" className="p-4 hover:underline underline-offset-4 flex items-center outline-none">Sign in</Link> :
                        (<>
                            <Link onClick={() => setBackButtonVisiblity(true)} to="/about-us" className="m-1 hover:underline underline-offset-4 flex items-center outline-none">About us</Link>
                            <button onClick={handleSignOut} className="p-4 hover:underline underline-offset-4 flex items-center outline-none">Sign out</button>
                            <button onClick={() => setIsOpenDropDown(prev => !prev)} className="w-[2.5rem] h-[2.5rem] outline-none my-2 mr-4">
                                <LazyLoadImage src={onlineUser?.avatar} />
                                <DropDown />
                            </button>
                        </>)
                }
            </div>
        </div>
        <div>
            {
                onlineUser && (<>
                    <div className="img flex flex-col justify-center overflow-y-hidden h-[35vw] w-[100%]">
                        <img
                            src="https://spoonacular.com/application/frontend/images/wallpaper1.jpg"
                            alt=""
                        />
                    </div>
                    <div className="box bg-gray-800/50 h-[35vw] absolute top-16 left-0 right-0">
                        <h1 className="head text-white text-[4vw] text-6xl p-5 text-center">Enjoy Your Food</h1>
                        <div className="navs flex justify-around text-white text-center text-[18vw] w-[90%] m-auto ">
                            <NavLink className="navlink" onClick={() => setBackButtonVisiblity(true)} to="/search-recipes">
                                <div className="circle border-4 flex flex-col justify-center items-center bg-green-800/50 w-[23vw] h-[23vw] p-14 rounded-full hover:bg-green-800/60">
                                    <BsDropletHalf className="icon text-[5vw]" />
                                    <h1 className="heading text-[2vw] w-56">What you have in your fridge?</h1>
                                </div>
                            </NavLink>
                            <NavLink className="navlink" onClick={() => setBackButtonVisiblity(true)} to="/daily-meals">
                                <div className="circle border-4 flex flex-col justify-center items-center bg-pink-800/50 w-[23vw] h-[23vw] p-14 rounded-full hover:bg-pink-800/60">
                                    <BsBook className="icon text-[5vw]" />
                                    <h1 className="heading text-[2vw]">Daily Meals</h1>
                                </div>
                            </NavLink>
                            <NavLink className="navlink" onClick={() => setBackButtonVisiblity(true)} to="/favorites">
                                <div className="circle border-4 flex flex-col justify-center items-center bg-orange-800/50 w-[23vw] h-[23vw] p-14 rounded-full hover:bg-orange-800/60">
                                    <BsBookmarkStar className="icon text-[5vw]" />
                                    <h1 className="heading text-[2vw] w-56">Your Favorite Recipes</h1>
                                </div>
                            </NavLink>
                        </div>
                    </div>

                    <ImageModal />

                </>)
            }


        </div>
    </>)
}