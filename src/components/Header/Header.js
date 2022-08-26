import React, { useEffect, useRef, useState } from 'react';
import styled from 'styled-components';
import { IoIosHome, IoIosMailOpen } from 'react-icons/io';
import { GoPerson } from 'react-icons/go';
// import { IoMailOpenOutline } from 'react-icons/io';
import { FaBars, FaClosedCaptioning } from 'react-icons/fa';
import { FaOctopusDeploy } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import "./style.css";

const Header = () => {


    const cursor = document.querySelector(".cursor");
    const cursor2 = document.querySelector(".cursor2");
    let timeOut;

    // let [ menuOpen, setMenuOpen ] = useState(FaClosedCaptioning);

    // useEffect(() => {
    //     menuBtn.addEventListener("click", () => {
    //         if (!menuOpen) {
    //             menuBtn.classList.add('open');
    //             setMenuOpen(true);
    //         } else {
    //             menuBtn.classList.remove('open');
    //             setMenuOpen(false);
    //         }
    //     });
    // });

    useEffect(() => {
        window.addEventListener("mousemove", (e) => {
            let x = e.pageX;
            let y = e.pageY;

            console.log(x, y);
            cursor.style.top = `${y}px`;
            cursor.style.left = `${x}px`;
            cursor2.style.top = `${y}px`;
            cursor2.style.left = `${x}px`;

            cursor.style.display = "block";
            cursor2.style.display = "block";

            const stopMouse = () => {
                cursor.style.display = "none";
                cursor2.style.display = "none";
            };
            clearTimeout(timeOut);
            timeOut = setTimeout(stopMouse, 1000);
        });

        document.addEventListener("mouseout", () => {
            cursor.style.display = "none";
            cursor2.style.display = "none";
        });

        const menuBtn = document.querySelector('.menuBtn');
        const mobileMenu = document.querySelector('.slide');

        menuBtn.addEventListener("click", () => {
            menuBtn.classList.toggle("open");
            mobileMenu.classList.toggle("open");
        });
    }, []);
    return (
        <Container>
            <Wrapper>
                {/* <Logo></Logo> */ }
                <Bar id="menu" className="menuBtn" onClick={ () => {
                    document.getElementById('slide').style.left = '2000px';
                    // document.getElementById()
                } }>
                    <Line1 className="burger"></Line1>
                </Bar>
                <Holder>
                    <Nav><p>Home</p> <Span to='/'><Icon1 /></Span></Nav>
                    <Nav><p>About</p> <Span to='/about'><Icon2 /></Span></Nav>
                    <Nav><p>Portfolio</p> <Span to='/portfolio'><Icon3 /></Span></Nav>
                    <Nav><p>Contact</p> <Span to='contact'><Icon4 /></Span></Nav>
                </Holder>
                <Holder2 className='slide'>

                    <NavHold>
                        <Nav2 to='/'><Span2><Icon1 /></Span2><p>HOME</p></Nav2>
                        <Nav2 to='/about'><Span2><Icon2 /></Span2><p>ABOUT</p></Nav2>
                        <Nav2 to='/portfolio'> <Span2><Icon3 /></Span2><p>PORTFOLIO</p></Nav2>
                        <Nav2 to='contact'><Span2><Icon4 /></Span2><p>CONTACT</p></Nav2>
                    </NavHold>
                </Holder2>
            </Wrapper>

            <Cursor className="cursor"></Cursor>
            <Cursor2 className="cursor2"></Cursor2>
        </Container>
    );
};

export default Header;

const Line1 = styled.div`

    /* margin: 10px 10px 5px 5px; */
`;

const Bar = styled.div`
display: none;

    @media (max-width: 920px){
/* position: relative; */
    width: 50px;
    z-index: 11;
    height: 35px;
    /* border-radius: 5px; */
    margin-top: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    /* border: 2px solid #fff; */
    transition: all .5s ease-in-out;
    /* background-color: gray; */
    }

`;

const Cursor2 = styled.div`
    width: 10px;
    height: 10px;
    /* border: 1px solid ; */
    background-color: rgb(255, 187, 0);
    border-radius: 50%;
    position: fixed;
    left: 0px;
    top: 0px;
    pointer-events: none;
    transform: translate(-50%, -50%);
`;
const Cursor = styled.div`
    width: 40px;
    height: 40px;
    border: 1px solid rgb(255, 187, 0);
    border-radius: 50%;
    position: fixed;
    left: 0px;
    top: 0px;
    pointer-events: none;
    transform: translate(-50%, -50%);
    transition: .1s;

`;
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
const Span2 = styled.div`

    text-decoration: none;
    color: white;
    display: flex;
    align-items: center;
    margin-right: 15px;
`;
const NavHold = styled.div`
    padding-top: 60px;
`;
const Nav2 = styled(NavLink)`
    font-size: 25px;
    /* background-color: gray; */
    display: flex;
    margin-left: 35px;

    border-bottom: 1px solid gray;
    cursor: pointer;
    text-decoration: none;
    color: #fff;

   :hover{
    ${Span2}{
        color: gold;
    }
    p{
        color: gold;
    }
   }

   &.active{
      ${Span2}{
        color: gold;
    }
    p{
        color: gold;
    }
   }
`;
// const Nav = styled.div``

const Holder2 = styled.div`
        display: none;


    @media (max-width: 920px){
        display: block;
    width: 100%;
    min-height: 100vh;
    background-color:  rgb(50, 50, 50);
    border-bottom: 1px solid white;
    position: fixed;
    top: 0;
    /* bottom: 0; */
    left: -100%;
    transition: all .5s;
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
    @media (max-width: 920px){
        
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
    /* background-color: blue; */

    display: flex;
    justify-content: flex-end;
    align-items: center;
    /* background-color: red; */
    /* flex-direction: row; */

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
    /* cursor: none; */

    @media (max-width: 920px){
        height: 50px;
    }

    /* max-height: 200vh; */
`;