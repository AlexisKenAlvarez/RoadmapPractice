import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



const Slider03 = () => {

    const [currentIndex, setIndex] = useState(0)
    const [curr, setCurr] = useState(0)
    const [side, setSide] = useState(true)

    const phase = [
        {
            label:
                <>
                    ⦿ Lorem Ipsum 1 <br />
                    ⦿ Lorem Ipsum 2 <br />
                    ⦿ Lorem Ipsum 3<br />
                    ⦿ Lorem Ipsum 4<br />
                </>
        },
        {
            label:
                <>
                    ⦿ Lorem Ipsum 1 <br />
                    ⦿ Lorem Ipsum 2 <br />
                    ⦿ Lorem Ipsum 3<br />
                    ⦿ Lorem Ipsum 4<br />
                </>
        },
        {
            label:
                <>
                    ⦿ Lorem Ipsum 1 <br />
                    ⦿ Lorem Ipsum 2 <br />
                    ⦿ Lorem Ipsum 3<br />
                    ⦿ Lorem Ipsum 4<br />
                </>
        },
        {
            label:
                <>
                    ⦿ Lorem Ipsum 1 <br />
                    ⦿ Lorem Ipsum 2 <br />
                    ⦿ Lorem Ipsum 3<br />
                    ⦿ Lorem Ipsum 4<br />
                </>
        },
    ]

    const settings = {
        dots: true,
        infinite: false,
        speed: 200,
        slidesToShow: 1,
        slidesToScroll: 1,
        beforeChange: (current, next) => {
            setIndex(next)
            setCurr(current)
        },
    };

    useEffect(() => {
        if (currentIndex >= curr) {
            setSide(true)
        } else {
            setSide(false)
        }
    }, [currentIndex])



    return (
        <section className='w-full h-screen py-20'>
            <div className="w-full max-w-[1700px] px-10 mx-auto">
                <h1 className=" text-center text-5xl font-bold">ROADMAP 03</h1>

                <div className='max-w-[18rem] w-full h-auto mx-auto mt-10'>
                    <Slider {...settings} className="w-full">
                        {phase.map((items, index) => {
                            return (
                                <div className={`max-w-[18rem] w-full border-2 border-black h-auto py-14 transition-all ease-in-out duration-300 rounded-full ${index === currentIndex ? "scale-100 opacity-100" : "scale-75 opacity-75"} `} key={index}>
                                    <p className='text-center'>
                                        {items.label}
                                    </p>
                                </div>
                            )
                        })}
                    </Slider>

                    <div className="flex mt-20 rounded-lg overflow-hidden border-black border-2">
                        {phase.map((items, index) => {
                            return (
                                <div className={`w-auto px-2 border-2 border-l-0 border-t-0 border-b-0 border-black h-auto py-2 transition-all ease-in-out duration-500 relative ${index === currentIndex ? "grow text-white " : ""} `} key={index} style={index === phase.length - 1 ? { borderRight: "0px solid black" } : {}}>

                                    <div className="absolute h-full w-0 bg-black top-0 transition-all ease-in-out duration-300" 
                                    style={index == currentIndex ? side ? {left: "0", width: "100%"} : {right: "0", width: "100%"} : side ? {right: "0"} : {left: "0"}}></div>
                                    <p className='text-center relative z-10'>
                                        Phase {index + 1}

                                    </p>
                                </div>
                            )
                        })}
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Slider03