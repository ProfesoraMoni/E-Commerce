import React, {useState} from "react";
import '../Navbar/navbar.css';
import Logo from '../../assets/Img/Logo.png';
import Carrito from '../../assets/Img/carrito.png';
function Navbar() {
    const [active, setActive] = useState("nav__menu");
    const [toggleIcon, setToggleIcon] = useState("nav__toggler");
    const navToggle = () => {
        active === 'nav__menu' ? setActive('nav__menu nav__active'): setActive('nav__menu');
        toggleIcon === 'nav__toggler' ? setToggleIcon('nav__toggler toggle'): setToggleIcon("nav__toggler");
    };
    return (
        <nav className="nav">
            <div className="Logo" id="Logo">
                <img src={Logo}/>
            </div>
            <ul className={active}>
                <li className="nav__item"><a href="/inicio" className="nav__link">Inicio</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Productos</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Nosotros</a></li>
                <li className="nav__item"><a href="#" className="nav__link">Contactanos</a></li>
                <li className="nav__item"><a href="/login" className="nav__link">Login</a></li>
                <li className="icon-cart"><img src={Carrito} className="icon-cart"/></li>
            </ul>
            <div onClick={navToggle} className={toggleIcon}>
                <div className="line1"></div>
                <div className="line2"></div>
                <div className="line3"></div>  
            </div>
        </nav>
    );
}

export default Navbar;