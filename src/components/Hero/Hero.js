import React from 'react';
import { FaOctopusDeploy } from 'react-icons/fa';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';

const About = () => {
  return (
    <Container>
      <Wrapper>
        <Left>
          <ImageHold>
            <Image src='/images/pexels-tara-winstead-8849295.jpg' />
          </ImageHold>
        </Left>
        <Right>
          <Content>
            <Title><span>I'M David Okih.</span>
              <br />
              WEB/MOBILE DEVELOPER</Title>
            <Text>I'm a Nigeria based full stack developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
            </Text>

            <Nav to='/about'><p>More About Me</p> <Span><Icon3 /></Span></Nav>
          </Content>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default About;

const Icon3 = styled(FaOctopusDeploy)``;
const Span = styled.div`
    width: 55px;
    height: 55px;
    border-radius: 50%;
    color: #fff;
    font-size: 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: gold;

    :hover{
        background-color: rgb(255, 187, 0);
        cursor: pointer;
    }
`;
const Nav = styled(NavLink)`
    font-weight: 600;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 220px;
    position: relative;
    border-radius: 50px;
    border: 1px solid gold;
    text-decoration: none;
    color: #fff;
    z-index: 1;

    ::before{
      content: "";
      background-color: rgb(255, 187, 0);
      position: absolute;
      right: 0px;
      width: 0px;
      height: 55px;
      border-radius: 50px;
      z-index: -1;

      transition: all .7s;
      opacity: 0;
    }
    

    :hover::before{
      width: 220px;
      transition: all 350ms;

      border-radius: 50px;
      opacity: 1;
    }

    p{
      margin-left: 30px;
    }

`;
const Text = styled.div`
    font-weight: 600;
    margin-bottom: 30px;
`;
const Title = styled.div`
    font-weight: 700;
    font-size: 20px;
    margin-bottom: 30px;

    span{
      color: gold;
    font-size: 50px;

    }

    @media (max-width: 820px){
      font-size: 30px;

      span{
    font-size: 40px;

      }
    }
    @media (max-width: 768px){
      font-size: 30px;
    }
`;
const Content = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    /* width: 350px; */

   @media (max-width: 768px) {
        text-align: center;
    margin-bottom: 40px;
    align-items: center;

    }
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    border-radius: 10px;
    
    @media (max-width: 768px){
      border-radius: 50%;
    }
`;
const ImageHold = styled.div`
    width: 300px;
    height: 500px;
    background-color: red;
    border-radius: 10px;
    border-radius: 10px;

    @media (max-width: 768px){
      width: 150px;
      height: 150px;
      border-radius: 50%;
    }
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;

`;
const Wrapper = styled.div`
    width: 90%;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 90px;

     @media (max-width: 768px) {
        flex-direction: column;
        margin: 0;
    }
`;
const Container = styled.div`
    width: 100%;
    height: 100%;
    min-height: calc(100vh - 80px);
    display: flex;
    align-items: center;
    justify-content: center;
    margin-bottom: 50px;
`;
