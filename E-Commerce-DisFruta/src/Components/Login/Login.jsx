import React, { useState } from 'react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from '../../Firebase/config';
import { NavLink, useNavigate } from 'react-router-dom';
import '../Login/Login.css';
import Logo from '../../assets/Img/Logo.png';
import Navbar from '../Navbar/navbar';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const onLogin = (e) => {
        e.preventDefault();
        signInWithEmailAndPassword(FirebaseAuth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                localStorage.setItem("isLoggedIn", "true")
                localStorage.setItem("accessToken", user["accessToken"])
                localStorage.setItem("email", user["email"])

                navigate("/homepage")
                console.log(user)


            }).catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage)
            });

    }

    return (
    <>
        <Navbar />
        <main className='Login'>
            <section>
                <div className='Cover'>
                    <div className="Logo" id="Logo">
                        <img src={Logo} />
                    </div>
                    <form>
                        <div>
                            <label htmlFor="email-address">
                            </label>
                            <input
                                id="email-address"
                                name="email"
                                type="email"
                                required
                                placeholder="Email address"
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>


                        <div>
                            <label htmlFor="password">
                            </label>
                            <input
                                id="password"
                                name="password"
                                type="password"
                                required
                                placeholder="Password"
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        <div>
                            <button className="login-btn"
                                onClick={onLogin}
                            >
                                Login
                            </button>
                        </div>
                    </form>

                    <p className="text-sm text-white text-center">
                        No account yet? {' '}
                        <NavLink to="/signup">
                            Sign up
                        </NavLink>
                    </p>

                </div>
            </section>
        </main>
    </>
    )
}

export default Login
