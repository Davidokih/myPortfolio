import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

const Hero = () => {

  const myData = [
    {
      id: 1,
      image: '/images/277742011_1011776856135738_5434188465170630405_n.jpg'
    },
    {
      id: 2,
      image: '/images/4e56629a-460b-4075-b3b9-8378da13331e.jpg'
    },
    {
      id: 3,
      image: '/images/Skitongifts Poster No Frame, All Bushido Samurai Sword, Bushido Samurai Japanese, Samurai Warriros Quotes Portrait Poster - 27x40.jpg'
    },
    {
      id: 4,
      image: '/images/Silence IPhone Wallpaper - IPhone Wallpapers.jpg'
    },
    {
      id: 5,
      image: '/images/277742011_1011776856135738_5434188465170630405_n.jpg'
    },
  ];


  const [ count, setCount ] = useState(0);

  useEffect(() => {
    setInterval(() => {
      setCount((el) => el + 1);
    }, 3000);
  }, []);
  return (
    <Container>
      <Wrapper>
        <Back>
          <Content>
            <Title>
              I There <br /> my name is David, <br /> I am a FullStack Developer
            </Title>
          </Content>
        </Back>
        <Image src={ myData[ count % myData.length ].image } />
      </Wrapper>
    </Container>
  );
};

export default Hero;

const Title = styled.div`
  font-size: 40px;
  font-weight: 800;
  color: white;
`;
const Content = styled.div``;
const Image = styled.img`
  width: 150px;
  height: 150px;
  border-radius: 50%;
  background-color: red;
  position: relative;
  bottom: 60px;
`;
const Back = styled.div`
  width: 100%;
  height: 450px;
  /* background-color: #fff; */
  background-image: url('/images/A swan.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: 100%;
  display: flex;
  align-items: center;

  @media (max-width: 508px) {
    background-size: 100%;
    height: 450px;
  }
`;
const Wrapper = styled.div`
  width: 95%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;
const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.9); */
`;