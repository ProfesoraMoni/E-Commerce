import React, { useState } from 'react';
import '../Inicio/Inicio.css';
import Logo from '../../assets/Img/Logo.png';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';

const Inicio = () => {
    return (
        <>
            <Navbar />
            <main className='Inicio'>
                <div className='container1'>
                    <p>Dis-Fruta</p>
                    <ul>
                        <li>la frescura de la naturaleza.</li>
                        <li>ayudar a los campesinos locales.</li>
                        <li>hasta el 100% de cada producto.</li>
                    </ul>
                </div>
            </main>
            <Footer />
        </>
    )
}

export default Inicio;
