import { useState, useEffect, useRef } from "react";
import requestAPI from "./requestAPI";
import styled from "styled-components";

const Image = styled.div<{ bg_image: string }>`
    width: 75px;
    height: 75px;
    background-image: url(${(props): string => props.bg_image});
    background-position: center center;
    background-size: contain;
    background-repeat: no-repeat;
    border-radius: 50%;
    cursor: pointer;
`;
interface PokemonType {
    url:string,
    selectPokemon:any
}
const Pokemon = ({ url, selectPokemon }: PokemonType): JSX.Element => {
    const [data, setData] = useState([]);
    const ref = useRef(null);

    const changeData = (value: any):void => {
        setData(value);
    };
    const clickPokemon = (e:any):void => {
        e.target.parentElement.parentElement.childNodes.forEach((el:any):void=>{
            el.style.border = 'none'
        })
        e.target.parentElement.style.border = '2px solid #8000FF'
        
        selectPokemon(data.sprites.other.dream_world.front_default);
    };
    useEffect(():void => {
        requestAPI(changeData, url);
    }, []);

    return <Image key={1} ref={ref} onClick={clickPokemon} bg_image={data.length !== 0 ? data.sprites.other.dream_world.front_default:'none'}></Image>;
};

export default Pokemon;
