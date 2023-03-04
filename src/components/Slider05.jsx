import React, { useState, useRef } from 'react'
import { motion, useScroll, useTransform,  useSpring } from 'framer-motion'


const Slider05 = () => {

    const [clicked, setClicked] = useState(false)
    const ref = useRef(null)
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end end"]
    })

    const scaleSpring = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
      });
    

    const opacity = useTransform(scrollYProgress, [0.3, 1], [0, 1])
    const scale = useTransform(scaleSpring, [0.3, 1], [4, 1])


    const handleClick = () => {
        setClicked(true)
    }

    return (
        <motion.section className='w-full h-screen py-2 flex items-center justify-center border-2' ref={ref}>
            <motion.h1 className='text-center text-5xl font-bold' style={{ opacity, scale }}>ROADMAP 05</motion.h1>
        </motion.section>
    )
}

export default Slider05