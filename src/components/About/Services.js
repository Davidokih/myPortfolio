import React from 'react';
import styled from 'styled-components';

const Services = () => {
    return (
        <Container>
            <h1>My <span>Services</span></h1>
            <Wrapper>
                <Card>
                    <Hold>
                        <Title>React js Developer</Title>
                        <Text>I am working with react js to create a catching frontEnd designes. </Text>
                    </Hold>

                </Card>
                <Card>
                    <Hold>
                        <Title>UI/UX Designer</Title>
                        <Text>
                            I am Working with Figma to To address all issues including breaking changes in design structure
                        </Text>
                    </Hold>

                </Card>
                <Card>
                    <Hold>
                        <Title>Node Js Developer</Title>
                        <Text>I am a BackEnd Developer and currently working with Node js.
                            and other frame works like express and mongodb.
                        </Text>
                    </Hold>

                </Card>
            </Wrapper>
        </Container>
    );
};

export default Services;

const But = styled.div`
    color: gold;
    cursor: pointer;
`;
const Text = styled.div`
    font-size: 14px;
    margin-bottom: 20px;
`;
const Title = styled.div`
    font-weight: 700;
    font-size: 25px;

    margin-bottom: 20px;
`;
const Hold = styled.div`
    width: 90%;
    color: white;
    padding: 15px 0;
`;
const Card = styled.div`
    width: 300px;
    background-color: rgba(0, 0, 0, 0.9);

    border-top: 2px solid rgb(255, 187, 0);
    border-radius: 5px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin: 15px;
`;
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: white;
    span{
        color: gold;
    }
`;