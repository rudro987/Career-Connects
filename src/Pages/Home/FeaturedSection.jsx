
const FeaturedSection = () => {
    return (
        <div className="mx-auto max-w-[1320px] py-10 px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-xl text-center">
            <h2 className="mt-6 text-3xl font-bold leading-tight text-black dark:text-white sm:text-4xl lg:text-5xl">
              Why choose us?
            </h2>
          </div>
          <div className="mt-20 grid grid-cols-1 gap-y-8 text-center sm:grid-cols-2 sm:gap-12 lg:grid-cols-4">
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-9 w-9 text-gray-700"
                >
                  <line x1="12" y1="2" x2="12" y2="22"></line>
                  <path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"></path>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black dark:text-white">
              A brief history
              </h3>
              <p className="mt-4 text-sm text-black dark:text-white leading-6">
              The launch of CareerConnects sees CareerConnects providing a self-service, cloud-based product - whilst continuing to allow tailored solutions to customers with special, or bespoke requirements.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-9 w-9 text-gray-700"
                >
                  <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black dark:text-white">
              A commitment to excellence
              </h3>
              <p className="mt-4 text-sm leading-6 text-black dark:text-secondaryTextColor">
              The perpetual onward development of JobBoard.com means that our customers can be assured of a future proof solution - one that will grow with them
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-9 w-9 text-gray-700"
                >
                  <path d="M12 3a6.364 6.364 0 0 0 9 9 9 9 0 1 1-9-9Z"></path>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black dark:text-white">
              Built to Deliver 
              </h3>
              <p className="mt-4 text-sm leading-6 text-black dark:text-secondaryTextColor">
              CareerConnects has been designed and built to deliver results - not only to candidates and recruiters (the end-users), but most-importantly to you, the CareerConnect operator.
              </p>
            </div>
            <div>
              <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-full bg-gray-100">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="h-9 w-9 text-gray-700"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3"></polygon>
                </svg>
              </div>
              <h3 className="mt-8 text-lg font-semibold text-black dark:text-white">
              Cost Effective - for a start up
              </h3>
              <p className="mt-4 text-sm text-black leading-6 dark:text-secondaryTextColor">
              This can either be purchased as a self-service function and, if you are ready to go, you can be live within 20 minutes after completing a few simple steps, with prices starting at $0 
              </p>
            </div>
          </div>
        </div>
    );
};

export default FeaturedSection;