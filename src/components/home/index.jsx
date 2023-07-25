import { FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { BsFillPersonLinesFill } from "react-icons/bs";

const Home = () => {
  return (
    <section
      name="home"
      className="pt-32 flex flex-col justify-start items-center p-5 w-full text-center"
    >
      <h2 className="text-5xl text-rose-600 font-bold">Yavuz Yalçınkaya</h2>
      <h3 className="py-3 text-2xl">Frontend Developer</h3>
      <p className="max-w-xl text-xl font-light text-gray-500">
        I develop software applications with javascript technologies. I have
        worked on projects of varying sizes and complexities, from simple
        landing pages to full-scale web applications. I am comfortable
        collaborating with cross-functional teams, communicating effectively
        with designers and backend developers to ensure that projects are
        delivered on time and to a high standard.
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
