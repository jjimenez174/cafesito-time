import React, { useState } from 'react';
import styled from 'styled-components';
import Sidebar from './Sidebar';

const StyledBurger = styled.div`
display: none;

@media screen and (max-width: 1200px){    
    width: 2rem;
    height: 2rem;
    position: relative;
    top: 15px;
    display: flex;
    justify-content: space-around;
    flex-flow: column nowrap;
    cursor: pointer;
    z-index: 10;
    

    .burger-line{
      width: 2rem;
      height: 0.25rem;
      background-color: ${({open}) => open ? '#333' : '#333'};
      border-radius: 10px;
      transform-origin: 1px;
      transition all ease-in 0.3s;
        
      &:nth-child(1){
        transform: ${({open}) => open ? 'rotate(45deg)' : 'rotate(0)'};
      }

      &:nth-child(2){
        transform: ${({open}) => open ? 'translateX(-100%)' : 'translateX(0%)'};
        opacity: ${({open}) => open ? 0 : 1};
      }

      &:nth-child(3){
        transform: ${({open}) => open ? 'rotate(-45deg)' : 'rotate(0)'};
      }
    
    }
}
   
`;

const Burger = () => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
      setOpen(!open)
  }
    
    return (
        <>
        {/* <StyledBurger id="burger" open={open} onClick={() => setOpen(!open)}> */}
        <StyledBurger id="burger" open={open}  onClick={toggle}>
            <div className="burger-line"/>
            <div className="burger-line"/>
            <div className="burger-line"/>
            
        </StyledBurger>
        < Sidebar open={open} toggle={toggle}/>
        </>
    )
}

export default Burger;
