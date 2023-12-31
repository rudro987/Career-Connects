import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Provider/AuthProvider";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Header = () => {
  const { user, logOutUser, loading } = useContext(AuthContext);
  const [isDropDown, setIsDropDown] = useState(false);

  const handleLogOut = () => {
    logOutUser()
      .then(() => {
        setIsDropDown(false);
        toast.success(`${user.displayName}, you are logged out!`);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <header className="flex flex-wrap shadow-md sm:justify-start sm:flex-nowrap z-50 w-full border-b border-white/[.5] text-sm py-3 sm:py-0">
      <nav
        className="relative max-w-[85rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8 py-3"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          <Link
            className="flex-none text-xl font-semibold text-charcoalGray"
            to="#"
            aria-label="CareerConnects"
          >
            <span className="flex gap-2 items-center"><img src="https://i.ibb.co/881WvTD/Career-Conencts.jpg" width={50} height={50} />CareerConnects</span>
          </Link>
          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-2 inline-flex justify-center items-center gap-2 rounded-md font-medium text-white shadow-sm align-middle bg-charcoalGray hover:bg-charcoalGray hover:text-white  transition-all text-sm"
              data-hs-collapse="#navbar-collapse-with-animation"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
            >
              <svg
                className="hs-collapse-open:hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path
                  fillRule="evenodd"
                  d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z"
                />
              </svg>
              <svg
                className="hs-collapse-open:block hidden w-4 h-4"
                width="16"
                height="16"
                fill="currentColor"
                viewBox="0 0 16 16"
              >
                <path d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
              </svg>
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block"
        >
          <div className="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:pl-7">
            <Link
              className="font-medium text-charcoalGray hover:text-oliveGreen focus:text-oliveGreen sm:py-6"
              to="/"
              aria-current="page"
            >
              Home
            </Link>
            <Link
              className="font-medium text-charcoalGray hover:text-oliveGreen focus:text-oliveGreen sm:py-6"
              to="/all-jobs"
            >
              All Jobs
            </Link>
            <Link
              className="font-medium text-charcoalGray hover:text-oliveGreen focus:text-oliveGreen sm:py-6"
              to="/blog"
            >
              Blog
            </Link>
            <Link
              className="font-medium text-charcoalGray hover:text-oliveGreen focus:text-oliveGreen sm:py-6"
              to="/user-profile"
            >
              User Profile
            </Link>
            {user && (
              <>
                <Link
                  className="font-medium text-charcoalGray hover:text-oliveGreen focus:text-oliveGreen sm:py-6"
                  to="/add-a-job"
                >
                  Add a Job
                </Link>
                <Link
                  className="font-medium text-charcoalGray hover:text-oliveGreen focus:text-oliveGreen sm:py-6"
                  to="/my-jobs"
                >
                  My Jobs
                </Link>
                <Link
                  className="font-medium text-charcoalGray hover:text-oliveGreen focus:text-oliveGreen sm:py-6"
                  to="/applied-jobs"
                >
                  Applied Jobs
                </Link>
              </>
            )}

            <div>
              {user ? (
                
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                  <div
                    className="w-20"
                    onMouseEnter={() => setIsDropDown(true)}
                    onMouseLeave={() => setIsDropDown(false)}
                  >
                  {loading && <h1>...</h1> }
                        <img
                      src={user.photoURL || `https://i.ibb.co/sH0Fh3T/user.png`}
                      alt={user.displayName}
                      className="rounded-full w-12 cursor-pointer"
                    />
                    
                    {isDropDown && (
                      <div className="absolute z-20 w-48 -ml-10 shadow-md bg-white rounded-md px-5 py-6 text-center font-medium text-charcoalGray hover:text-oliveGreen flex flex-col gap-4">
                        <p className="font-bold">Hello, {user.displayName} !</p>
                        <Link to="/user-profile" className="underline">Profile</Link>
                        <Link
                          type="button"
                          onClick={handleLogOut}
                          className="bg-oliveGreen p-2 rounded-md text-white/[.8] hover:text-white"
                        >
                          Log out
                        </Link>
                      </div>
                    )}
                  </div>
                </label>
              ) : (
                <Link
                  className="flex items-center gap-x-2 font-medium bg-oliveGreen pl-5 pr-7 py-4 rounded-md text-white/[.8] hover:text-white sm:pl-6"
                  to="/login"
                >
                  <svg
                    className="w-4 h-4"
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    fill="currentColor"
                    viewBox="0 0 16 16"
                  >
                    <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6zm2-3a2 2 0 1 1-4 0 2 2 0 0 1 4 0zm4 8c0 1-1 1-1 1H3s-1 0-1-1 1-4 6-4 6 3 6 4zm-1-.004c-.001-.246-.154-.986-.832-1.664C11.516 10.68 10.289 10 8 10c-2.29 0-3.516.68-4.168 1.332-.678.678-.83 1.418-.832 1.664h10z" />
                  </svg>
                  Log in
                </Link>
              )}
            </div>
            
          </div>
        </div>
        <ToastContainer />
      </nav>
    </header>
  );
};

export default Header;
