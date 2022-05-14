import { GoHome } from "react-icons/go";
import { FaTimes } from "react-icons/fa";
import { BiPieChartAlt } from "react-icons/bi";
import { Link, NavLink } from "react-router-dom";

const Sidebar = ({ open, handleChange }) => {
  return (
    <>
      <div
        className={`flex flex-col text-white absolute z-40 right-0 top-0 lg:static lg:left-auto lg:top-auto lg:translate-x-0 transform h-screen overflow-y-scroll lg:overflow-y-auto no-scrollbar w-64 lg:w-64 lg:sidebar-expanded:!w-64 2xl:!w-64 shrink-0 bg-slate-800 p-4 transition-all duration-200 ease-in-out ${
          open ? "translate-x-0" : "translate-x-64"
        }`}
      >
        <span
          onClick={() => handleChange()}
          className="cursor-pointer text-white lg:hidden absolute top-2 left-2 w-8 h-8 flex items-center justify-center bg-red-600 rounded-full"
        >
          <FaTimes />
        </span>
        <h3 className="text-sm my-8">مدیریت سرمایه بیمه سلامت ایرانیان</h3>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? "bg-purple-900 rounded-sm" : ""
          }
        >
          <div className="w-full flex-end text-right  text-white  p-3">
            <div className="flex w-full items-center">
              <span className="w-8 h-8 flex items-center justify-center rounded-md text-white bg-purple-800">
                <GoHome />
              </span>
              <span className="text-sm mr-3">صفحه اصلی</span>
            </div>
          </div>
        </NavLink>
        <div className="my-2"></div>
        <NavLink
          to="/pie-chart"
          className={({ isActive }) => (isActive ? "bg-purple-900" : "")}
        >
          <div className="w-full flex-end text-right  text-white p-3">
            <div className="flex w-full items-center ">
              <span className="w-8 h-8 flex items-center justify-center rounded-md text-white bg-purple-800">
                <BiPieChartAlt />
              </span>
              <span className="text-sm mr-3">توزیع وزن سرمایه گذاری</span>
            </div>
          </div>
        </NavLink>
      </div>
    </>
  );
};

export default Sidebar;
