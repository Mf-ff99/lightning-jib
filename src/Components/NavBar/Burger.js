import React, { useState } from 'react'
import styled from 'styled-components'
import MobileNav from './MobileMenu';

const StyledBurger = styled.div`
margin-top: 5px;
    width: 2rem;
    height: 2rem;
    top: ${({ open }) => open ? '30px' : '10px'};
    right: 30px;
    padding-bottom: 20px;
    margin-right: 10px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    z-index: 4000;
    /* float: right; */
    position: ${({ open }) => open ? 'fixed' : 'relative'};
    transition: .5s ease-in-out;
    /* z-index: 100; */
    div {
        width: 2rem;
        height: .25rem;
        border: 1px solid black;
        border-radius: 10px;
        background-color: ${({ open }) => open ? '#FFFFEA;' : '#FFFFEA;'};
        transform-origin: 1px;
        transition: all .3s;
        transform: ${({ open }) => open ? 'rotate(90deg)' : 'rotate(0deg)'};

        &:nth-child(1) {
            transform: ${({ open }) => open ? 'rotate(45deg)' : 'rotate(0)'};
        } 
        
        &:nth-child(2) {
            transform: ${({ open }) => open ? 'translateY(100%)' : 'translateY(0%)'};
            
            opacity: ${({ open }) => open ? '0' : '1'};
        
        }

        &:nth-child(3) {
            transform: ${({ open }) => open ? 'rotate(-45deg)' : 'rotate(0)'};
        }
    }

    @media (min-width: 960px) {
        display: none !important;
    }
`;
const Burger = () => {
    const [open, setOpen] = useState(false)

    return (
        <>
            <StyledBurger open={open} onClick={() => setOpen(!open)}>
                <>
                    <div></div>
                    <div></div>
                    <div></div>
                </>
            </StyledBurger>
            <MobileNav open={open} setOpen={setOpen} />
        </>
    )
}

export default Burger