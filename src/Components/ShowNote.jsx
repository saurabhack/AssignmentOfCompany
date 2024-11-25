import { CiViewList } from "react-icons/ci";
import { FaImage } from "react-icons/fa";
function ShowNote({setIsOpen}){
    return(
        <>
        <div className="w-[100vw] h-[20%] flex flex-col items-center">
            <div className="text-white w-[40%] flex  items-center justify-center shadow-2xl gap-5  bg-slate-900   p-2">
                <input type="text" placeholder="take a note ..." onClick={()=>{setIsOpen(true)}}  className="bg-slate-900 p-2 w-[80%] focus:outline-none"/>
                <CiViewList className="text-3xl cursor-pointer"/>
                <FaImage className="text-3xl cursor-pointer"/>
            </div>
        </div>
        </>
    )
}
export default ShowNote