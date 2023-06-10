import { useState, useEffect, useRef } from "react";
import requestAPI from "./requestAPI";
import styled from "styled-components";

const Image = styled.div<{ image: string }>`
    width: 75px;
    height: 75px;
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    background-image: url(${(props): string => props.image});
    border-radius: 50%;
    cursor: pointer;
`;

const Pokemon = ({ url, selectPokemon }: any): JSX.Element => {
    const [data, setData] = useState([]);
    const ref = useRef(null);

    const changeData = (value: any):void => {
        setData(value);
    };
    const clickPokemon = ():void => {
        
        ref.current.parentElement.childNodes.forEach((el:any):void=>{
            el.style.border = 'none'
        })
        ref.current.style.border = '2px solid #8000FF'

        selectPokemon(data.sprites.other.dream_world.front_default);
    };
    useEffect(():void => {
        requestAPI(changeData, url);
    }, []);

    return <Image ref={ref} onClick={clickPokemon} image={data.length !== 0 && data.sprites.other.dream_world.front_default}></Image>;
};

export default Pokemon;
