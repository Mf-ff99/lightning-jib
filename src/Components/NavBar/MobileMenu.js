import styled from 'styled-components'
import React from 'react'
import { disableBodyScroll, enableBodyScroll, clearAllBodyScrollLocks } from 'body-scroll-lock';
import { Link } from 'react-router-dom';


const UL = styled.ul`
    list-style: none;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 100vh;
    margin-left: 0;
    margin-top: 0;
    margin-bottom: 0;
    padding-left: 0;
    z-index: 100;
    overflow: hidden;
    /* font-family: 'Open Sans', sans-serif; */
    /* font-family: 'Righteous', cursive; */
    /* font-family: 'Fugaz One', cursive; */
font-family: 'K2D', sans-serif;
    font-weight: 600;
    max-width: 700px;
    /* background-color: black; */
    img {
        padding: 0;
        height: 90px;
         
    }
    
    a {
        color: white !important;
        transition: .5s ease-in-out;
    }

    a:hover {
        /* position: fixed; */
        /* left: 0; */

        color: gray !important;
        transition: .5s ease-in-out;
    }

    .logo-text-left a {
        width: 100px;
        display: flex;
        flex-wrap: wrap;

    }

    .logo {
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-left: 0;
    }

    .right-side-nav {
        right: 0;
        
    }
    @media (max-width: 480px) {
        display: flex;
        flex-direction: column !important;
        justify-content: center !important;
        align-items: center !important;
        background-color: black;
        position: fixed;
        transform: ${({open}) => open ? 'translateY(0)' : 'translateY(-100%)'};
        top: 0;
        right: 0;
        height: 100vh;
        width: 75vw !important;
        border-left: 1px solid black;
        border-radius: 3px;
        padding: 15px 0 0 0;
        transition: .3s ease-in-out;
        z-index: 1000;
        /* opacity: .8; */
        a {
            font-size: 18px;
            color: white !important;
        /* font-size: 18px; */
    }
    li {
        color: white;
    }

    .home-nav-link {
        @media (min-width: 658px) {
            display: none;
        }
    }
    
    .logo {
        flex-direction: column;
        justify-content: center !important;
    }
}
@media (min-width: 769px) {
        a {
            font-size: 22px !important;
            /* margin-bottom: 20px !important; */
        }
    }
`

class MobileNav extends React.Component {
    componentDidMount() {
        // 2. Get a target element that you want to persist scrolling for (such as a modal/lightbox/flyout/nav).
        // Specifically, the target element is the one we would like to allow scroll on (NOT a parent of that element).
        // This is also the element to apply the CSS '-webkit-overflow-scrolling: touch;' if desired.
        this.targetElement = document.querySelector('#mobile-nav');
        
    }
    
    showTargetElement = (open) => {
          if(open = true) enableBodyScroll(this.targetElement);
         
      } 
    render() {
        let open = this.props.open
        if(open) disableBodyScroll(this.targetElement)
        if(!open) clearAllBodyScrollLocks()
        return (
            <UL id='mobile-nav' open={open}>
            {/* <li className="right-side-nav">
                <a href="/showreel">NavItem</a>

            </li>
            <li className="right-side-nav">
                <a href='/tools'>NavItem</a>
            </li> */}
            <li className="right-side-nav home-nav-link">
                <Link to='/'>Home</Link>
            </li>
            <li className="right-side-nav">
                <Link to='/learn-more'>Learn More</Link>
            </li>
            <li className="right-side-nav">
                <Link to="/contact">Contact Us</Link>

            </li>
            <li className="right-side-nav">
                <Link to="/about-our-team">About Our Team</Link>

            </li>
        </UL>
    )
}

}

export default MobileNav