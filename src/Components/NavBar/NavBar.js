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
    height: 100px;
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
    border-bottom: 2px solid #f1f1f1;
    font-size: 18px;

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
        /* padding: 0 0 0 10px; */
    }

    .logo span {
        display: flex;
        flex-direction: column;
        flex-wrap: wrap;
        width: 20px;
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

                <span className="logo"><a href='/'><h1>Lightning Jib</h1></a></span>
          
                </StyledLogo>
                
                <Burger />
                
            </NavStyled>
        )
    }
}