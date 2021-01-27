import React from 'react'
import styled from 'styled-components'
import Burger from './Burger'

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
    height: 120px;
    width: 100vw;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    list-style: none;
    /* width: 90%; */
    background-color: black;
    color: white !important;
    z-index: 1;
    /* margin: 0; */
    /* border-bottom: 2px solid #f1f1f1; */
    font-size: 18px;
    padding: 10px;
    opacity: .95;
    overflow-x: hidden;

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
        padding: 18px 10px;
    }

    a {
        color: whitesmoke !important;
        text-decoration: none;
        font-size: 15px;
    }
    .logo {
        margin: 0;
        max-width: 200px;
        padding-left: 20px;
        @media (min-width: 450px) {
            max-width: 500px;
            padding-left: 0;
        }
    }
    .logo a span {
       /* max-width: 100px; */
    }
    .logo a span {
        font-size: 35px;
        max-width: 100px;
        margin-left: 20px;
        /* font-family: 'Righteous', cursive; */
        /* font-family: 'Monoton', cursive; */
        /* font-family: 'Black Ops One', cursive; */
        font-family: 'Faster One', cursive;

        letter-spacing: 4px;
        @media (min-width: 658px) {
            font-size: 48px;
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
        padding: 10px;
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