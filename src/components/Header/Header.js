import React from 'react';
import styled from 'styled-components';

const Header = () => {
    return (
        <Container>
            <Wrapper>
                <Logo>DevUps</Logo>
                <Holder>
                    <Nav>Home</Nav>
                    <Nav>About</Nav>
                    <Nav>Contact</Nav>
                </Holder>
            </Wrapper>
        </Container>
    );
};

export default Header;

const Nav = styled.div`
    font-weight: 600;
    cursor: pointer;
    position: relative;
    /* z-index: 1; */

    ::before{
        content: "";
        position: absolute;
        border-bottom: 2px solid gold;
        /* background-color: red; */
        height: 23px;
        width: 40px;
        
        /* z-index: 1; */
        transform: scaleX(0);
        transform-origin: left;
        transition: all .7s ease;
    }

    :hover::before{
        transform: scaleX(1);
    }
`;
const Holder = styled.div`
    display: flex;
    justify-content: space-between;
    width: 300px;

    /* @media (max-width: 508px) {
        display: none;
    } */
`;
const Logo = styled.div`
    font-size: 25px;
    font-weight: 700;
`;
const Wrapper = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;
const Container = styled.div`
    width: 100%;
    height: 70px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: black;
    color: #fff;
`;