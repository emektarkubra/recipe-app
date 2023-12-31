import { useState } from "react";
import { Link } from "react-router-dom";
import { axiosUserApi } from "../axios";
import Alert from "../components/Alert";

export default function ForgatPassword() {
    const [email, setEmail] = useState()
    const [oldPassword, setOldPassword] = useState()
    const [newPassword, setNewPassword] = useState()
    const [isUpdatedPassword, setIsUpdatedPassword] = useState(false)
    const [isWrongEmailOrPassword, setIsWrongEmailOrPassword] = useState(false)

    async function handleSubmit(e) {
        e.preventDefault();
        const response = await axiosUserApi.get("/users");
        const usersData = await response?.data;
        const user = usersData.find((user) => user.email === email && user.password === oldPassword)
        if (user) {
            axiosUserApi
                .put(`/users/${user.id}`, {
                    ...user,
                    password: newPassword
                })
                .then(() => {
                    setIsUpdatedPassword(true)
                    setTimeout(() => {
                        setIsUpdatedPassword(false)
                    }, 2000);
                })
                .catch((err) => {
                    console.log(err);
                });
        } else {
            setIsWrongEmailOrPassword(true)
            setTimeout(() => {
                setIsWrongEmailOrPassword(false)
            }, 2000);
        }
    }
    return (
        <div className="max-w-lg m-auto my-16 flex flex-col font-serif">
            <h2 className="text-2xl m-2">Enter your e-mail </h2>
            <form onSubmit={handleSubmit} className="flex flex-col" >
                <input onChange={(e) => setEmail(e.target.value)} className="bg-gray-100 rounded-md border-2 p-4 m-2" type="email" placeholder="Enter your e-mail" required />
                <input onChange={(e) => setOldPassword(e.target.value)} className="bg-gray-100 rounded-md border-2 p-4 m-2" type="password" placeholder="Enter your old password" required />
                <input onChange={(e) => setNewPassword(e.target.value)} className="bg-gray-100 rounded-md border-2 p-4 m-2" type="password" placeholder="Enter your new password" required />
                <button className="bg-red-700 p-4 m-2 rounded text-white text-lg" type="submit">Submit</button>
                <div className="ml-auto mx-2">Back to <Link to="/sign-in" className="text-blue-800 hover:underline">Sign in</Link></div>
            </form>
            {
                isUpdatedPassword ? <Alert title="Success" message="Password updated" color={`green`} icon="✓" /> : null
            }
            {
                isWrongEmailOrPassword ? <Alert title="Danger" message="Email or password is incorrect!" color={`red`} icon="✗" /> : null
            }
        </div>
    )

}