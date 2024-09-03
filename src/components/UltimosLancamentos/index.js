import { livros } from './dadosUltimosLancamentos';
import styled from 'styled-components';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';


const UltimosLancamentosContainer = styled.section`
    background-color: #EBECEE;
    padding-bottom: 20px;
    display: flex;
    flex-direction: column;
`

const NovosLivrosContainer = styled.div`
    margin-top: 30px;
    display: flex;
    width: 100%;
    justify-content: center;
    cursor: pointer;
`

export default function UltimosLancamentos() {
    return (
        <UltimosLancamentosContainer>
            <Titulo 
            color='#EB9B00' 
            tamanhoFonte='38px'
            >ÚLTIMOS LANÇAMENTOS
            </Titulo>
            <Titulo>ÚLTIMOS LANÇAMENTOS</Titulo>
            <NovosLivrosContainer>
            {livros.map(livro => (
                <img src={livro.src}/>
            ))}
            </NovosLivrosContainer>
            <CardRecomenda/>
        </UltimosLancamentosContainer>
    )
};