import { useContext } from "react";
import { useEffect } from "react";
import { BsX } from "react-icons/bs";
import { axiosUserApi } from "../axios";
import SiteContext from "../context";

export default function ImageModal() {
  const { isVisibleModal, setIsVisibleModal, imageUrl, setImageUrl, onlineUser, setOnlineUser } = useContext(SiteContext)

  const toBase64 = file => new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
  });


  useEffect(() => {
    localStorage.setItem("onlineUser", JSON.stringify(onlineUser));
  }, [onlineUser])

  async function handleImageRead(e) {
    const base64File = await toBase64(e.target.files[0])
    setImageUrl(base64File)

  }

  function handleSubmit(e) {
    e.preventDefault()
    setOnlineUser(prev => {
      return {
        ...prev,
        avatar: imageUrl
      }
    })
    axiosUserApi.put(`/users/${onlineUser?.id}`, { ...onlineUser, avatar: imageUrl })
  }

  return (<>
    <div className={`border-2 border-gray-600 fixed top-[30%] left-[35%] bg-gray-800 text-white ${isVisibleModal ? "block" : "hidden"}`}>
      <div className="mb-4 flex justify-end text-2xl p-2"><button onClick={() => setIsVisibleModal(false)}><BsX /></button></div>
      <form onSubmit={handleSubmit}>
        <label className="px-10 pb-2" htmlFor="selectFile">Select Image</label> <br />
        <input onChange={handleImageRead} className="px-10 pb-10 pt-2" type="file" id="selectFile" multiple accept="image/*" />
        <div className="px-10">
          <button onClick={() => setIsVisibleModal(false)} className="border-2 mb-4 px-2" type="submit">SAVE</button>
        </div>
      </form>
    </div>
  </>);
}
