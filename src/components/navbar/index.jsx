import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { MdNightsStay, MdWbSunny } from "react-icons/md";
import { Link } from "react-scroll";

const NavBar = ({ darkMode, setDarkMode }) => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
    },
    {
      id: 2,
      link: "about",
    },
    {
      id: 3,
      link: "experience",
    },
    {
      id: 4,
      link: "portfolio",
    },
    {
      id: 5,
      link: "technologies",
    },
    {
      id: 6,
      link: "contact",
    },
  ];

  return (
    <div className="flex justify-end md:justify-center items-center w-full z-10 h-20 px-4 text-black dark:text-white bg-white dark:bg-black fixed">
      <ul className="hidden md:flex">
        {links.map(({ id, link }) => (
          <Link
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-gray-500 hover:scale-105  duration-200 dark:hover:text-white"
            to={link}
            smooth
            duration={500}
          >
            {link}
          </Link>
        ))}
      </ul>

      <div
        onClick={() => setDarkMode(!darkMode)}
        className="hidden md:flex ml-20"
      >
        {darkMode ? (
          <MdWbSunny className="text-2xl cursor-pointer" />
        ) : (
          <MdNightsStay className="text-2xl cursor-pointer" />
        )}
      </div>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer duration-300 pr-4 z-50 text-gray-500 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center  absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-white font-semibold ">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;
