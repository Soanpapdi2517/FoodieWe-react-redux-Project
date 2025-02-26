import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="flex text-center flex-col text-gray-500 items-center justify-center w-full h-[200px]">
      <div>
        All Rights Reserved To Foodie us © 2025-30
      </div>
      <div className="">Made with ❤️</div>
      <div className="flex flex-col justify-center items-center text-xl text-gray-800 font-semibold">
        Connect To Us
        <div  className="flex justify-center items-center p-4 gap-2">
          <a href="https://github.com/Soanpapdi2517">
          <FaGithub className="text-gray-900 text-4xl active:animate-ping hover:animate-pulse duration-500 "/>
          
          </a>
          <a href="https://www.instagram.com/soanpapdi1725/">
          <FaInstagram className="text-pink-700 text-4xl active:animate-ping hover:animate-pulse duration-500 "/>
          </a>
          
          <a href="https://www.linkedin.com/in/sonu-yadav-3304381a8/">
          <FaLinkedin className="text-blue-700 text-4xl active:animate-ping hover:animate-pulse duration-500 "/>
          </a>
          
        </div>
      </div>
    </div>
  );
};

export default Footer;
