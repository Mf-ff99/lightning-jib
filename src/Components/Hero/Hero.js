import React from 'react'
import { Animated } from 'react-animated-css'
import images from '../../assets/images/BarreledImages'

export default function Hero() {


    return (
        <>
        <Animated animationIn='fadeIn' animationDuration={800} animationDelay={500}>
        <div className='hero'>
            <h2>Lightning</h2>
            <h2>Jib</h2>
            <h3>Innovation In Motion</h3>
        </div>
        <div className='background-hero'>
            <img src={images.LJBlackWhite} alt='Lightning Jib' />
        </div>
        </Animated>
        </>
    )

}

