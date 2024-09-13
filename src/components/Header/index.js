import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import logo from '../../images/logo.svg';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
`;

const LogoContainer = styled.div`
    display: flex;
    font-size:1.4em;
    color: #000;
`; 

const LogoImg = styled.img`
    font-size: 1.5em;
    margin-left: .3em;
`;

const Opcoes = styled.ul`
    display:flex;
`;

const Opcao = styled.ul`
    text-transform: uppercase;
    cursor: pointer;
    font-weight: 600;
    color: #000;
`;

const Icone = styled.li`
    display: flex;
`;

const IconeImg = styled.img`
    cursor:pointer;
`;

const Icones = styled.ul`
    display:flex;
    gap:1em;
`;


const textOptions = ["categorias", "favoritos", "estante"];
const icons = [perfil, sacola];

export default function Header() {
    return (
        <HeaderContainer>
            <Link to="/">
            <LogoContainer>
            <LogoImg 
            src={logo} 
            alt='logo'/>
            <p>
                <strong>Alura</strong>
                Books
            </p>
            </LogoContainer>
            </Link>
            <Opcoes>
                {textOptions.map((text) => {
                    return (
                    <Link to={`${text}`}>
                        <Opcao>
                            <p>{text}</p>
                        </Opcao>
                    </Link>
                    )
                    })}
            </Opcoes>
            <Icones>
                {icons.map((icon) => {
                    return (
                    <Icone>
                        <IconeImg src={icon} alt='icone'/>
                    </Icone>
                    )
                    })}
            </Icones>
        </HeaderContainer>
    )
};