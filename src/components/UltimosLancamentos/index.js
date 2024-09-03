import { livros } from './dadosUltimosLancamentos';
import styled from 'styled-components';
import { Titulo } from '../Titulo';
import CardRecomenda from '../CardRecomenda';
import imagemLivro from '../../images/livro2.png';


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
            <NovosLivrosContainer>
            {livros.map(livro => (
                <img src={livro.src} alt='imagem-livro'/>
            ))}
            </NovosLivrosContainer>
            <CardRecomenda
            titulo="Talvez você se interesse por..."
            subtitulo="Angular 11"
            descricao="Construindo uma aplicação com a plataforma Google."
            img={imagemLivro}
            />
        </UltimosLancamentosContainer>
    )
};