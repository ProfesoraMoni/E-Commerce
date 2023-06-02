import { useState } from 'react';
import Signup from './Components/SignUp/SignUp';
import Navbar from './Components/Navbar/navbar';
import Login from './Components/Login/Login';
import Footer from './Components/Footer/Footer';
import Contactos from './Components/Contactos';
import Carrito from './Components/Carrito';
import Home from './Components/Home/HomePage';
import Inicio from './Components/Inicio/Inicio';

function App() {
    const [allProducts, setAllProducts] = useState([]);
    const [total, setTotal] = useState(0);
    const [countProducts, setCountProducts] = useState(0);

    return (
        <>
            <Navbar/>
            <Inicio/>
            <Productos/>
            <Login />
            <Signup />
            <Footer />
            <Contactos/>
            <Carrito/>
        </>

    );
}
export default App