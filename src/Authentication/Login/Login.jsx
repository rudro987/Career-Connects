/* eslint-disable react/no-unescaped-entities */
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useContext } from "react";
import { AuthContext } from "../../Provider/AuthProvider";

const Login = () => {
  const { userLogin, loginWithGoogle } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const formSubmit = (data) => {
    const email = data.email;
    const password = data.password;

    userLogin(email, password)
      .then((res) => {
        toast.success(
          `${res.user.displayName}, you are successfully logged in!`
        );
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((err) => {
        if (err.code === "auth/invalid-login-credentials") {
          toast.error("Login error: Email or Password is incorrect!");
        }
      });
  };

  const googleSignIn = () => {
    loginWithGoogle()
      .then((res) => {
        toast.success(
          `${res.user.displayName} you are successfully logged in!`
        );
        setTimeout(() => {
          navigate(location?.state ? location.state : "/");
        }, 1500);
      })
      .catch((err) => toast.error(err.message));
  };

  return (
    <div className="py-16">
      <div className="mt-7 max-w-md mx-auto bg-[#f1f7f4] border border-lightGray rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign in
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
              Don't have an account yet?&nbsp;&nbsp;
              <Link
                className="text-oliveGreen decoration-2 hover:underline font-bold"
                to="/register"
              >
                Sign up here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <button
              onClick={googleSignIn}
              type="button"
              className="w-full py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-lightGray font-medium bg-white text-charcoalGray shadow-sm align-middle hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-blue-600 transition-all text-sm dark:bg-gray-800 dark:hover:bg-slate-800 dark:border-gray-700 dark:text-gray-400 dark:hover:text-white dark:focus:ring-offset-gray-800"
            >
              <svg
                className="w-4 h-auto"
                width="46"
                height="47"
                viewBox="0 0 46 47"
                fill="none"
              >
                <path
                  d="M46 24.0287C46 22.09 45.8533 20.68 45.5013 19.2112H23.4694V27.9356H36.4069C36.1429 30.1094 34.7347 33.37 31.5957 35.5731L31.5663 35.8669L38.5191 41.2719L38.9885 41.3306C43.4477 37.2181 46 31.1669 46 24.0287Z"
                  fill="#4285F4"
                />
                <path
                  d="M23.4694 47C29.8061 47 35.1161 44.9144 39.0179 41.3012L31.625 35.5437C29.6301 36.9244 26.9898 37.8937 23.4987 37.8937C17.2793 37.8937 12.0281 33.7812 10.1505 28.1412L9.88649 28.1706L2.61097 33.7812L2.52296 34.0456C6.36608 41.7125 14.287 47 23.4694 47Z"
                  fill="#34A853"
                />
                <path
                  d="M10.1212 28.1413C9.62245 26.6725 9.32908 25.1156 9.32908 23.5C9.32908 21.8844 9.62245 20.3275 10.0918 18.8588V18.5356L2.75765 12.8369L2.52296 12.9544C0.909439 16.1269 0 19.7106 0 23.5C0 27.2894 0.909439 30.8731 2.49362 34.0456L10.1212 28.1413Z"
                  fill="#FBBC05"
                />
                <path
                  d="M23.4694 9.07688C27.8699 9.07688 30.8622 10.9863 32.5344 12.5725L39.1645 6.11C35.0867 2.32063 29.8061 0 23.4694 0C14.287 0 6.36607 5.2875 2.49362 12.9544L10.0918 18.8588C11.9987 13.1894 17.25 9.07688 23.4694 9.07688Z"
                  fill="#EB4335"
                />
              </svg>
              Sign in with Google
            </button>

            <div className="py-3 flex items-center text-xs text-charcoalGray uppercase before:flex-[1_1_0%] before:border-t before:border-lightGray before:mr-6 after:flex-[1_1_0%] after:border-t after:border-lightGray after:ml-6 dark:text-gray-500 dark:before:border-gray-600 dark:after:border-gray-600">
              Or
            </div>

            <form onSubmit={handleSubmit(formSubmit)}>
              <div className="grid gap-y-4">
                <div>
                  <label
                    htmlFor="email"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Email address
                  </label>
                  <div className="relative">
                    <input
                      type="email"
                      placeholder="Enter your email"
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      {...register("email", {
                        required: "Please enter a valid email address",
                      })}
                    />
                    {errors.email && (
                      <p className="text-sm mt-1 text-oliveGreen font-medium">
                        {errors.email.message}
                      </p>
                    )}
                  </div>
                </div>

                <div>
                  <div className="flex justify-between items-center">
                    <label
                      htmlFor="password"
                      className="block text-sm mb-2 dark:text-white"
                    >
                      Password
                    </label>
                  </div>
                  <div className="relative">
                    <input
                      type="password"
                      placeholder="Enter password"
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      {...register("password", {
                        required: "Please enter a password",
                      })}
                    />
                    {errors.password && (
                      <p className="text-sm mt-1 text-oliveGreen font-medium">
                        {errors.password.message}
                      </p>
                    )}
                  </div>
                </div>

                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-skyBlue text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Sign in
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default Login;
