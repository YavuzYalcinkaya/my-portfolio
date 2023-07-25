const About = () => {
  return (
    <div name="about" className="w-full">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full">
        <div>
          <h2 className="text-4xl inline font-bold border-b-4 border-black dark:border-gray-500">
            About
          </h2>
        </div>

        <p className="text-xl mt-10">
          Hello! My name is Yavuz. I live in Ankara. Thanks to my interest and
          passion for technology, I stepped into the software world and I love
          learning, exploring and developing projects. I mainly develop projects
          with React and Next.js.
        </p>

        <br />

        <p className="text-xl">
          I take great pleasure in developing my own projects and writing code.
          You can find more about my own software projects and open source
          projects that I have contributed to on this site. This site is a
          portfolio site created to showcase my experiences, talents and
          interests. Here you can review my work, get in touch and learn more
          about my projects.
        </p>
      </div>
    </div>
  );
};

export default About;
