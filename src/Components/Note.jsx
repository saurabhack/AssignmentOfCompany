import { AiOutlineBgColors } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";


function Note({setIsOpen,setData}){
    function handleSubmit(e){
        e.preventDefault()
        const title=document.querySelector("#title").value
        const content=document.querySelector("#content").value
        const obj = {title,content}
        setData((prevData)=>([...prevData,obj]))
    }
    return (
        <>
            <div className="text-white w-[40%] flex flex-col items-center  shadow-2xl gap-0  bg-slate-900   p-2 rounded-xl">
                <input type="text" placeholder="title" id="title" className="w-full p-2 focus:outline-none bg-slate-900"  />
                <textarea name="" placeholder="take a note ..." id="content" className="w-full p-2 focus:outline-none bg-slate-900" ></textarea>
                <div className="flex w-full justify-between p-2">
                    <div className="flex gap-5">
                        < AiOutlineBgColors className="text-2xl cursor-pointer"/>
                        <CiImageOn className="text-2xl cursor-pointer"/>
                    </div>
                    <div className="flex gap-4">
                        <p className="font-medium cursor-pointer"  onClick={()=>{setIsOpen(false)}}>Close</p>
                        <p className="font-medium cursor-pointer"  onClick={handleSubmit}>Add</p>
                    </div>                    
                </div>
            </div>
        
        </>
    )
}
export default Note