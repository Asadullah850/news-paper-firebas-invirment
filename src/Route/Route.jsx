
import { Navigate, createBrowserRouter } from 'react-router-dom';
import Main from '../components/Main';
import Home from '../components/Home';
import Category from '../components/Shared/Category';
import NewsLayout from '../components/NewsLayout';
import SingleNews from '../components/SingleNews';
import Login from '../LoginLayOut/Login';
import LoginLayOut from '../LoginLayOut/LoginLayOut';
import Rregistration from '../LoginLayOut/Rregistration';
import PrivetRourte from './PrivetRourte';

  const router = createBrowserRouter([
    {
        path:'/',
        element:<LoginLayOut></LoginLayOut>,
        children:[
            {
                path:'/',
                element:<Navigate to='/category/0'></Navigate>
            },
            {
                path:'/login',
                element:<Login></Login>
            },
            {
                path:'/register',
                element:<Rregistration></Rregistration>
            },
        ]
    },
    {
        path: "/category",
        element: <Main></Main>,
        children:[
            {
                path:':id',
                element:<Category></Category>,
                loader:({params})=>fetch(`http://localhost:3000/categories/${params.id}`)
            },
        ]
        
    },
    {
        path:'news',
        element:<PrivetRourte><NewsLayout></NewsLayout></PrivetRourte>,
        children:[
            {
                path:':id',
                element: <SingleNews></SingleNews>,
                loader:({params})=>fetch(`http://localhost:3000/news/${params.id}`)
            }
        ]
    }
  ])
  export default router;