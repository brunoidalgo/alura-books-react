import Input from "../Input";
import styled from "styled-components";
import { useState } from "react";
import { books } from "./filesSearch";

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

const Result = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;
    cursor: pointer;
    p {
        width: 200px;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
    }
`;

export default function Search() {
    const [bookSearch, setBookSearch] = useState([]);

    return (
        <SearchContainer>
            <Title>Já sabe por onde começar ?</Title>
            <Subtitle>Encontre seu livro em nossa coleção.</Subtitle>
            <Input 
            placeholder="Escreva a próxima leitura" 
            onBlur={event => {
                const textWrite = event.target.value;
                const resultSearch = books.filter( book => book.nome.includes(textWrite));
                setBookSearch(resultSearch);
            }}/>
           {bookSearch.map((livro) => (
                    <Result>
                        <p>{livro.nome}</p>
                        <img src={livro.src}/>
                    </Result>
                    ))}
        </SearchContainer>
    )
};