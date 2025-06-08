import IEEE from '../assets/IEEE.jpg'
import Python from '../assets/Python.jpg'
import Web from '../assets/Web.jpg'

const certification =[
    {
        id:1,
        name:"GuardianSync",
        description:"Presenting Cutting-Edge Innovation - An IEEE Research Showcase",
        image:IEEE,
        

    },
    {
        id:2,
        name:"Web Development Training",
        description:"Empowered with Web Development Skills – Successfully Completed 6-Week Training with ShapeMySkills by Ducat!",
        image:Web,
        

    },
    {
        id:3,
        name:"Python Programming",
        description:"Empowered with Python Programming Skills with Technoledge Eduresearch under supervision of I3 Infosoft Pvt.Ltd.",
        image:Python,
        

    },

];

const Certification = ()=>{
    return(
        <div className="bg-black text-white py-20 ">
            <div className="container mx-auto px-8 md:px-16 lg:px-24">
                <h2 className="text-4xl font-bold text-center mb-12 ">Trainings & Researches</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {certification.map((certification)=>(
                        <div key={certification.id} className="bg-gray-800 p-6 rounded-lg hover:shadow-lg transform transition-transform duration-300 hover:scale-105 " >
                            <img src={certification.image} className="rounded-lg mb-4 w-full h-48 object-cover"></img>
                            <h3 className="text-2xl font-bold mb-2">{certification.name}</h3>
                            <p className="text-gray-400 mb-4">{certification.description}</p>
                            <a href={certification.image} className="inline-block bg-gradient-to-r from-green-400 to-blue-500 text-white px-4 py-2 rounded-full">View</a>

                        </div>
                    ))}
                </div>

            </div>
           
        </div>
    )
}


export default Certification;