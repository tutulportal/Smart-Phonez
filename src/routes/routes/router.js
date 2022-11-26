import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import Main from '../../layouts/Main'
import Categories from '../../pages/Categories/Categories/Categories';
import Dashboard from '../../pages/Dashboard/Dashboard/Dashboard';
import MyOrders from '../../pages/Dashboard/MyOrders/MyOrders';
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
    },
    {
        path: '/dashboard',
        element: <PrivateRoute><DashboardLayout></DashboardLayout></PrivateRoute>,
        children: [
            {
                path: '/dashboard',
                element: <Dashboard/>
            },
            {
                path: '/dashboard/my-orders',
                element: <MyOrders/>
            }
        ]
    }
])

export default router;