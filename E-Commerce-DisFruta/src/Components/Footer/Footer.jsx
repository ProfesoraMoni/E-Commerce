import React from 'react';
import '../Footer/Footer.css';
import Logo from '../../assets/Img/Logo.png';
import Contactos from '../Contactos';

const Footer = () => {
    return (
        <div className='main-footer'>
            <div className='container'>
                <div className='row1'>

                    <div className="Logo" id="Logo">
                        <img src={Logo} />
                    </div>
                    <div className='col'>
                        <h2>DISFRUTA INC.</h2>
                        <ul className='list-unstyled'>
                            <li>¿Quienes somos?</li>
                            <p>Desde 1987 distribuyendo.</p>
                        </ul>
                    </div>

                    <div className='col'>
                        <h2>PRODUCTOS</h2>
                        <ul className='list-unstyled'>
                            <li>Jugos Naturales</li>
                            <li>Frutas</li>
                            <li>Zumos</li>
                        </ul>
                    </div>


                    <div className='col'>
                        <h2>CONTACTANOS</h2>
                        <ul className='list-unstyled'>
                            <li>313-239-1214</li>
                            <li>Bogota-DC</li>
                            <li>Calle 125 CC Santa Barbara</li>
                            <li>disfruta@gmail.com</li>
                            <li className='contacimg'><Contactos/></li>
                        </ul>
                    </div>
                </div>
                <hr />
                <div className='row'>
                    <p className='col-sm'>
                        &copy;{new Date().getFullYear()}THICC DISFRUTA INC. / All rigth reserved / Terms Of Service / Privacy 
                    </p>
                </div>
            </div>
        </div>
    )
}
export default Footer;