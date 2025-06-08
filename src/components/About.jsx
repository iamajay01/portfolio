import Immage from '../assets/pr.webp'

const About = () => {
  return (
    <div className='bg-black text-white py-20' id='aboutme'>
        <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>About Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <img src={Immage} alt=""
                className='w-72 h-80 rounded object-cover mb=8 md:mb-0'/>
                <div className='flex-1'>
                    <p className='text-lg mb-8'>
                    I am a passionate mern-stack developer with a focus on building modern and responsive web applications. With a strong foundation in both frontend and backened technologies, I strive to create seamless and efficient user experiences.
                    </p>
                    <div className='space-y-4'>
                        
                        <div className='flex items-center'>
                            <label htmlFor='reactjs' className='w-2/12'>Frontend Development</label> 
                            <div className='grow bg-gray-800 ml-8 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-11/12'>
                                </div>
                            </div>
                        </div>
                        <div className='flex items-center'>
                            <label htmlFor='nodejs' className='w-2/12'>Backend Developemnt </label> 
                            <div className='grow bg-gray-800 ml-8 rounded-full h-2.5'>
                                <div className='bg-gradient-to-r from-green-400 to-blue-500 h-2.5 rounded-full transform transition-transform duration-300 hover:scale-105 w-9/12'>
                                </div>
                            </div>
                        </div>
                        
                        
                    </div>
                    <div className='mt-12 flex flex-col md:flex-row justify-between text-center space-y-4 md:space-y-0'>
                        <div>
                            <a href="/resume.pdf" download="Ajay_Resume.pdf">
                            <button className="bg-gradient-to-r from-pink-400           to-yellow-500 text-white inline-block transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                             Check Resume
                            </button>
                         </a>
                        </div>
                        <div>
                            <a href="https://www.linkedin.com/in/ajay-kumar-97b679265" target="_blank" rel="noopener noreferrer">
                            <button className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white inline-block transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                            Check LinkedIn
                            </button>
                            </a>
                        </div>
                        <div>
                            <a href="https://github.com/iamajay01" target="_blank" rel="noopener noreferrer">
                            <button className="bg-gradient-to-r from-pink-400 to-yellow-500 text-white inline-block transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full">
                            Check GitHub
                            </button>
                            </a>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default About