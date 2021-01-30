import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'
import images from '../../assets/images/BarreledImages'

const StyledLogo = styled.div`

    display: flex;
    align-items: center;
    padding-right: 10px;
    font-family: 'Montserrat', sans-serif;
    font-weight: 600;
    h1 {
        font-size: 15px !important;
    }
    img {
        padding: 0;
        height: 90px; 
    }
    
    a {
        color: white !important;
    }

    .logo-text-left a {
        width: 100px;
        display: flex;
        flex-wrap: wrap;

    }

    @media (min-width: 768px) {
        /* display: none !important; */
        /* color: red !important; */
        flex-direction: column;
    }
`;

const NavStyled = styled.nav`
    top: 0;
    left: 0;
    right: 0;
    height: 140px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    list-style: none;
    background-color: black;
    color: white !important;
    z-index: 1;
    opacity: .95;
    overflow-x: hidden;
    box-shadow: 10px 10px 12px #333;
    border-bottom: 1px solid #333;

    .logo {
        padding: 15px 0;
    }

    ul {
        list-style: none;
        display: flex;
        flex-flow: nowrap;
        flex-direction: row;
        justify-content: space-around;
        width: 100%;
        color: white !important;
    }

    li {
        margin: 18px 10px;
    }

    a {
        color: whitesmoke !important;
        text-decoration: none;
        /* font-size: 12px; */
        transition: .5s ease-in-out;
    }
    .logo {
        margin: 0;
        max-width: 200px;
        padding-left: 20px;
       
        &:before {
            content: "";
            /* border: 1px solid red; */
            width: 100%;
            color: transparent;
            height: 100%;
            position: absolute;
            background-image: url(${images.LightningBoltGraphic});
            background-repeat: no-repeat;
            left: 1%;
            top: 0px;
            opacity: .5;
            z-index: -1;
            zoom: .2;
            @media (min-width: 658px) {
                zoom: .39;
                left: 10%;
            }
            @media (min-width: 968px) {
                left: 45%
            }
        }
        &:after {
            content: "";
            /* border: 1px solid red; */
            width: 100%;
            color: transparent;
            height: 100%;
            position: absolute;
            background-image: url(${images.LightningBoltGraphic});
            background-repeat: no-repeat;
            /* background-size: cover; */
            transform: scaleX(-1);
            /* transform: skewX(35deg); */
            top: 0px;
            right: 10%;
            z-index: -1;
            opacity: .62;
            zoom: .15;
            @media (min-width: 658px) {
                right: 10%;
                zoom: .28
            }
            @media (min-width: 968px) {
                right: 45%
            }
        }

        @media (min-width: 450px) {
            max-width: 500px;
            padding-left: 0;
        }
        @media (min-width: 658px) {
            border: 1px solid white;
        border-radius: 5px;
        margin-top: 20px;
        }
    }
    .logo a span {
       /* max-width: 100px; */
    }
    .logo a span {
        font-size: 30px;
        max-width: 100px;
        margin-left: 20px;
        /* font-family: 'Righteous', cursive; */
        /* font-family: 'Monoton', cursive; */
        /* font-family: 'Black Ops One', cursive; */
        /* font-family: 'Faster One', cursive; */
        font-family: 'Major Mono Display', monospace;
        letter-spacing: 4px;
        @media (min-width: 658px) {
            font-size: 43px;
            margin-left: 5px;
        }
        
        @media (min-width: 500px) {
            width: 20%;
            /* max-width: 150px */
        }
    }
    .logo-text-left a{
        /* width: 120px !important; */
    }
    @media (max-width: 770px) {
        justify-content: space-between;
        flex-direction: row;
        /* padding: 10px; */
        width: 100vw;
    }
    @media (min-width: 480px) {
        flex-direction: column;
    } 
`;

export default class Nav extends React.Component {


    render() {
        return (
            <NavStyled>
                <StyledLogo>

                <span className="logo"><a href='/'><span>Lightning Jib</span></a></span>
          
                </StyledLogo>
                
                <Burger />
                
            </NavStyled>
        )
    }
}