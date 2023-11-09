const Banner = () => {
  return (
    <div>
      <div className="w-full lg:h-[700px] flex-col md:flex">
        <div className="lg:min-h-[700px] relative bg-[url('https://reactjob.codebasket.xyz/assets/img/banner/banner-2.jpg')] bg-no-repeat bg-cover grid grid-cols-2">
          <div className="w-full">
            <div className="px-0 py-8 lg:py-60 lg:px-32">
              <h1 className="text-sm sm:text-xl pl-10 lg:text-[44px] font-bold text-charcoalGray">
                Welcome to CareerConnects
              </h1>
              <p className="font-bold text-secondaryTextColor lg:pt-10 text-center text-[12px] lg:text-xl">
                World's number 1 job board!
              </p>
              <div>
                <label
                  htmlFor="hs-trailing-button-add-on-with-icon"
                  className="sr-only"
                >
                  Label
                </label>
                <div className="flex rounded-lg shadow-sm justify-center pt-2 lg:pt-10">
                  <input
                    type="text"
                    id="hs-trailing-button-add-on-with-icon"
                    placeholder="Search by category..."
                    name="hs-trailing-button-add-on-with-icon"
                    className="py-3 px-4 block w-5/12 focus-visible:outline-none border-gray-200 shadow-sm rounded-s-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-gray-400 dark:focus:ring-gray-600"
                  />
                  <button
                    type="button"
                    className="w-[2.875rem] h-[2.875rem] flex-shrink-0 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-e-md border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                  >
                    <svg
                      className="flex-shrink-0 h-4 w-4"
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <circle cx="11" cy="11" r="8" />
                      <path d="m21 21-4.3-4.3" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-center">
            <img
              src="https://www.wildapricot.com/wp-content/uploads/2022/10/job-board-software.png"
              alt="bg-image"
              className="lg:w-3/4 object-contain relative top-4 lg:top-10 rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
