import { useContext } from "react"
import { useState } from "react"
import { useEffect } from "react"
import SiteContext from "../context"
import { BsBookmark, BsBookmarkFill } from "react-icons/bs";


export default function Favorites() {
    const { handleAddFavorites, favoritesRecipes } = useContext(SiteContext)
    const [favList, setFavList] = useState()

    useEffect(() => {
        const favoriteList = JSON.parse(localStorage.getItem("onlineUser")).fav
        setFavList(favoriteList)
    }, [])

    return (
        <div className="border-4 p-14">
            <h1 className="m-5 py-3 text-3xl">Favorites</h1>
            {
                favList?.map(fav => (<>
                    <div className="flex justify-between border-gray-400 border-[1px] m-5 p-2 w-[60%] items-center">
                        <div className="px-3">{fav.title}</div>
                        <button
                            onClick={() => handleAddFavorites(recipe.id)}
                            className="flex justify-center items-center border-[1px] border-gray-200 w-14 h-14 p-2 rounded-full hover:bg-gray-200 m-2">
                            {
                                favoritesRecipes?.find(item => item.id === fav.id) ? <BsBookmarkFill /> : <BsBookmark />
                            }

                        </button>
                    </div>
                </>))
            }

        </div>
    )
}