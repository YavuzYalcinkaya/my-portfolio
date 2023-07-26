const Experience = () => {
  return (
    <div
      name="experience"
      className="w-full pt-20 max-w-screen-lg p-4 mx-auto flex flex-col justify-center"
    >
      <div className="text-center lg:text-start">
        <h2 className="text-4xl font-bold inline border-b-4 border-black dark:border-gray-500">
          Experience
        </h2>
      </div>
      <div className="p-4 mt-8 shadow-md shadow-gray-600 rounded-lg">
        <span className="font-bold text-xl">
          Nurus (March 2022 - April 2023)
        </span>
        <p className="mt-2 text-lg">
          I worked on a web project used by sales personnel, consisting of a
          dynamic pages, where information about the products sold is shared. In
          this project, ı used React, React Hooks, React-Bootstrap, REST API,
          and Azure AD technologies. I worked on making new components and
          improving their performance on our e-commerce site.
        </p>
      </div>
    </div>
  );
};

export default Experience;
