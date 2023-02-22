import React, { useState, useEffect } from 'react'

const Slider02 = () => {


    const phase = [
        {
            label:
                <>
                    <p className="">⦿ Lorem Ipsum 1</p>
                    <p className="">⦿ Lorem Ipsum 2</p>
                    <p className="">⦿ Lorem Ipsum 3</p>
                    <p className="">⦿ Lorem Ipsum 4</p>
                </>
        },
        {
            label:
                <>
                    <p className="">⦿ Lorem Ipsum 1</p>
                    <p className="">⦿ Lorem Ipsum 2</p>
                    <p className="">⦿ Lorem Ipsum 3</p>
                    <p className="">⦿ Lorem Ipsum 4</p>
                </>
        },
        {
            label:
                <>
                    <p className="">⦿ Lorem Ipsum 1</p>
                    <p className="">⦿ Lorem Ipsum 2</p>
                    <p className="">⦿ Lorem Ipsum 3</p>
                    <p className="">⦿ Lorem Ipsum 4</p>
                </>
        },
        
    ]

    const [current, setCurrent] = useState(0)

    const onEnter = (e) => {
        setCurrent(e)
    }

    const onLeave = () => {
        setCurrent(0)
    }

    return (
        <section className='w-full h-screen py-20'>
            <div className="w-full max-w-[1700px] px-10 mx-auto">
                <h1 className=" text-center text-5xl font-bold">ROADMAP 02</h1>

                <div className='overflow-x-scroll lg:overflow-x-hidden'>
                    <div className="flex max-w-[40rem] mx-auto mt-12 gap-x-2 min-w-[35rem]">
                        {phase.map((items, index) => {
                            return (
                                <div className="h-auto flex flex-col items-center py-10 relative border-x-[1px] border-black transition-all ease-in-out duration-300" key={index} style={current === index ? { flexGrow: "3" } : {}} onMouseEnter={() => { onEnter(index) }} onMouseLeave={onLeave}>
                                    <div className="absolute left-0 top-0 h-2 w-full" style={current === index ? { backgroundColor: "black" } : { backgroundColor: "#333333" }}></div>
                                    <div className="font-bold text-2xl">Phase {index + 1}</div>
                                    <div className='mt-4 flex flex-col gap-y-4  transition-all ease-in-out duration-300 origin-top' style={current === index ? { scale: "1" } : { scale: "0" }}>
                                        {items.label}
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>




            </div>
        </section>
    )
}

export default Slider02