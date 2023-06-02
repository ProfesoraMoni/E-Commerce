import React from 'react';
import {  signOut } from "firebase/auth";
import { FirebaseAuth } from '../../Firebase/config';
import { useNavigate } from 'react-router-dom';
 
const Home = () => {
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(FirebaseAuth).then(() => {
        // Sign-out successful.
            localStorage.clear()
            navigate("/login");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }
   
    return(
        <>
            <nav>
                <p>
                    Bienvenido usuario registrado
                </p>
 
                <div>
        			<button onClick={handleLogout}>
                        Cerrar sesión
                    </button>
        		</div>
            </nav>
        </>
    )
}
 
export default Home