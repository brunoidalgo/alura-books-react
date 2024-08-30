import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";

const Title = styled.h1`
    font-size: 2em;
`;

const Subtitle = styled.p`
    font-size: 1em;
    font-weight: 500;
    padding: .5em 1.5em 0;
`;

const SearchContainer = styled.section`
    background-image: linear-gradient(90deg, #002F52 35%, #326589 165%);
    color: #ffffff;
    text-align:center;
    padding: 5.5em 0;
    width: 100%;
    height: 18em;
`;

export default function Search() {
    const [textWrite, setTextWrite] = useState('');

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar ?</Title>
            <Subtitle>Encontre seu livro em nossa coleção.</Subtitle>
            <Input 
            placeholder="Escreva a próxima leitura" 
            onBlur={event => setTextWrite(event.target.value)}/>
        </SearchContainer>
    )
};