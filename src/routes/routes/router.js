import { createBrowserRouter } from 'react-router-dom';
import DashboardLayout from '../../layouts/DashboardLayout';
import Main from '../../layouts/Main'
import Blogs from '../../pages/Blogs/Blogs';
import Categories from '../../pages/Categories/Categories/Categories';
import AddProduct from '../../pages/Dashboard/AddProduct/AddProduct';
import AllBuyer from '../../pages/Dashboard/AllBuyer/AllBuyer';
import AllSeller from '../../pages/Dashboard/AllSeller/AllSeller';
import Dashboard from '../../pages/Dashboard/Dashboard/Dashboard';
import MyOrders from '../../pages/Dashboard/MyOrders/MyOrders';
import Home from '../../pages/Home/Home/Home';
import Login from '../../pages/Login/Login';
import NotFound from '../../pages/NotFound/NotFound';
import Register from '../../pages/Register/Register';
import PrivateRoute from '../PrivateRoute/PrivateRoute';
import MyProducts from './../../pages/Dashboard/MyProducts/MyProducts';

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
            },
            {
                path: '/blogs',
                element: <Blogs/>
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
                loader: ({params}) => fetch(`https://smart-phonez-server.vercel.app/categories/${params.id}`)
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
            },
            {
                path: '/dashboard/add-product',
                element: <AddProduct/>
            },
            {
                path: '/dashboard/my-products',
                element: <MyProducts/>
            },
            {
                path: '/dashboard/all-sellers',
                element: <AllSeller/>
            },
            {
                path: '/dashboard/all-buyers',
                element: <AllBuyer/>
            }
        ]
    }
])

export default router;