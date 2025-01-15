import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';
import chatty from "/public/p1.jpg.png"
import ecom from "/public/p2.png"
import { CiLink } from "react-icons/ci";

const projects = [
    {
      img:ecom,
      title: "EcomExpress - Full stack ecommerce app",
      description: "A full-stack eCommerce application built using the MERN stack. It features user authentication, product listing, shopping cart functionality, and secure payment integration. The app offers an intuitive user interface, efficient backend APIs, and a seamless shopping experience",
      links: {
        site: "https://github.com/Gagankainthola/EcomExpress",
        github: "https://github.com/Gagankainthola/EcomExpress",
      },
    },
    {
      img:chatty,
      title: "Chatty - Real Time Chat application",
      description: "A real-time chat application built using the MERN stack. It includes features like JWT authentication, Socket.IO for real-time messaging, RESTful APIs, and a user-friendly interface. Chatty enables seamless and secure communication with instant message delivery.",
      links: {
        site: "https://fullstack-chat-app-gjex.onrender.com",
        github: "https://github.com/Gagankainthola/FullStack-chat-app",
      },
    },
  ];
  
const Projects = () => {
  return (
    <div id="projects">
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' >
    <h2 className='text-3xl font-bold text-gray-200 mb-8'>Projects</h2>
    {projects.map((project, index) => (
        // eslint-disable-next-line react/jsx-key
        <Reveal>
        <div key={index} 
        className={`flex flex-col md:flex-row ${index % 2 !== 0 ? 'md:flex-row-reverse' : ''} mb-12`}>
            <div className='w-full md:w-1/2 p-4'>
                <img
                    src={project.img}
                    alt={project.title}
                    className='w-full h-full object-cover rounded-lg shadow-lg cursor-pointer transition-all duration-300 hover:scale-105 '
                />
            </div>
            <div className='w-full md:w-1/2 p-4 flex flex-col justify-center'>
                <h3 className='text-2xl font-semibold text-gray-200 mb-4'>{project.title}</h3>
                <p className='text-gray-300 mb-4'>{project.description}</p>
               
                <div className='flex space-x-4'>
                   
                    <a href={project.links.github}
                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                    transition duration-300'>
                        <AiOutlineGithub/>
                    </a>
             
                    <a href={project.links.site}
                        className='px-4 py-2 bg-slate-600 text-gray-200 rounded-lg hover:bg-slate-700
                                    transition duration-300'>
                        <CiLink/>
                    </a>

                </div>

            </div>

        </div>
        </Reveal>
    ))}

</div>
</div>
)
}

export default Projects