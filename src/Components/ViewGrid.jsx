import {useEffect, useState} from "react"
import { AiOutlineBgColors } from "react-icons/ai";
import { CiImageOn } from "react-icons/ci";
import { FaCheckCircle } from "react-icons/fa";
import { TbPinned } from "react-icons/tb";
import { IoMdMore } from "react-icons/io";
import { FaRegCheckCircle } from "react-icons/fa";
import { TbPinnedFilled } from "react-icons/tb";





function ViewGrid({data}){
    const [check,setCheck]=useState(<FaRegCheckCircle className="text-xl"/>)
    const [pinned,setPinned]=useState(<TbPinned className="text-2xl"/>)
    const [pointer,setPointer]=useState(false)
    const [add,setAdd]=useState(false)
    const [id,setId]=useState([])

    console.log("pointer here ===",pointer)
    console.log("add here ====",add)
    function handleClickForCheck(i){
        
        if(pointer===false){
            setCheck(<FaRegCheckCircle className="text-lg"/>)
        }else{
    setCheck(<FaCheckCircle className="text-lg"/>)
            
        }
    }
    function handleClickForPinned(i){
        if(id.includes(i)){
        if(add===false){
            setPinned(<TbPinned className="text-lg"/>)
        }else{
            setPinned(<TbPinnedFilled className="text-lg"/>)
        }
    }
    }
    console.log("id is here =====",id)
    useEffect(()=>{
        handleClickForPinned(),
        handleClickForCheck()
    },[pointer,add])
    return(
        <>
        <div className="w-full grid grid-cols-4 pt-8  ">
            {
                data.map((item,i)=>{
                    return i>0 ?<div className="p-4" key={i}> 
                    <div className="w-[100%] border p-2 cursor-pointer shadow-2xl group transition-all duration-3000 ease-in-out " >
                        <div className="p-2 flex justify-between">
                        <div onClick={()=>{
                            setId([...id,i]) 
                             setPointer(!pointer)}} className="hidden group-hover:block">
                            {check}
                        </div>
                        <div onClick={()=>{setAdd(!add)}} className="hidden group-hover:block  ">
                        {pinned}
                        </div>
                        </div>
                        <h1 className="text-xl p-2 font-medium">{item.title}</h1>
                        <p className=" text-lg p-2">{item.content}</p>
                        <div className="flex gap-2 justify-end items-center p-2">
                        < AiOutlineBgColors className=" cursor-pointer hidden group-hover:block"/>
                        <CiImageOn className="cursor-pointer hidden group-hover:block"/>
                        <IoMdMore className="hidden group-hover:block"/>
                        </div>
                    </div>
                    </div> : <div className="w-full"> 
                    <h1 className="text-center">No any item exist</h1>
                    </div>
                })
            }
        </div>
        </>
    )
}
export default ViewGrid