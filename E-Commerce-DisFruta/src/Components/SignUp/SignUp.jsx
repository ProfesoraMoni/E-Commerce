import React, { useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { createUserWithEmailAndPassword } from 'firebase/auth';
import { FirebaseAuth } from '../../Firebase/config';
import Logo from '../../assets/Img/Logo.png';
import Navbar from '../Navbar/navbar';
import Footer from '../Footer/Footer';
import '../SignUp/SignUp.css'

const Signup = () => {
    const navigate = useNavigate();

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('');

    const onSubmit = async (e) => {
        e.preventDefault()

        await createUserWithEmailAndPassword(FirebaseAuth, email, password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                console.log(user);
                navigate("/login")
                // ...
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorCode, errorMessage);
                // ..
            });


    }

    return (
        <>
            <Navbar />
            <main className='SU'>
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
                                    type="email"
                                    label="Email address"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    required
                                    placeholder="Email address"
                                />
                            </div>

                            <div>
                                <label htmlFor="password"></label>
                                <input
                                    id="password"
                                    type="password"
                                    label="Create password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    required
                                    placeholder="Password"
                                />
                            </div>
                            <div>
                                <button
                                    type="submit"
                                    onClick={onSubmit}
                                >
                                    Sign up
                                </button>
                            </div>
                            <hr className='h'></hr>

                        </form>

                        <p>
                            Already have an account?{' '}
                            <NavLink to="/Login" className="login" >
                                Login
                            </NavLink>
                        </p>
                    </div>
                </section>
            </main>
        </>
    )
}

export default Signup