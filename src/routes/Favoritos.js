import { useEffect, useState } from 'react';
import styled from 'styled-components';
import { getLivrosFavoritos } from '../services/favoritos';
import livroImg from '../images/livro2.png';
import deleteFavorito from '../services/favoritos'

const AppContainer = styled.div`
    width: 100vw;
    height: 100vh;
    background-image: linear-gradient(90deg, #002F52 35%, #326589);
`;

const ResultadoContainer = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

const Resultado = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 20px 0;
    cursor: pointer;
    text-align: center;
    padding: 0 100px;
    p {
        width: 200px;
        color: #FFF;
    }
    img {
        width: 100px;
    }
    &:hover {
        border: 1px solid white;
        border-radius: 16px
    }
`;

const Titulo = styled.h2`
    color: #FFF;
    font-size: 36px;
    text-align: center;
    width: 100%;
    padding-top: 20px
`;

export default function Favoritos() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    fetchFavoritos()
  },[]);

  async function fetchFavoritos() {
    const favoritosAPI = await getLivrosFavoritos();
    setFavoritos(favoritosAPI);
  };

  async function removeFavorito(id) {
    await deleteFavorito(id);
    alert(`Livro de id: ${id} removido com sucesso!`)
  };
  
  return (
    <AppContainer>
      <Titulo>Aqui estão seus livros favoritos:</Titulo>
       <ResultadoContainer>
         {
           favoritos.length !== 0 ? favoritos.map(favorito => (
             <Resultado onClick={() => removeFavorito()}>
               <p>{favorito.nome}</p>
               <img src={livroImg}/>
             </Resultado>
           )) : null
         }
       </ResultadoContainer>
    </AppContainer>
  );
};
