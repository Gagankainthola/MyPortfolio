import { AiOutlineGithub } from 'react-icons/ai'
import Reveal from './Reveal';
import example from "/public/example.png"
import example1 from "/public/example1.png"
import example2 from "/public/example2.jpg"
import example3 from "/public/example3.png"
import { CiLink } from "react-icons/ci";

const projects = [
    {
      img:example3,
      title: "Fedora Project",
      description: "An open-source operating system based on Linux, aiming to provide innovative features and rapid advancements.",
      links: {
        site: "https://www.youtube.com/shorts/J0NaDPV54Jg",
        github: "https://www.youtube.com/shorts/J0NaDPV54Jg",
      },
    },
    {
        img:example1,
        title: "Arduino",
      description: "An open-source electronics platform based on easy-to-use hardware and software, enabling users to create interactive projects.",
      links: {
        site: "https://www.youtube.com/@CodeChill23/shorts",
        github: "https://www.youtube.com/@CodeChill23/shorts",
      },
    },
    {
        img:example2,
        title: "FreeCAD",
      description: "An open-source parametric 3D CAD modeler made primarily to design real-life objects of any size.",
      links: {
        site: "https://www.youtube.com/shorts/uX9-V7r9wqU",
        github: "https://www.youtube.com/shorts/uX9-V7r9wqU",
      },
    },
    {
        img:example,
        title: "GIMP",
      description: "An open-source raster graphics editor used for tasks such as photo retouching, image editing, and image composition.",
      links: {
        site: "https://www.youtube.com/shorts/elvE8xaTd28",
        github: "https://www.youtube.com/shorts/elvE8xaTd28",
      },
    },
  ];
  
const Projects = () => {
  return (
    <div id="projects">
    <div className='max-w-[1000px] mx-auto p-6 md:my-20' >
    <h2 className='text-3xl font-bold text-gray-200 mb-8'>Intenships & Academic Projects</h2>
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