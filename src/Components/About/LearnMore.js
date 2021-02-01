// import ReactPlayer from 'react-player/lazy'
// import Background from '../../assets/videos/lightning-background.mp4'
import images from '../../assets/images/BarreledImages'

const LearnMore = () => {

    return (
        <div className='learn-more'>
            <div className='page-view-wrapper'>
                <div className='page-div light-div'>
                    <div className='page-div-text-container'>

                <h2 className='page-div-header'>LIGHTNING FAST SETUP TIME</h2>
                <p>Lightning Jib brings unparalleled creativity and convenience to the world of camera cranes. Boasting a 15 minute setup time, and a 12 minute strike time, The Lightning Jib is an obvious choice for filmmakers of all kinds.</p>
                    </div>
                <img src={images.LJSkew} alt='Lightning Jib' />
                </div>
                <div className='page-div dark-div'>
                <img src={images.LJPacked} alt='Lightning Jib' />
                    <div className='page-div-text-container'>

                <h2 className='page-div-header'>GET YOUR CRANE ANYWHERE YOU NEED</h2>
                <p>The Lightning Jib is stored in a lightweight pelican case easily carried and maneuvered by a single operator. An ideal choice for remote location shooting, transporting a cinematic crane package is the easiest its ever been. Start flying in minutes wherever you choose.</p>
                    </div>
                </div>
                <div className='page-div light-div'>
                    <div className='page-div-text-container'>
                <h2 className='page-div-header'>EFFORTLESS HANDHELD-JIB TRANSITIONS</h2>
                <p>Utilizing the Ronin S2, handheld-jib camera transitions have never been easier. Our custom slide-lock system can achieve smooth, seamless jib-handheld and handheld-jib transitions. Nail the shots that wow your client.</p>
                    </div>
                    <img src={images.LJHero} alt='Lightning Jib' />
                </div>
                <div className='page-div dark-div'>
                    <div className='page-div-text-container'>
                <h2 className='page-div-header'>THE LIGHTNING JIB</h2>
                <p></p>
                <ul>
                    <li>Overall weight: </li>
                    <li>Length: </li>
                    <li>Lens reach: </li>
                    <li>Gimbal: Ronin S2</li>
                    <li></li>
                </ul>
                    </div>
                    <img src={images.OutdoorLJ} alt='Lightning Jib' />
                </div>
                <div className='page-div light-div'>
                    <img src={images.OutdoorLJ} alt='Lightning Jib' />
                    <div className='page-div-text-container'>
                <h2 className='page-div-header'>LIGHTNING JIB PACKAGES</h2>
                <p></p>
                <ul>
                    <li>Price: </li>
                </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LearnMore