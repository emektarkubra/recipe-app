import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import SiteContext from "../context"
import { Link } from "react-router-dom";


export default function Favorites() {
    const { handleAddFavorites, handleGetRecipe } = useContext(SiteContext)
    const [favList, setFavList] = useState()

    useEffect(() => {
        const favoriteList = JSON.parse(localStorage.getItem("onlineUser")).fav
        setFavList(favoriteList)
    }, [favList?.length])

    return (
        <div className="p-14 w-[95%] m-auto">
            <h1 className="m-5 py-3 text-3xl flex justify-center">FAVORITES</h1>
            <div className="flex flex-wrap">
                {favList?.map((fav) => (
                    <div key={fav.id} className="border-2 flex flex-col justify-between w-[23%] m-2 p-2">
                        <Link
                            to={`/recipes/${fav.id}`}
                            onClick={() => handleGetRecipe(fav.id)}
                            className="">
                            <div className="p-2 mx-auto">
                                <img src={fav.image} alt="" />
                                <div className="">{fav.title}</div>
                            </div>
                        </Link>
                        <button
                            onClick={() => handleAddFavorites(fav.id)}
                            className="bg-red-700 w-[5rem] rounded-md px-2 text-white text-base outline-0">
                            Remove
                        </button>

                    </div>
                ))}
            </div>

        </div>
    )
}
// flex justify-center items-center 