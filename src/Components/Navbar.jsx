import { FaSearch } from "react-icons/fa";
import { IoGrid } from "react-icons/io5";


function Navbar(){
    return(
        <>
        <div className="w-[100vw] h-[10vh] bg-slate-900 flex shadow-2xl fixed z-0">
            <div className="w-[30%] h-[100%] flex justify-start items-center pl-5">
                <h1 className="text-xl text-white font-medium">NoteKeeper</h1>
            </div>
            <div className="w-[70%] h-[100%] flex items-center justify-between">
                <div className="flex gap-3 border border-white p-2 w-[50%] text-white rounded-lg">
                <input type="text" placeholder="search" className="bg-slate-900 focus:outline-none w-full"/>
                <FaSearch className="text-white text-xl bg-slate-950 "/>
                </div>
                <div className="pr-10">
                    <IoGrid className="text-3xl text-white "/>
                </div>
            </div>
        </div>
        </>
    )
}
export default Navbar