import { useState } from "react";
import Note from "./Note";
import ShowNote from "./ShowNote";
import ViewGrid from "./ViewGrid";


function Main(){
    const [isOpen , setIsOpen]=useState(false)
    const [data,setData]=useState([{
        title:"",
        note:""
    }])
    console.log(data)
    
    function open(){
        setIsOpen(isOpen)
    }
    return(
        <>
        <div className="w-[100vw] pt-20 ">
            {
                !isOpen ? (
                    <div className="w-[100vw] h-[20%] flex flex-col items-center">
                    <ShowNote setIsOpen={setIsOpen} />
                    </div>
                ):(     
                    <div className="w-[100vw] h-[20%] flex flex-col items-center">
                    <Note setIsOpen={setIsOpen} setData={setData}/>
                    </div>
                )
            }
            <div className=" w-full  p-10">
            <ViewGrid data={data}/>
            </div>
        </div>

        </>
    )
}
export default Main