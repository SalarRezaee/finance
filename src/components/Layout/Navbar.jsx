import { RiMenu3Fill, RiNotification2Line } from "react-icons/ri";

const Navbar = ({ open, handleChange }) => {
  return (
    <div className="flex w-full bg-black text-white h-12 py-2 px-8">
      <div className="w-full flex items-center justify-between">
        {!open && (
          <div
            onClick={() => handleChange()}
            className="cursor-pointer w-8 h-8 lg:hidden flex items-center justify-center bg-gray-300 rounded-full text-white"
          >
            <RiMenu3Fill />
          </div>
        )}
        <div>
          <span className="lg:block hidden">1401/02/27</span>
        </div>
        <div className="flex items-center gap-2">
          <span className="relative inline-block cursor-pointer">
            <RiNotification2Line />
            <span className="absolute top-0 right-0 inline-flex items-center justify-center px-1 py-1 text-[10px] font-bold leading-none text-red-100 transform translate-x-1/2 -translate-y-1/2 bg-red-600 rounded-full">
              99
            </span>
          </span>
          <div className="relative inline-block cursor-pointer">
            <img
              className="inline-block object-cover w-8 h-8 rounded-full"
              src="https://images.pexels.com/photos/2955305/pexels-photo-2955305.jpeg?auto=compress&cs=tinysrgb&h=650&w=940"
              alt="Profile image"
            />
            <span className="absolute bottom-0 right-0 inline-block w-3 h-3 bg-green-600 border-2 border-white rounded-full"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
