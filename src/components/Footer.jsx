
import {  FaGithub, FaLinkedin } from "react-icons/fa";

const Footer=()=>{
    return(
        <footer className='bg-black text-white '>
            <div>
                <div className='border-t border-gray-600 pt-4 flex flex-col md:flex-row justify-between items-center text-2xl  '> 
                    <p className='text-gray-400'>
                    &copy; {new Date().getFullYear()}.All right reserved.
                    </p>

                    
                    <div className='flex space-x-4 my-4 md:my-0'> 
                        <a href="https://www.linkedin.com/in/ajay-kumar-97b679265" target="_blank" rel="noopener noreferrer">
                        <FaLinkedin className="text-gray-400 hover:text-white" />
                    
                        </a>
                        <a href="https://github.com/iamajay01" target="_blank" rel="noopener noreferrer">
                        <FaGithub className="text-gray-400 hover:text-white " />
                         </a>
                    </div>
                    <div className='flex-space-x-4'>
                        <a href='#' className='text-gray-400 hover:text-white '>
                            Privacy 
                        </a>
                        <a href='#' className='text-gray-400 hover:text-white'>
                             & Terms of condition
                        </a>
                    </div>
               

                </div>
            </div>
        </footer>
        

    )
};
export default Footer;