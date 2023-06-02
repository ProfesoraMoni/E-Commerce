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
                <section>
                    <div className='Cover'>
                        <div className="Logo" id="Logo">
                            <img src={Logo} />
                        </div>
                    <h2>hello</h2>
                </div>
                </section>
            </main>
            <Footer />
        </>
    )
}

export default Inicio;
