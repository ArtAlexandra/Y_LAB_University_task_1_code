import React from 'react';
import Authentication from './components/Authentication';
import "./App.css"

import {
  createBrowserRouter,
  RouterProvider,
  Outlet,
  Navigate,
 
} from "react-router-dom";
import Main from './components/Main';
import ErrorURL from './ErrorURL';

const Layout = () => {
  return (
    <>
    
      <Outlet/>
    
    </>
  );
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
     
      {
        path: "/",
        element: <Navigate to="/Y_LAB_University_task_1/login" />
      },
      {
        path: "/Y_LAB_University_task_1/login",
        element: <Authentication/>
      },
      {
        path: "/Y_LAB_University_task_1/main",
        element: <Main/>
      },
      
      
      
    ],
  },
  {
    path: "/Y_LAB_University_task_1/login",
    element: <Authentication />,
  },
  {
    path: "*",
    element:<ErrorURL/>
  },
  
]);
//email: "Lucio_Hettinger@annie.ca"
//password: "(254)954-1289"
function App() {
  return (
    <div className='main'>
      <RouterProvider router={router} /> 
    </div>
  );
}

export default App;
