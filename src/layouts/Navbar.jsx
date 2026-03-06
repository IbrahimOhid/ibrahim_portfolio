import { useState } from "react";
import { Link } from "react-router-dom";
import { CiMenuFries } from "react-icons/ci";
import { RxCross2 } from "react-icons/rx";
import { navbarData } from "../data/NavbarData";
import Button from "../components/Button/Button";
import Resume from "/project_img/Resume - Mohammad Ibrahim.pdf";

const Navbar = () => {
  const [mobileSidebarOpen, setMobileSidebarOpen] = useState(false);
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <nav className="fixed left-0 top-0 right-0 z-100 flex items-center justify-between px-4 border-b border-teal-400 bg-teal-900 transition-all py-3 lg:py-0">
        <div
          to="/"
          onClick={scrollTop}
          className="font-bold text-xl tracking-wider text-teal-300"
        >
          IBRAHIM.
        </div>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center gap-4 md:gap-8 text-[1rem] font-medium ">
          {navbarData.map((nav) => (
            <div key={nav.id}>
              <a
                href={`#${nav.path}`}
                className="flex items-center gap-2 hover:text-teal-400 transition before:w-0  text-white hover:before:w-full before:bg-teal-400 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px]  hover:text-teal-400 transition-all duration-300 before:left-0 cursor-pointer capitalize"
              >
                {nav.logo && <nav.logo className="text-xl" />}
                <span>{nav.name}</span>
              </a>
            </div>
          ))}
        </div>

        <div>
          <div className="max-sm:hidden cursor-pointer  py-2  transition rounded-full">
            <Button link={Resume} value={"Resume"} />
          </div>

          {/* Mobile Menu Icon */}
          <CiMenuFries
            className="text-3xl cursor-pointer md:hidden text-teal-400"
            onClick={() => setMobileSidebarOpen(true)}
          />
        </div>
      </nav>

      {/* Mobile Menu */}
      <div
        className={`sm:hidden fixed inset-0 ${
          mobileSidebarOpen ? "w-full" : "w-0"
        }  overflow-hidden bg-teal-900 backdrop-blur shadow-xl rounded-lg z-[200] text-sm transition-all`}
      >
        <div className="flex flex-col items-center justify-center h-full text-xl font-semibold gap-6 p-4  ">
          {navbarData.map((nav) => (
            <div key={nav.id}>
              <a
                href={`#${nav.path}`}
                className="flex items-center gap-2 hover:text-teal-400 transition before:w-0  text-white hover:before:w-full before:bg-teal-400 before:h-[2px] before:transition-all before:duration-300 before:absolute relative before:rounded-full before:bottom-[-2px]  hover:text-teal-400 transition-all duration-300 before:left-0 cursor-pointer capitalize"
              >
                {nav.logo && <nav.logo className="text-xl" />}
                <span>{nav.name}</span>
              </a>
            </div>
          ))}
          <div className="cursor-pointer  py-2  transition rounded-full">
            <Button link={Resume} value={"Resume"} />
          </div>
          <RxCross2
            className="text-3xl  md:hidden absolute size-8 right-6 top-6 text-teal-400 hover:text-red-700 cursor-pointer"
            onClick={() => setMobileSidebarOpen(!mobileSidebarOpen)}
          />
        </div>
      </div>
    </>
  );
};

export default Navbar;
