import './style.css'

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

const textOptions = ["Categorias", "Favoritos", "Minha Estante"];
const icons = [perfil, sacola];

export default function Header() {
    return (
        <HeaderContainer>
            <img 
            src={logo} 
            alt='logo'>
            </img>
            <p className='logo__name'>
                <strong>Alura</strong>
                Books
            </p>
            <ul className='options'>
                {textOptions.map((text) => {
                    return (
                    <li className='option'>
                        <p>{text}</p>
                    </li>
                    )
                    })}
            </ul>
            <ul className='icons'>
                {icons.map((icon) => {
                    return (
                    <li className='icon'>
                        <img src={icon}></img>
                    </li>
                    )
                    })}
            </ul>
        </HeaderContainer>
    )
};