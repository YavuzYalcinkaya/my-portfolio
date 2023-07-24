import brentfilms from "../../assets/brentfilms.png";
import brentshop from "../../assets/brentshop.png";
import movieapp from "../../assets/movieapp.png";
import nexter from "../../assets/nexter.png";
import tour from "../../assets/tour.png";

const Portfolio = () => {
  const projects = [
    {
      id: 1,
      image: brentshop,
      title: "Brentshop",
      github: "https://github.com/YavuzYalcinkaya/brentshop",
      demo: "https://brentshop.vercel.app/",
    },
    {
      id: 2,
      image: movieapp,
      title: "MovieApp",
      github: "https://github.com/YavuzYalcinkaya/Movie-App",
      demo: "https://movie-app-ry.netlify.app/",
    },
    {
      id: 3,
      image: nexter,
      title: "Nexter",
      github: "https://github.com/YavuzYalcinkaya/Nexter-Site",
      demo: "https://nexter-site-project.netlify.app/",
    },
    {
      id: 4,
      image: tour,
      title: "Natour Tour",
      github: "https://github.com/YavuzYalcinkaya/Natours-Tour-Booking-Site",
      demo: "https://natours-tour-booking.netlify.app/",
    },
    {
      id: 5,
      image: brentfilms,
      title: "Brentfilms",
      github: "https://github.com/YavuzYalcinkaya/brentfilms",
      demo: "https://brentfilms.vercel.app/",
    },
  ];
  return (
    <div
      name="portfolio"
      className="w-full max-w-screen-lg p-4 mx-auto flex flex-col justify-center"
    >
      <div>
        <h2 className="text-4xl font-bold inline border-b-4 border-black dark:border-gray-500">
          Portfolio
        </h2>
      </div>
      <p className="mt-10 text-xl">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui quaerat
        eligendi fuga voluptatibus omnis officiis esse porro, harum facilis
        architecto!
      </p>
      <div className="mt-10 grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
        {projects.map(({ id, image, title, github, demo }) => (
          <div
            key={id}
            className="shadow-md shadow-gray-600 rounded-lg duration-300 hover:scale-110"
          >
            <h3 className="text-center text-xl font-bold p-3">{title}</h3>
            <img src={image} alt={title} />
            <div className="flex gap-5 justify-center items-center p-4">
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={github}
                className="cursor-pointer hover:scale-105 text-lg"
              >
                Code
              </a>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={demo}
                className="cursor-pointer hover:scale-105 text-lg"
              >
                Demo
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
