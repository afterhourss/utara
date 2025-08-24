import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

export default function Footer() {
  return (
    <div className="flex text-[#9C9C9C] gap-10 items-center justify-between mt-20 py-6">
        <div className="hidden md:block">Personal site</div>
        <div className="flex gap-3 items-center">
          <span class="relative flex h-3 w-3">
            <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
            <span class="relative inline-flex rounded-full h-3 w-3 bg-green-700"></span>
          </span>
          <div>All system normal</div>
        </div>
        <div className="flex items-center text-3xl gap-5">
          <a href="https://www.instagram.com/nrthgas.0/" target="_blank"><FaInstagram/></a>
          <a href="https://www.linkedin.com/in/adiptabagas/" target="_blank"><FaLinkedin /></a>
          <a href="https://github.com/afterhourss" target="_blank"><IoLogoGithub/></a> 
        </div>
    </div>
  )
}
