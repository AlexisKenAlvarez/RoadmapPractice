import React from 'react'

const Lines = ({ num, index }) => {
    return (
        <div className='w-full h-full relative'>
            <div className='absolute h-12 w-12 rounded-full bg-black  flex items-center justify-center text-black font-bold font-poppins z-10 transition-all ease-in-out duration-300' style={index >= parseInt(num - 1) ? { opacity: "100%", scale: "1" } : { opacity: "50%", scale: "0.7" }}>
                {/* <img src="/shield.webp" alt="Shield" className="absolute z-0 top-[-.3rem] w-[3rem]" /> */}
                <p className='relative z-10 text-white'>{num}</p>

            </div>
            <div className='absolute h-[2px] w-0 rounded-full bg-black top-0 bottom-0 my-auto left-4 transition-all ease-in-out duration-500' style={index >= parseInt(num) ? { width: "100%" } : {}}></div>
        </div>
    )
}

export default Lines