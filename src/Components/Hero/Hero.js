import React from 'react'
import { Animated } from 'react-animated-css'
import images from '../../assets/images/BarreledImages'
import ReactPlayer from 'react-player/lazy'

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
                    {/* <img src={images.LJCloseup} alt='Lightning Jib' /> */}
                </div>
        

        <div className='info-block video-block'>
                    <div className='video-container'>
                        <ReactPlayer
                        url='https://www.youtube.com/watch?v=O2UzCdbg1UM&feature=youtu.be'
                        playing={false}
                        controls={true}
                        loop={true}
                        width='100%'
                        // height='100%'
                        />
                    </div>
                    <p>
                        The Lightning Jib utilizes a custom quick-release system that allows for easily transitioning the camera package from jib to handheld with ease.
            </p>
                </div>
        <div className='info-block white-block image-right'>
                    <div className='image-container'>
                        <img src={images.LJBlackWhite} alt='Lightning Jib Outdoors' />
                    </div>
                    <p>
                        The Lightning Jib utilizes a custom quick-release system that allows for jib to handheld shot-transitions with ease.
            </p>
                </div>
                <div className='info-block image-left'>
                    <div className='image-container'>
                        <img src={images.LJInStudio} alt='Lightning Jib Outdoors' />
                    </div>
                    <p>
                        The Lightning Jib is a new, innovative tool joining the arsenal of film and television production equipment. With its time-efficient build and strike feature, the Lightning Jib is always ready for the next jib or handheld gimbal shot.
            </p>
                </div>

            </Animated>
        </>
    )

}

