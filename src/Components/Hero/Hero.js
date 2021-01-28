import React from 'react'
import { Animated } from 'react-animated-css'
import images from '../../assets/images/BarreledImages'
import ReactPlayer from 'react-player/lazy'
import LearnMore from '../About/LearnMore'

export default function Hero() {


    return (
        <>
        <div className='wrapper'>
            <Animated animationIn='slideInRight' animationDuration={900} animationDelay={100}>
                <div className='fixed-bg bg-1'>
                    {/* <img src={images.LJCloseup} alt='Lightning Jib' /> */}
                </div>
                <div className='hero'>
                    <h2>Lightning</h2>
                    <h2>Jib</h2>
            {/* <Animated animationIn='fadeIn' animationDuration={800} animationDelay={500}> */}

                    <h3>Innovation In Motion</h3>
                {/* </Animated> */}
                </div>
            </Animated>
        

        <div className='scroll-bg'>
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
                    <div>
        <h1>Introducing The Lightning Jib</h1>
        <p>
                        The Lightning Jib is a new, innovative tool joining the arsenal of film and television production equipment. With its time-efficient build and strike feature, the Lightning Jib is always ready for the next jib or handheld gimbal shot.
            </p>
            </div>
                </div>
                <div className="fixed-bg bg-2">
                <div>
    <h1>Lightning Fast, Transport With Ease</h1>
    <p>flying your favorite camera package has never been easier. The Lightning Jib can be transported and operated by one person with a 'insert dimensions here' case</p>
        </div>
  </div>
        <div className='scroll-bg'>
                    <div className='image-container'>
                        <img src={images.LJBlackWhite} alt='Lightning Jib Outdoors' />
                    </div>
                    <div>
                    <h1>Built by Directors, For Directors</h1>
                    <p>The Lightning Jib is a lightweight alternative for jib-shots. Extending to 18' feet in length and boasting a 15 minute setup/strike-time, achieving dynamic shots has never been simpler. Control the Ronin RS2 package using joystick, wheels, or a wirelessly connected smart-device.</p>
            </div>
                </div>
                <div className="fixed-bg bg-3">
                <div>
    <h1>Gimbal Quick-Release Technology</h1>
    <p>achieving cinematic, seamless jib to handheld shots has never been easier</p>
        </div>
  </div>
  
                <div className='scroll-bg'>
                    <div className='image-container'>
                        <img src={images.LJInStudio} alt='Lightning Jib Outdoors' />
                    </div>
                    <div>
        <h1>Effortless Transitions</h1>
                    <p>
                        The Lightning Jib utilizes a custom quick-release system that allows for an effortless, smooth transitions between jib and handheld operation.
            </p>
            </div>
                </div>

            {/* </Animated> */}
            </div>
        </>
    )

}

