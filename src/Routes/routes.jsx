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

const routes = createBrowserRouter([
    {
        path: '/',
        element: <MainLayout></MainLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path: "/",
                element: <Home></Home>
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
                element: <UserProfile></UserProfile>
            },
            {
                path: "/add-a-job",
                element: <AddJob></AddJob>
            },
            {
                path: "/my-jobs",
                element: <MyJobs></MyJobs>
            },
            {
                path: "/applied-jobs",
                element: <AppliedJobs></AppliedJobs>
            },
            
        ]
        
    }
]);

export default routes;