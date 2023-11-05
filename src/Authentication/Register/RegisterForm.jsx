import { Link } from "react-router-dom";

const RegisterForm = () => {
    return (
        <div>
            <div className="py-16">
      <div className="mt-7 max-w-md mx-auto bg-[#f1f7f4] border border-lightGray rounded-xl shadow-sm dark:bg-gray-800 dark:border-gray-700">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h1 className="block text-2xl font-bold text-gray-800 dark:text-white">
              Sign Up
            </h1>
            <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
            Already have an account?&nbsp;&nbsp;
              <Link
                className="text-oliveGreen decoration-2 hover:underline font-bold"
                to="/login"
              >
                Sign in here
              </Link>
            </p>
          </div>

          <div className="mt-5">
            <form>
              <div className="grid gap-y-4">
              <div>
                  <label
                    htmlFor="name"
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Your Name
                  </label>
                  <div className="relative">
                    <input
                      type="text"
                      id="name"
                      name="name"
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      required
                    />
                  </div>
                </div>

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
                      id="email"
                      name="email"
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      required
                    />
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
                      id="password"
                      name="password"
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm mb-2 dark:text-white"
                  >
                    Your image URL
                  </label>
                  <div className="relative">
                    <input
                      type="file"
                      id="image"
                      name="image"
                      className="py-3 px-4 block w-full border border-lightGray rounded-md text-sm focus-visible:outline-none focus:border-oliveGreen  dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400"
                      required
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  className="py-3 px-4 inline-flex justify-center items-center gap-2 rounded-md border border-transparent font-semibold bg-skyBlue text-white hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-all text-sm dark:focus:ring-offset-gray-800"
                >
                  Sign up
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
        </div>
    );
};

export default RegisterForm;