import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="bg-warna_navbar w-full h-12 md:h-11 flex justify-center ">
      <div className=" max-w-[1024px] flex items-center justify-center w-full h-full">
        <div className="w-[96%] h-[90%] flex items-center justify-between text-warna_apple">
          <Link to='/Apple-ReactJs/' className="bx bxl-apple text-[23px] md:text-[20px]"></Link>
          <div className=" hidden md:w-[87%] md:h-full md:flex items-center justify-between text-xs">
          <a href="">Mac</a>
          <a href="">iPad</a>
          <a href="">iPhone</a>
          <a href="">Watch</a>
          <a href="">AirPods</a>
          <a href="">TV & Rumah</a>
          <a href="">Hiburan</a>
          <a href="">Dukungan</a>
          <a href="">Tempat Membeli</a>
          </div>
          <div className="h-full w-16 md:w-4 flex items-center justify-between text-[20px]">
            <i className="bx bx-search md:text-[17px]"></i>
            <i className="bx bx-list-ul md:hidden"></i>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
