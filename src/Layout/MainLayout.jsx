import { Outlet } from "react-router-dom";
import Header from "../Shared/Header/Header";
import Footer from "../Shared/Footer/Footer";

const MainLayout = () => {
  return (
    <div>
      <Header></Header>
      <div className="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8"><Outlet></Outlet></div>  
      <Footer></Footer>
    </div>
  );
};

export default MainLayout;
