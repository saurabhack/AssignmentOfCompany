function ViewGrid({data}){
    return(
        <>
        <div className="w-full grid grid-cols-4 pt-8  ">
            {
                data.map((item,i)=>{

                    return i!=0 ?<div className="p-4"> 
                    <div className="w-[50%] border p-2 cursor-pointer shadow-2xl" key={i}>
                        <h1 className="text-xl text-center font-medium">{item.title}</h1>
                        <p className="text-center text-lg">{item.content}</p>
                    </div>
                    </div> :<div className="w-full"> 
                    <h1 className="text-center">No any item exist</h1>
                    </div>
                })
            }
        </div>
        </>
    )
}
export default ViewGrid