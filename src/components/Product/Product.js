import React from 'react';
import styled from 'styled-components';
import { useHref } from 'react-router-dom';

const Deployled = () => {
    return (
        <Container>
            <h1>Deployed Projects</h1>
            <Wrapper>
                <Card>
                    <ImageHold>
                        <Image src='/images/4e56629a-460b-4075-b3b9-8378da13331e.jpg' />
                    </ImageHold>
                    <Content>
                        <Title href='https://david-diary-99303.web.app'>Title</Title>
                    </Content>
                </Card>
                {/* <Card>
                    <ImageHold>
                        <Image src='/images/4e56629a-460b-4075-b3b9-8378da13331e.jpg' />
                    </ImageHold>
                    <Content>
                        <Title href='https://mr-gents.heroku.com'>Title</Title>
                    </Content>
                </Card>
                <Card>
                    <ImageHold>
                        <Image src='/images/4e56629a-460b-4075-b3b9-8378da13331e.jpg' />
                    </ImageHold>
                    <Content>
                        <Title href='https://david-diary-99303.web.app'>Title</Title>
                    </Content>
                </Card> */}
            </Wrapper>
        </Container>
    );
};

export default Deployled;

const Title = styled.a`
    color: white;
    font-weight: 700;
    font-size: 20px;
    margin-top: 20px;
`;
const Content = styled.div`
    width: 100%;
    /* height: 90px; */
    background-color: rgba(0,0,0,0.9);
`;
const Image = styled.img`
    width: 100%;
    height: 100%;
    background-color: red;
`;
const ImageHold = styled.div`
    width:  100%;
    height: 300px;
`;
const Card = styled.div`
    width: 300px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background-color: rgba(0, 0, 0, 0.9);
    margin: 20px;
`;
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;

    color: white;
`;