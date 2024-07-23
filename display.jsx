import React from "react";

function Display({displayVal}){
    return(
        <>
        <input type="text" className='bg-[#121E28] h-[160px] text-5xl font-semibold px-2 text-right text-white mb-8 mt-4 py-4 w-full' value={displayVal} readOnly/>
        </>
    )
}
export default Display