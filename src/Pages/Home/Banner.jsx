const Banner = () => {
  return (
    <div>
      <div className="w-full lg:h-[700px] flex-col md:flex">
        <div className="lg:min-h-[700px] relative bg-banner bg-no-repeat bg-cover grid grid-cols-2">
          <div className="w-full">
            <div className="px-8 py-8 lg:py-60 lg:px-32">
              <h1 className="text-xl lg:text-6xl font-bold text-secondaryTextColor">
                Welcome to Max Speed
              </h1>
              <p className="font-bold text-secondaryTextColor lg:pt-10 lg:text-center text-xs lg:text-xl">
                Your one stop Atomotive solution!
              </p>
            </div>
          </div>
          <div className="flex justify-end">
            <img
              src="https://i.ibb.co/rMWKYGj/bg1.png"
              alt="bg-image"
              className="lg:w-full object-contain relative top-4 lg:top-10 "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
