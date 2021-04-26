import React, { useRef } from 'react'
import images from '../assets/images/BarreledImages'
import ReactPlayer from 'react-player/lazy'
// import { IoIosWifi } from 'react-icons/fa';
// import Background from '/videos/lightning-background.mp4'


export default function Hero() {
    // create a ref for the background video
    const videoRef = useRef();
    // set the videoRef current playback rate to .03 * current playback rate.
    // assign ref to ReactPlayer
    const setPlayBack = () => {
        videoRef.current.playbackRate = 0.3;
    };

    return (
        <>
            <div className="parallax">
                <div className="parallax__group  group-one">
                    <div className="parallax__layer parallax__layer--back group-one bg-1">
                        <div className="fullscreen-bg">
                            {/* <div dangerouslySetInnerHTML={{ __html: ` */}
                            <ReactPlayer
                                url='/videos/lightning-background.mp4'
                                ref={videoRef}
                                loop={true}
                                volume={0}
                                muted={true}
                                // autoPlay={true}
                                playing={true}
                                // onCanPlay={() => setPlayBack()}
                                playsinline={true}
                                playbackRate={.6}
                                className='bg-video'
                            />
                            {/* ,
      ` }}> */}
                            {/* </div> */}

                        </div>
                    </div>
                    <div className="parallax__layer parallax__layer--base bg-image">
                        <div className='hero'>
                            <h2>Lightning</h2>
                            <h2>Jib</h2>
                            <h3>Innovation in Motion</h3>
                        </div>
                    </div>
                </div>
                <div className="parallax__group">
                    <div className="parallax__layer parallax__layer--back bg-2"></div>
                    <div className="parallax__layer parallax__layer--base blue-bg info-container parallax__video">
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
                            <h1>INTRODUCING THE LIGHTNING JIB</h1>
                            <p className='image-p'>
                                The Lightning Jib is a new, innovative tool joining the arsenal of film and television production equipment. With its time-efficient build and strike feature, the Lightning Jib is always ready for the next jib or handheld gimbal shot.
                        </p>

                        </div>
                    </div>
                </div>
                <div className="parallax__group">
                    <div className="parallax__layer parallax__layer--back bg-3"></div>
                    <div className="parallax__layer parallax__layer--base blue-bg">
                        <div className='hero-info-container'>
                            <div className='hero-info-div'>
                                <i class="fas fa-bolt fa-3x"></i>
                                <p>The Lightning Jib is built for speed and productivity. The jib can be easily transported by 1 person, making it an ideal choice for distant locations. There's nowhere this jib can't fly.</p>
                            </div>
                            <div className='hero-info-div'>
                                <i class="fas fa-camera fa-3x"></i>
                                <p>Fly your camera package of choice in a matter of minutes. Put your lens where you want, cinematic crane shots are always at your fingertips. The freedom is yours.</p>
                            </div>
                            <div className='hero-info-div'>
                                {/* <IoIosWifi></IoIosWifi> */}
                            <i class="fas fa-wifi fa-3x"></i>
                                <p>Control the DJI RS2 wirelessly with joystick and cinema wheels. Not a jib op? You can guide the camera with an Android or iOS device of your choice.</p>
                            </div>

                        </div>
                    </div>

                </div>
                <div className="parallax__group">
                    <div className="parallax__layer parallax__layer--back bg-4"></div>
                    <div className="parallax__layer parallax__layer--base blue-bg info-container">
                        <div className='image-container'>
                            <img src={images.LJBlackWhite} alt='Lightning Jib Outdoors' />
                        </div>
                        <div>
                            <h1>BUILT BY DIRECTORS, FOR DIRECTORS</h1>
                            <p className='image-p'>Extending to 18' feet in length and boasting a 15 minute setup/strike-time, achieving cinematic crane shots has never been easier. The Lightning Jib's compact build is location-friendly and ideal remote-locations, large-scale operations, concerts, churches, and sporting events.</p>
                        </div>
                    </div>

                </div>
                <div className="parallax__group">
                    <div className="parallax__layer parallax__layer--back bg-blue bg-5"></div>
                    <div className="parallax__layer parallax__layer--base info-container">
                        <div>
                            <h1>GIMBAL QUICK-RELEASE TECHNOLOGY</h1>
                            <p>achieving cinematic, seamless jib to handheld shots has never been easier</p>
                            <p>experience freedom of creativity with our one-of-a-kind gimbal-release system. Get the shots you've dreamed of.</p>
                        </div>

                        <div>
                            <h1>LIGHTNING FAST EVERYTHING</h1>
                            <p>flying your favorite camera package has never been easier. The Lightning Jib can be transported and operated by one person with a 'insert dimensions here' case</p>
                        </div>

                    </div>
                </div>
                {/* <div class="parallax__group">
  <div class="parallax__layer parallax__layer--back"></div>
  <div class="parallax__layer parallax__layer--base info-container">
  </div>
    
  </div> */}
                {/* <div class="parallax__group">
  <div class="parallax__layer parallax__layer--back"></div>
  <div class="parallax__layer parallax__layer--base">

  </div>
    ...
  </div> */}
            </div>
        </>
    )

}

