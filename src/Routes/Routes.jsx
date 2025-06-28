import React from 'react';
import { createBrowserRouter } from 'react-router';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import { RouterProvider } from 'react-router/dom';
import Products from '../Pages/Products';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        errorElement: <Error />,
        children:[
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/products',
                element: <Products />
            }
        ]
    }
])
const Routes = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;