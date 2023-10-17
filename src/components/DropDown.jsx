import { useContext } from "react"
import { axiosUserApi } from "../axios"
import SiteContext from "../context"
import dummyImage from "../assets/avatar.svg"

export default function DropDown() {
    const { isOpenDropDown, setIsVisibleModal, setOnlineUser, onlineUser } = useContext(SiteContext)

    function handleDeleteAvatar(e) {
        setOnlineUser(prev => {
            return {
                ...prev,
                avatar: dummyImage
            }
        })
        axiosUserApi.put(`/users/${onlineUser?.id}`, { ...onlineUser, avatar: "" })
    }

    return (
        <div className={`${isOpenDropDown ? "block" : "hidden"} fixed right-0 top-12 my-5 mx-2 p-2 w-[10rem] bg-green-700 text-white`}>
            <button onClick={() => setIsVisibleModal(true)} className="p-2 float-left">Change avatar</button>
            <hr className="clear-both" />
            <button onClick={handleDeleteAvatar} className="p-2 float-left">Delete avatar</button>
        </div>
    )
}