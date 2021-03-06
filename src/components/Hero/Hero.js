import React from 'react';
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
            <Text>I'm a Nigeria based web designer & A full stack developer focused on crafting clean & user‑friendly experiences, I am passionate about building excellent software that improves the lives of those around me.
            </Text>
          </Content>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default About;

const Text = styled.div`
    font-weight: 600;
`;
const Title = styled.div`
    font-size: 50px;
    font-weight: 700;
    margin-bottom: 30px;

    span{
      color: gold;
    }
`;
const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    /* width: 350px; */

   @media (max-width: 768px) {
        text-align: center;
    margin-bottom: 40px;
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
    /* background-color: white; */
    display: flex;
    align-items: center;
    justify-content: center;

    /* @media (max-width: 768px){
      width: 100%;
    } */
`;
const Wrapper = styled.div`
    width: 90%;
    color: white;
    /* height: 570px; */
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 90px;
    /* background-color: lightgray; */

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
    /* background: linear-gradient(90deg, rgba(247,200,5,1) 20%, rgba(7,10,10,1) 39%); */
    /* background-color: black; */
    margin-bottom: 50px;
`;