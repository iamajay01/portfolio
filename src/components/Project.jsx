import Careerconnect from "../assets/Careerconnect.png";
import porfolio from "../assets/portfolio.png";
import blog from "../assets/blog.jpg";

const projects = [
  {
    id: 1,
    name: "Career Connect",
    technologies: "Mern Stack",
    image: Careerconnect,
    github: "https://github.com/iamajay01/Career-Connect.git",
  },
  {
    id: 2,
    name: "Blog App",
    technologies: "Mern Stack",
    image: blog,
    github: "https://github.com/iamajay01/Blog-App.git",
  },
  {
    id: 3,
    name: "Portfolio Web Application",
    technologies: "Mern Stack",
    image: porfolio,
    github: "https://github.com/iamajay01/portfolio.git",
  },
];

const Project = () => {
  return (
    <div className="bg-black text-white py-20" id="project">
      <div className="container mx-auto px-8 md:px-16 lg:px-24">
        <h2 className="text-4xl font-bold text-center mb-12">My Projects</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105"
            >
              <img
                src={project.image}
                alt={project.name}
                className="rounded-lg mb-4 w-full h-48 object-cover "
              />
              <h3 className="text-2xl font-bold mb-2">{project.name}</h3>
              <p className="text-gray-400 mb-4">{project.technologies}</p>
              <a
                href={project.github}
                className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full"
              >
                GitHub
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Project;
