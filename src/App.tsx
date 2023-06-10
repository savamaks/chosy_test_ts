import styled from "styled-components";
import requestAPI from "./components/requestAPI";
import { useEffect, useState } from "react";
import Pokemon from "./components/Pokemon";
import Header from "./components/Header";

const AppDiv = styled.div`
    background: #F5F5F5;
    width: 100vw;
    height: 100vh;
    padding: 10px;
    display: flex;
    align-items: center;
`;

const Block = styled.div`
    margin: 0 auto;
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-bottom: 17px;
    background: #ffffff;
    border-radius: 24px;
`

const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;
const Title = styled.h2`
    font-family: "Roboto Flex";
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 135%;
    text-align: center;
    color: #51515a;
`;
const MainFoto = styled.div<{ backgroundImage: string }>`
    width: 96px;
    height: 96px;
    border-radius: 50%;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${(props) => props.backgroundImage});
`;
const Main = styled.main`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 16px;
`;

function App(): JSX.Element {
    const [data, setData] = useState({});
    const [urlMainPokemon, setUrlMainPokemon] = useState("");

    const url = `https://pokeapi.co/api/v2/pokemon/?limit=12`;

    const changeData = (value: any):void => {
        setData(value);
    };
    const selectPokemon = (url: string):void => {
        setUrlMainPokemon(url);
    };
    useEffect(():void => {
        requestAPI(changeData, url);
    }, []);

    return (
        <AppDiv>
            <Block>
                <Header />
                <Main>
                    <MainFoto backgroundImage={urlMainPokemon}></MainFoto>
                    <Title>Выберите фото покемона</Title>
                    <Container>
                        {data.results &&
                            data.results.map((el: any): JSX.Element => {
                                return <Pokemon url={el.url} selectPokemon={selectPokemon} />;
                            })}
                    </Container>
                </Main>
            </Block>
        </AppDiv>
    );
}

export default App;
