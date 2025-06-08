import {FaEnvelope, FaMapMarkedAlt, FaPhone} from 'react-icons/fa'

const Contact = () => {
  return (
    <div className='bg-black text-white py-20' id='contactme'>
         <div className='container mx-auto px-8 md:px-16 lg:px-24'>
            <h2 className='text-4xl font-bold text-center mb-12'>Contact Me</h2>
            <div className='flex flex-col md:flex-row items-center md:space-x-12'>
                <div className='flex-1'>
                    <h3 className='text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-blue-500 mb-4'> Let&apos;s Talk</h3>
                    <p>I'm open to discussing web development project or for various web development opportunities.</p>
                    <div className='mb-4 mt-8'>
                        <FaEnvelope className='inline-block text-green-400 mr-2'></FaEnvelope>
                        <a href='ajkumar96214@gmail.com' className='hover:underline'>ajkumar96214@gmail.com</a>

                    </div>
                    <div className='mb-4 mt-8'>
                        <FaPhone className='inline-block text-green-400 mr-2'></FaPhone>
                        <span>+919368473757</span>
                    </div>
                    <div className='mb-4 mt-8'>
                        <FaMapMarkedAlt className='inline-block text-green-400 mr-2'></FaMapMarkedAlt>
                        <span>Moradabad, Uttar Pradesh, India</span>
                    
                    </div>
                </div>
                
            </div>
        </div>
    </div>
  )     
    
}

export default Contact