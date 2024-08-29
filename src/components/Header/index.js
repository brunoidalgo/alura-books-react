import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import logo from '../../images/logo.svg';
import styled from 'styled-components';

const HeaderContainer = styled.header`
    background-color: #fff;
    display: flex;
    align-items: center;
    text-align: center;
    justify-content: center;
`;

const LogoContainer = styled.div`
    display: flex;
`; 

const LogoImg = styled.img`
    font-size: 1.5em;
    margin-left: .3em;
`;

const Opcoes = styled.ul`
    display:flex;
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


const textOptions = ["Categorias", "Favoritos", "Minha Estante"];
const icons = [perfil, sacola];

export default function Header() {
    return (
        <HeaderContainer>
            <LogoContainer>
            <LogoImg 
            src={logo} 
            alt='logo'/>
            <p>
                <strong>Alura</strong>
                Books
            </p>
            </LogoContainer>
            <Opcoes>
                {textOptions.map((text) => {
                    return (
                    <li className='option'>
                        <p>{text}</p>
                    </li>
                    )
                    })}
            </Opcoes>
            <Icones className='icons'>
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