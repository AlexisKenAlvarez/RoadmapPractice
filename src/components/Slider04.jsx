import React, { useState } from 'react'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import Lines from '../utils/Lines';

const Slider04 = () => {

    const [currentSlideIndex, setCurrentSlideIndex] = useState(0)

    const handleAfterChange = (currentSlideIndex) => {
        setCurrentSlideIndex(currentSlideIndex);
        console.log('Current Slide Index: ', currentSlideIndex);
    };

    const settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        afterChange: handleAfterChange,
    };


    return (
        <section className='w-full h-auto px-10 bg-center text-black' id="Slider04">
            <h1 className='text-center text-5xl font-bold'>ROADMAP 04</h1>
            <div className='mx-auto w-fit h-auto mt-14 lg:max-w-[20.5rem] max-w-[18.5rem]'>
                <Slider {...settings}>
                    <div className='flex gap-y-4'>
                        <p>❖ Branding Created</p>
                        <p>❖ Website & Whitepaper Live</p>
                        <p>❖ Stealth Launch</p>
                        <p>❖ Social Channels Live</p>
                        <p>❖ Viking Community Growth and Competitions</p>
                    </div>
                    <div>
                        <p>❖ Branding Created</p>
                        <p>❖ Website & Whitepaper Live</p>
                        <p>❖ Stealth Launch</p>
                        <p>❖ Social Channels Live</p>
                        <p>❖ Viking Community Growth and Competitions</p>
                    </div>
                    <div>
                        <p>❖ Branding Created</p>
                        <p>❖ Website & Whitepaper Live</p>
                        <p>❖ Stealth Launch</p>
                        <p>❖ Social Channels Live</p>
                        <p>❖ Viking Community Growth and Competitions</p>
                    </div>
                </Slider>

            </div>

            <div className='w-full h-10 mt-20 flex'>
                <Lines num="1" index={currentSlideIndex} />
                <Lines num="2" index={currentSlideIndex} />
                <div className='w-[10rem] h-full relative transition-all ease-in-out duration-300' style={currentSlideIndex === 2 ? { opacity: "100%", scale: "1" } : { opacity: "50%", scale: "0.7" }}>
                    <div className='absolute h-12 w-12 rounded-full bg-black flex items-center justify-center text-black font-bold font-poppins z-10 '>
                        {/* <img src="/shield.webp" alt="Shield" className="absolute z-0 top-[-.3rem] w-[3rem] left-[1px]" /> */}
                        <p className='relative z-10 text-white'>
                            3

                        </p>
                    </div>
                </div>

            </div>
        </section>
    )
}

export default Slider04