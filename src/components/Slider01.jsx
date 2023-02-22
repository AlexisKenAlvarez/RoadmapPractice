import React, { useState, useEffect } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';



const Slider01 = () => {

    const [currentIndex, setIndex] = useState(0)

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
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        centerMode: true,
        beforeChange: (current, next) => setIndex(next),
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    centerMode: true,

                }
            }
        ]
    };

    useEffect(() => {
        console.log(currentIndex)
    }, [currentIndex])



    return (
        <section className='w-full h-screen py-20'>
            <div className="w-full max-w-[1700px] px-10 mx-auto">
                <h1 className=" text-center text-5xl font-bold">ROADMAP 01</h1>

                <div className='md:max-w-[45rem] max-w-[22rem] w-full h-auto mx-auto mt-10'>
                    <Slider {...settings} className="w-full">
                        {phase.map((items, index) => {
                            return (
                                <div className={`max-w-[15rem] w-full border-2 border-black h-auto py-10 transition-all ease-in-out duration-300 ${index === currentIndex ? "scale-100 opacity-100" : "scale-75 opacity-75"} `} key={index}>
                                    <p className='text-center'>
                                        Phase {index + 1}
                                        
                                    </p>
                                    <p className='text-center'>
                                        {items.label}
                                    </p>
                                </div>
                            )
                        })}

                    </Slider>

                </div>
            </div>
        </section>
    )
}

export default Slider01