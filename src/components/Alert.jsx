export default function Alert({ title, message, color, icon }) {
    return (
        <div className={`flex items-center bg-${color}-800 opacity-80 border-2 py-6 fixed top-0 left-0 z-10 text-white w-[18rem]`}>
            <div className={`border-2 rounded-full m-3 text-white w-[1.7rem] text-center font-bold`}>{`${icon}`}</div>
            <div>
                <h4>{title}</h4>
                <p>{message}</p>
            </div>
        </div>
    )
}