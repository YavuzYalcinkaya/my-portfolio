const Contact = () => {
  return (
    <div name="contact" className="w-full p-4">
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto">
        <div className="pb-8 text-center lg:text-start">
          <h2 className="text-4xl font-bold inline border-b-4 border-black dark:border-gray-500">
            Contact
          </h2>
        </div>
        <p className="py-6 text-center lg:text-start">
          I take care to develop creative and original projects and I show my
          interest in new technologies here. If you would like to cooperate with
          me on your projects, please do not hesitate to contact me.
        </p>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/3d1b956b-59a8-400c-ab78-4ee14f13b8ef"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 placeholder:text-gray-400 bg-transparent border-2 rounded-md  focus:outline-none"
            />
            <input
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 placeholder:text-gray-400 bg-transparent border-2 rounded-md focus:outline-none"
            />
            <textarea
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 placeholder:text-gray-400 bg-transparent border-2 rounded-md  focus:outline-none"
            ></textarea>

            <button className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
