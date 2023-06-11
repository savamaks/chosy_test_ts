import styled from 'styled-components';
import Pokemon from "../components/Pokemon";

const Box = styled.div`
    border-radius: 50%;
`;
const Container = styled.div`
    display: flex;
    align-items: center;
    flex-wrap: wrap;
    justify-content: center;
    gap: 10px;
`;
const PokemonBox = ({ data, selectPokemon }: any): JSX.Element => {
   if(data.length !== 0){
    return (
        <Container>
            {data.results.map((el: any, index: number): JSX.Element => {
                return (
                    <Box key={index}>
                        <Pokemon url={el.url} selectPokemon={selectPokemon} />
                    </Box>
                );
            })}
        </Container>
    );
   } else{
    return <div>Loading...</div>
   }
    
};
export default PokemonBox