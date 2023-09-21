import logo from "../assets/logo.png"
export default function Header() {
    return (<>
        <div className="bg-white w-full flex justify-between text-base font-serif m-auto sticky top-0 shadow-lg">
            <div className="flex mx-16">
                <div className="w-20">
                    <img className="w-full" src={logo} alt="" />
                </div>
                <button className="p-4 m-1 hover:underline underline-offset-4 flex items-center outline-none">HOME</button>
                <button className="p-4 m-1 hover:underline underline-offset-4 flex items-center outline-none">RECIPES</button>
                <button className="p-4 m-1 hover:underline underline-offset-4 outline-none">FAVORITES</button>
            </div>
            <div className="flex mx-16">
                <button className="p-4 m-1 hover:underline underline-offset-4 flex items-center outline-none">ABOUT US</button>
                <button className="p-4 m-1 hover:underline underline-offset-4 outline-none">SIGN IN</button>
                {/* <button className="p-4 m-1 hover:underline underline-offset-4">Sign up</button> */}
            </div>
        </div>
    </>)
}