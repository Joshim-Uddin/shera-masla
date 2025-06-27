import React from 'react';
import { createBrowserRouter } from 'react-router';
import Main from '../Layout/Main';
import Home from '../Pages/Home';
import Error from '../Pages/Error';
import { RouterProvider } from 'react-router/dom';

const router = createBrowserRouter([
    {
        path:'/',
        element: <Main />,
        errorElement: <Error />,
        children:[
            {
                path: '/',
                element: <Home />
            }
        ]
    }
])
const Routes = () => {
    return <RouterProvider router={router}></RouterProvider>;
};

export default Routes;