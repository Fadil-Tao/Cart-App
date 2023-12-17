import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import HomePage from './Pages/HomePage';
import CollectionPage from './Pages/CollectionPage';
import CartPage from './Pages/CartPage';
import RootLayout from './Components/Layouts/RootLayout';
import ProductDetail from './Pages/ProductDetailPage';
import { SnackbarProvider } from 'notistack';
import ErrorPage from './Pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <RootLayout />,
        errorElement:<ErrorPage/>,
        children: [
            {
                path: '/',
                element: <HomePage />,
            },
            {
                path: '/home',
                element: <HomePage />,
            },
            {
                path: '/collection',
                element: <CollectionPage />,
            },
            {
                path: '/mycart',
                element: <CartPage />,
            },
            {
                path: '/collection/:id',
                element: (
                    <SnackbarProvider>
                        <ProductDetail />
                    </SnackbarProvider>
                ),
            },
        ],
    },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
);
