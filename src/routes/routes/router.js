import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main'
import Categories from '../../pages/Categories/Categories/Categories';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';
import Register from '../../pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            },
            {
                path: '/login',
                element: <Login/>
            },
            {
                path: '/register',
                element: <Register/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    },
    {
        path: '/categories',
        element: <PrivateRoute><Main></Main></PrivateRoute>,
        children: [
            {
                path: '/categories',
                element: <Home/>
            },
            {
                path: '/categories/:id',
                element: <Categories/>,
                loader: ({params}) => fetch(`http://localhost:5000/categories/${params.id}`)
            }
        ]
    }
])

export default router;