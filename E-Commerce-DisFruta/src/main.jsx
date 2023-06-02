import React, { useEffect } from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  Navigate,
  RouterProvider, useNavigate, Outlet
} from "react-router-dom";
import './index.css'
import Home  from '../src/Components/Home/HomePage'
import Login from '../src/Components/Login/Login'
import Signup from '../src/Components/SignUp/SignUp'
import Inicio from './Components/Inicio/Inicio'


const PrivateRoute = ({element: Element, isAuth, ...rest}) => {
  const navigate = useNavigate()
  
  useEffect(() => {
    if (!isAuth) {
      navigate("/login", {replace: true})
    }
  }, [isAuth, navigate])

  // Outlet nos permite establecer un slot o espacio vacío dentro de un componente, donde podemos renderizar el resultado de una ruta.
  return isAuth ?  <Outlet /> : <h1>Authenticated</h1>;
}

const router = createBrowserRouter([
  {
    path: "/login",
    element: <Login/>
  },
  {
    path :"/signup",
    element: <Signup/>
  },
  {
   path: "/",
   element: <PrivateRoute isAuth={localStorage.getItem("isLoggedIn") === "true"} element={<> </>} />,
   children: [
    {
      path: "homepage",
      element: <Home/>
    }
    
   ] 
  },
  {
    path :"/inicio",
    element: <Inicio/>
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)