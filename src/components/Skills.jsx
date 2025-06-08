import { TiHtml5 } from "react-icons/ti";
import { RiTailwindCssFill, RiReactjsFill } from "react-icons/ri";
import { FaNodeJs, FaFigma, FaGitAlt } from "react-icons/fa";
import { DiNodejs } from "react-icons/di";
import { SiExpress, SiMysql, SiMongodb } from "react-icons/si";
import { LuGithub } from "react-icons/lu";
import { VscVscodeInsiders } from "react-icons/vsc";

const Skills = () => {
    return (
        <div className="bg-black text-white py-12" id="skills">
            <div className="container mx-auto px-8 md:px-16 lg:px-24 text-center">
                <h2 className="text-4xl font-bold mb-6">What I am good at.</h2>
                <p className="mb-8 max-w-2xl mx-auto">
                    I am passionate about learning, experimenting, and building with the latest technologies. Here are some of the major languages, technologies, tools, and platforms I have worked with.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-6 justify-center">
                    {[
                        { title: "Frontend", icons: [TiHtml5, RiTailwindCssFill, FaNodeJs, RiReactjsFill, FaFigma] },
                        { title: "Backend", icons: [DiNodejs, SiExpress] },
                        { title: "Database", icons: [SiMysql, SiMongodb] },
                        { title: "Tools & Platforms", icons: [FaGitAlt, LuGithub, VscVscodeInsiders] }
                    ].map((category, index) => (
                        <div key={index} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 w-full max-w-xs mx-auto">
                            <h2 className="text-left text-2xl mb-2 font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-400">
                                {category.title}
                            </h2>
                            <div className="flex flex-wrap justify-center gap-4 text-5xl">
                                {category.icons.map((Icon, idx) => (
                                    <button key={idx} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-lg">
                                        <Icon />
                                    </button>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Skills;