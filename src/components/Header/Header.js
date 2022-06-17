import React from 'react';
import styled from 'styled-components';
import { IoIosHome, IoIosMailOpen } from 'react-icons/io';
import { GoPerson } from 'react-icons/go';
// import { IoMailOpenOutline } from 'react-icons/io';
import { FaOctopusDeploy } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';

const Header = () => {
    return (
        <Container>
            <Wrapper>
                {/* <Logo></Logo> */ }
                <Holder>
                    <Nav><p>Home</p> <Span to='/'><Icon1 /></Span></Nav>
                    <Nav><p>About</p> <Span to='/about'><Icon2 /></Span></Nav>
                    <Nav><p>Portfolio</p> <Span to='/portfolio'><Icon3 /></Span></Nav>
                    <Nav><p>Contact</p> <Span to='contact'><Icon4 /></Span></Nav>
                </Holder>
                <Holder2>
                    <Nav2><Span to='/'><Icon1 /></Span></Nav2>
                    <Nav2><Span to='/about'><Icon2 /></Span></Nav2>
                    <Nav2> <Span to='/portfolio'><Icon3 /></Span></Nav2>
                    <Nav2><Span to='contact'><Icon4 /></Span></Nav2>
                </Holder2>
            </Wrapper>
        </Container>
    );
};

export default Header;

const Icon4 = styled(IoIosMailOpen)``;
const Icon3 = styled(FaOctopusDeploy)``;
const Icon2 = styled(GoPerson)``;
const Icon1 = styled(IoIosHome)`

`;
const Span = styled(NavLink)`
    width: 50px;
    height: 50px;
    border-radius: 50%;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 1;
    background-color: rgba(0,0,0,0.4);


    :hover{
        background-color: rgb(255, 187, 0);
        cursor: pointer;
    }
    &.active{
        background-color: rgb(255, 187, 0);
    }
`;
// const Nav = styled.div``
const Nav2 = styled.div``;
const Holder2 = styled.div`
    display: none;

    @media (max-width: 768px){
        display: flex;
        /* flex-direction: row; */
        justify-content: space-between;
        height: 100vh;
        width: 100%;
        align-items: flex-end;
    }
`;
const Nav = styled.div`
    font-weight: 600;
    cursor: pointer;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 120px;
    // background-color: red;
    position: relative;
    /* z-index: -1; */
    border-radius: 50px;
    /* border: 1px solid gold; */


    /* z-index: 1; */
    ::before{
        content: "";
    background-color: rgb(255, 187, 0);
    position: absolute;
    right: 0px;
    width: 140px;
    height: 50px;
    border-radius: 50px;
    

    transform: translateX(0);
    transform-origin: right;
    transition: all 350ms;
    opacity: 0;
    }
    

    :hover::before{
        transform: translateX(1);
    border-radius: 50px;
    opacity: 1;

    }

    p{
        opacity: 0;
        transition: all .7s;
            transform: translateX(20px);
            @media (max-width: 768px){
       display: none;

    }

    }
    :hover{
        p{
            z-index: 1;
            transform: translateX(0);
        opacity: 1;
        }

    }
    
`;
const Holder = styled.div`
    display: flex;
    justify-content: space-between;
    width: 150px;
    height: 300px;
    align-items: center;
    flex-direction: column;

    /* @media (max-width: 508px) {
        display: none;
    } */
    @media (max-width: 768px){
        
        display: none;
        /* background-color: red; */
        /* justify-content: center; */

    }
`;
const Logo = styled.div`
    font-size: 25px;
    font-weight: 700;
    
`;
const Wrapper = styled.div`
    width: 95%;
    height: 100vh;

    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* background-color: red; */
    /* flex-direction: row; */

    @media (max-width: 768px){
        flex-direction: column;
    }
`;
const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    // flex-direction: column;
    /* background-color: black; */
    color: #fff;
    position: fixed;

    /* max-height: 200vh; */
`;