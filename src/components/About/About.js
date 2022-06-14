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
                        <Title>About</Title>
                        <Text>
                            asset index.html 1.67 KiB [emitted]
                            Entrypoint main 1.56 MiB (1.63 MiB) = static/js/bundle.js 1.56 MiB main.8416e117f15da08bd924.hot-update.js 5.24 KiB 2 auxiliary assets
                            cached modules 1.44 MiB [cached] 117 modules
                            runtime modules 31.3 KiB 15 modules
                            ./src/components/About/About.js 3.02 KiB [built] [code generated]
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
    font-size: 25px;
    font-weight: 800;
    margin-bottom: 30px;
`;
const Content = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    justify-content: center;
    width: 350px;

   @media (max-width: 768px) {
        text-align: center;
    margin-bottom: 40px;
    }
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
`;
const ImageHold = styled.div`
    width: 300px;
    height: 400px;
    background-color: red;
    border-radius: 10px;
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
`;
const Wrapper = styled.div`
    width: 90%;
    color: white;
    /* background-color: blue; */
    display: flex;
    align-items: center;
    justify-content: center;

     @media (max-width: 768px) {
        flex-direction: column-reverse;
    }
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  /* background-color: rgba(0, 0, 0, 0.9); */
    margin-bottom: 50px;
`;