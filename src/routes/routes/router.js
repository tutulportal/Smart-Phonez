import { createBrowserRouter } from 'react-router-dom';
import Main from '../../layouts/Main'
import Home from '../../pages/Home/Home/Home';
import NotFound from '../../pages/NotFound/NotFound';

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main/>,
        children: [
            {
                path: '/',
                element: <Home/>
            }
        ]
    },
    {
        path: '*',
        element: <NotFound/>
    }
])

export default router;