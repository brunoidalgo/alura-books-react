import './style.css';
import perfil from '../../images/perfil.svg';
import sacola from '../../images/sacola.svg';
import logo from '../../images/logo.svg';

const textOptions = ["Categorias", "Favoritos", "Minha Estante"];
const icons = [perfil, sacola];

export default function Header() {
    return (
        <div className='header-options'>
            <img 
            src={logo} 
            alt='logo' 
            className='logo-img'>
            </img>
            <p><strong>Alura</strong>Books</p>
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
        </div>
    )
};