import { Helmet } from "react-helmet";
import Banner from "./Banner";
import ContactUs from "./ContactUs";
import FeaturedSection from "./FeaturedSection";
import JobCategoryTabs from "./JobCategoryTabs";

const Home = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Home - Career Connects</title>
      </Helmet>
      <Banner></Banner>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8 lg:py-20">
        <FeaturedSection></FeaturedSection>
        <JobCategoryTabs></JobCategoryTabs>
        <ContactUs></ContactUs>
      </div>
    </div>
  );
};

export default Home;
