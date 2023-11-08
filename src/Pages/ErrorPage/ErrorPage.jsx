import { Link } from "react-router-dom";

const ErrorPage = () => {
    return (
        <div className="h-[100vh] flex justify-center items-center bg-opacity-100 bg-white dark:bg-[#001420] text-black dark:text-white">
      <div className="text-center">
        <h1 className="text-5xl font-bold text-[#0B0B0B] mb-10">Error: 404 Page Not Found!!!</h1>
        <p className="text-2xl font-semibold text-[#0b0b0b66] mb-10">The page you are looking for does not exist.</p>
        <div className="flex items-center justify-center">
        <Link to="/">
        <button className="bg-btnColor text-white font-semibold text-base py-4 px-7 rounded-lg flex justify-center items-center">To Home</button>
        </Link>
        
        </div>
      </div>
    </div>
    );
};

export default ErrorPage;