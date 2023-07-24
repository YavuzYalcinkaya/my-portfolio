// import { MdOutlineKeyboardArrowRight } from "react-icons/md";
// import { Link } from "react-scroll";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    // <div
    //   name="home"
    //   className="w-full  py-32 flex flex-col bg-white dark:bg-gradient-to-b from-black via-black to-gray-800"
    // >
    //   <div className="flex flex-col items-center justify-center py-5  px-4 md:flex-row">
    //     <div className="flex flex-col justify-center">
    //       <h2 className="text-4xl sm:text-7xl font-bold text-black dark:text-white">
    //         I&apos;m a Front-End Developer
    //       </h2>
    //       <p className="text-black dark:text-gray-500  py-4 text-xl max-w-md">
    //         I have 8 years of experience building and desgining software.
    //         Currently, I love to work on web application using technologies like
    //         React, Tailwind, Next JS and GraphQL.
    //       </p>

    //       <div>
    //         <Link
    //           to="portfolio"
    //           smooth
    //           duration={500}
    //           className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
    //         >
    //           Portfolio
    //           <span className="group-hover:rotate-90 duration-300">
    //             <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
    //           </span>
    //         </Link>
    //       </div>
    //     </div>
    //   </div>
    //   <div className="flex mt-10 justify-center items-center">
    //     <SocialLinks />
    //   </div>
    // </div>
    <section
      name="home"
      className="pt-32 flex flex-col justify-start items-center p-5 w-full text-center"
    >
      <h2 className="text-5xl text-rose-600 font-bold">Yavuz Yalçınkaya</h2>
      <h3 className="py-3 text-2xl">Frontend Developer</h3>
      <p className="max-w-xl text-xl font-light text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Veritatis,
        architecto quam temporibus quia harum quas eius aliquid officiis
        voluptates autem suscipit atque debitis hic. Neque molestias ducimus
        velit aspernatur fugiat?{" "}
      </p>
      <div className="flex justify-evenly py-8 lg:py-16 w-full md:w-1/3">
        <a
          className="cursor-pointer duration-300 text-[#0072B1] dark:text-white hover:scale-110"
          href="https://linkedin.com/in/yavuz-yalçınkaya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaLinkedin size={40} />
        </a>
        <a
          className="cursor-pointer duration-300 text-[#171515] dark:text-white hover:scale-110"
          href="https://github.com/YavuzYalcinkaya"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FaGithub size={40} />
        </a>
        <a
          className="cursor-pointer duration-300 hover:scale-110 text-[#BB001B] dark:text-white"
          href="recepyavuzyalcinkaya@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
        >
          <HiOutlineMail size={40} />
        </a>
        <a
          href="/yavuz.pdf"
          download={true}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer duration-300 hover:scale-110 text-[#344e6c] dark:text-white"
        >
          <BsFillPersonLinesFill size={40} />
        </a>
      </div>
    </section>
  );
};

export default Home;
