import { createBrowserRouter } from 'react-router-dom';
import MainLayout from '../Layout/MainLayout';
import ErrorPage from '../Pages/ErrorPage/ErrorPage';
import Home from '../Pages/Home/Home';
import Login from '../Authentication/Login/Login';
import Register from '../Authentication/Register/Register';
import AllJobs from '../Pages/AllJobs/AllJobs';
import Blog from '../Pages/Blog/Blog';
import UserProfile from '../Pages/UserProfile/UserProfile';
import AddJob from '../Pages/AddJob/AddJob';
import MyJobs from '../Pages/MyJobs/MyJobs';
import AppliedJobs from '../Pages/AppliedJobs/AppliedJobs';
import PrivateRoutes from './PrivateRoutes';
import SingleJobDetails from '../Pages/JobDetails/SingleJobDetails';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>,
                loader: () => fetch('https://server-six-gilt.vercel.app/all-jobs')
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
            {
                path: "/all-jobs",
                element: <AllJobs></AllJobs>
            },
            {
                path: "/blog",
                element: <Blog></Blog>
            },
            {
                path: "/user-profile",
                element: <PrivateRoutes><UserProfile></UserProfile></PrivateRoutes>
            },
            {
                path: "/add-a-job",
                element: <PrivateRoutes><AddJob></AddJob></PrivateRoutes>
            },
            {
                path: "/my-jobs",
                element: <PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>
            },
            {
                path: "/my-jobs/:_id",
                element: <PrivateRoutes><MyJobs></MyJobs></PrivateRoutes>
            },
            {
                path: "/applied-jobs",
                element: <PrivateRoutes><AppliedJobs></AppliedJobs></PrivateRoutes>
            },
            {
                path: "/all-jobs/:_id",
                element: <PrivateRoutes><SingleJobDetails></SingleJobDetails></PrivateRoutes>
            }
            
        ]
        
    }
]);

export default routes;