import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";
import SocialLinks from "../social-links";

const Home = () => {
  return (
    <div
      name="home"
      className="w-full  py-32 flex flex-col bg-white dark:bg-gradient-to-b from-black via-black to-gray-800"
    >
      <div className="flex flex-col items-center justify-center py-5  px-4 md:flex-row">
        <div className="flex flex-col justify-center">
          <h2 className="text-4xl sm:text-7xl font-bold text-black dark:text-white">
            I&apos;m a Front-End Developer
          </h2>
          <p className="text-black dark:text-gray-500  py-4 text-xl max-w-md">
            I have 8 years of experience building and desgining software.
            Currently, I love to work on web application using technologies like
            React, Tailwind, Next JS and GraphQL.
          </p>

          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>
      </div>
      <div className="flex mt-10 justify-center items-center">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Home;
