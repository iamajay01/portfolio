import Immage from "../assets/pr.webp";

const Hero = () => {
  return (
    <div className="bg-black text-white text-center py-16">
      <img
        src={Immage}
        alt=""
        className="mx-auto mb-8 w-80 h-80 rounded-full object-cover transform transition-transform duration-300 hover:scale-105"
      />
      <h1 className="text-4xl font-bold">
        Hi, I am{" "}
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500">
          Ajay Kumar,{" "}
        </span>
        MERN-Stack Developer
      </h1>
      <p className="mt-4 text-lg text-gray-300">
        I specialize in building modern and responsive web applications.
      </p>
      <div className="mt-8 space-x-4">
        <a href="/resume.pdf" download="Ajay_Resume.pdf">
          <button className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white  md:inline transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
            Resume
          </button>
        </a>
      </div>
    </div>
  );
};

export default Hero;
