import React, { useState, useEffect, useRef } from 'react'
import * as THREE from 'three'
import p5 from 'p5'
import BIRDS from 'vanta/dist/vanta.birds.min'


const Vanta = () => {
    const [vantaEffect, setVantaEffect] = useState(null)
    const myRef = useRef(null)

    useEffect(() => {
        if (!vantaEffect) {
            setVantaEffect(BIRDS({
                el: myRef.current,
                mouseControls: true,
                touchControls: true,
                gyroControls: false,
                minHeight: 200.00,
                minWidth: 200.00,
                scale: 1.00,
                scaleMobile: 1.00,
                backgroundColor: 0x161616,
                color1: 0xff3b00,
                color2: 0x823838

            }))
        }
        return () => {
            if (vantaEffect) vantaEffect.destroy()
        }
    }, [vantaEffect])

    return (
        <div className='w-full h-screen bg' ref={myRef}>Vanta</div>
    )
}

export default Vanta