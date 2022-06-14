import React from 'react';
import styled from 'styled-components';

const Product = () => {
    return (
        <Container>
            <h1>My Services</h1>
            <Wrapper>
                <Card>
                    <Hold>
                        <Title>FrontEnd Developer</Title>
                        <Text>I am a FrontEnd Developer, and i am working with
                            React js

                            and pure javascript to manipulate the dom of a web.</Text>

                        <But>Show More</But>
                    </Hold>

                </Card>
                <Card>
                    <Hold>
                        <Title>UI/UX Designer</Title>
                        <Text>
                            I am Working with Figma to To address all issues (including breaking changes) in design structure
                        </Text>

                        <But>Show More</But>
                    </Hold>

                </Card>
                <Card>
                    <Hold>
                        <Title>BackEnd Developer</Title>
                        <Text>I am a BackEnd Developer and i am working with Node js.
                            and other frame works like express and mongodb.
                        </Text>

                        <But>Show More</But>
                    </Hold>

                </Card>
            </Wrapper>
        </Container>
    );
};

export default Product;

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

    border-top: 2px solid gold;
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
`;