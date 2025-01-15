import { useState } from 'react'
import { BsGithub, BsLinkedin,BsFileEarmarkArrowDown } from "react-icons/bs"
import { BiMenu } from "react-icons/bi";
import { IoIosClose } from "react-icons/io";
import leetcodeIcon from '/public/leetcode.svg';
import codeforcesIcon from "/public/code-forces.svg";
const menuItems = [
    { name: 'Home', href: '#home' },
    { name: 'Tech', href: '#tech' },
    { name: 'Projects', href: '#projects' },
    { name: 'Contact', href: '#contact' }
];

const socialLinks = [
    { icon: <BsLinkedin />, href: "https://www.linkedin.com/in/gagan-kainthola-4a0144240/", color: 'text-blue-300' },
    { icon: <BsGithub />, href: "https://github.com/Gagankainthola", color: 'text-purple-500' },
    { icon: <img src={leetcodeIcon} alt="LeetCode" className="w-6 h-6" />, href: "https://leetcode.com/u/Gagan121/", color: 'text-purple-500' },
    { icon: <img src={codeforcesIcon} alt="LeetCode" className="w-6 h-6" />, href: "https://codeforces.com/profile/Gagan121", color: 'text-purple-500' },
    { icon: <BsFileEarmarkArrowDown />, href: `${import.meta.env.VITE_PUBLIC_URL}/Resume_Gagan_Kainthola.pdf`, color: 'text-green-500', title: "Download CV" }
];

const Navbar = () => {

    const [isOpen, setIsOpen] = useState(false);

    const menuOpen = () => setIsOpen(prevState => !prevState);

    const renderMenuItems = (className) => (
        menuItems.map(item => (
            <a key={item.name} href={item.href} className={`relative group cursor-pointer opacity-70 transition-all duration-300 hover:opacity-100 ${className}`}>
                <li className="inline-block">{item.name}</li>
                <span className="absolute left-0 bottom-[-3.5px] w-0 h-[3.5px] bg-gradient-to-r from-blue-100 to-blue-300 rounded-full transition-all duration-300 group-hover:w-full"></span>
            </a>
        ))
    );
 
    const renderSocialLinks = (className) => (
        socialLinks.map((link, index) => (
            <li key={index} className={`cursor-pointer text-xl opacity-70 transition-all duration-300 hover:opacity-100 ${className}`}>
                <a href={link.href} target="_blank" rel="noopener noreferrer" className={link.color}>
                    {link.icon}
                </a>
            </li>
        ))
    );
  return (
    <nav className='fixed top-0 z-10 flex w-full items-center justify-between border-b-gray-700 bg-black/70 p-16 py-6 text-white backdrop-blur-md md:justify-evenly'>
    <a href="#home" className='bg-gradient-to-r from-blue-300 to-blue-100 bg-clip-text text-transparent opacity-80 text-3xl font-semibold transition-all duration-300 hover:opacity-100'>
        Gagan
    </a>

    {/* Desktop Menu */}
    <ul className='hidden md:flex gap-10'>
        {renderMenuItems('')}
    </ul>

    {/* Desktop Social Icons */}
    <ul className='hidden md:flex gap-5'>
        {renderSocialLinks('')}
    </ul>

    {/* Mobile Menu Icon */}
    <div className="md:hidden text-4xl" onClick={menuOpen}>
        {isOpen ? <IoIosClose /> : <BiMenu />}
    </div>

    {/* Mobile Menu */}
    {isOpen && (
        <div className={`fixed right-0 top-[84px] flex h-screen w-1/3 flex-col items-start justify-start gap-10 border-l border-gray-800 bg-black/90 p-12`}>
            <ul className='flex flex-col gap-8'>
                {renderMenuItems('')}
            </ul>

            <ul className='flex flex-wrap gap-5'>
                {renderSocialLinks('')}
            </ul>
        </div>
    )}
</nav>
  )
}

export default Navbar