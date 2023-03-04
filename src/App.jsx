import React, { useEffect, useRef, useState } from 'react'
import useWindowSize from '../hooks/useWindow'
import Slider01 from './components/Slider01'
import Slider02 from './components/Slider02'
import Slider03 from './components/Slider03'
import Slider04 from './components/Slider04'
import Slider05 from './components/Slider05'
import Vanta from './components/Vanta'


const App = () => {

    const windowSize = useWindowSize()
    const scrollContainer = useRef(null)

    const configs = {
        ease: .1,
        current: 0,
        previous: 0,
        rounded: 0
    }


    const smoothScroll = () => {
        configs.current = window.scrollY
        configs.previous += (configs.current - configs.previous) * configs.ease
        configs.rounded = Math.round(configs.previous * 100) / 100

        scrollContainer.current.style.transform = `translate3d(0, -${configs.rounded}px, 0)`
        requestAnimationFrame(() => smoothScroll())
    }

    useEffect(() => {
        requestAnimationFrame(() => smoothScroll())

        return (() => {
            document.body.style.height = 'auto'
        })
    }, [])

    useEffect(() => {
        document.body.style.height = `${scrollContainer.current.getBoundingClientRect().height}px`
    }, [windowSize.height])


    return (
        <div className='h-auto fixed top-0 left-0 w-full' ref={scrollContainer}>
            <Slider01 />
            <Slider02 />
            <Slider03 />
            <Slider04 />
            <Slider05 />
            <section className='h-screen w-full'>

            </section>
            {/* <Vanta/> */}
            {/* <Slider05 /> */}


        </div>

    )
}

export default App