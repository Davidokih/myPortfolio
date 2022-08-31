import React from 'react';
import styled from 'styled-components';

const AboutMe = () => {
    return (
        <Container>
            <h1>About <span>Me</span></h1>
            <Wrapper>
                <Left>
                    <Holder>
                        <h2>Personal Infos</h2>
                        <Hold>
                            <First>
                                First Name: <br /><strong>David</strong>
                            </First>
                            <Last>
                                Last Name: <br /><strong>Okih</strong>
                            </Last>
                        </Hold>
                        <Hold>
                            <First>
                                Address: <br /><strong>Lagos</strong>
                            </First>
                            <Last>
                                Nationality: <br /><strong>Nigerian</strong>
                            </Last>
                        </Hold>
                        <Hold>
                            <First>
                                Phone: <br /><strong>+2349162822742</strong>
                            </First>
                            <Last>
                                Language: <br /><strong>Nigeria English, English</strong>
                            </Last>
                        </Hold>
                    </Holder>
                </Left>
                <Right>
                    <RightHold>
                        <Card>
                            <Num>95%</Num>
                            <Word>React Js</Word>
                        </Card>
                        <Card>
                            <Num>95%</Num>
                            <Word>MongoDB</Word>
                        </Card>
                        <Card>
                            <Num>95%</Num>
                            <Word>Figma</Word>
                        </Card>
                        <Card>
                            <Num>65%</Num>
                            <Word>Azure</Word>
                        </Card>
                    </RightHold>
                </Right>
            </Wrapper>
        </Container>
    );
};

export default AboutMe;

const Last = styled.div`
    color: lightgray;
    width: 50%;
    /* background-color: gray; */
    margin: 10px;


`;
const First = styled.div`
    color: lightgray;
    margin: 10px;
    /* width: 70%; */

`;
const Hold = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    font-size: 13px;

    @media (max-width: 768px){
        /* width: 100%; */
        justify-content: space-between;
    }
`;
const Holder = styled.div`
    width: 100%;
    /* background-color: gray; */

    h2{
        font-size: 25px;
        font-weight: 500;

        @media (max-width: 905px){
            text-align: center;
        }
    }
`;
const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
// background-color: gray;
    @media (max-width: 768px){
        width: 100%;
        justify-content: space-between;
    }
`;
const Word = styled.div`
    font-size: 20px;
    font-weight: 700;
    margin: 10px;
`;
const Num = styled.div`
    font-size: 35px;
    font-weight: 800;
    color: rgb(255, 187, 0);
    margin: 10px;
`;
const Card = styled.div`
    width: 180px;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    border: 1px solid rgb(88, 85, 77);
    border-radius: 10px;
    margin: 10px;
`;
const RightHold = styled.div`
    /* width: 404px; */
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    /* background-color: gray; */
`;
const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
`;
const Wrapper = styled.div`
    width: 90%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    @media (max-width: 950px){
        flex-direction: column;
    }
`;
const Container = styled.div`
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;

    

    h1{
        font-size: 40px;
        font-weight: 900;
    }
    span{
        color: rgb(255, 187, 0);
    }
`;