import Image from "next/image";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";

export default function Header(){
    return (
        <nav className="w-8/12 fixed top-4 left-1/2 -translate-x-1/2 flex flex-row justify-between items-center px-5 py-3 rounded-2xl bg-background2 dark:bg-darkbackground2">

            <Image src={'/images/logo.png'} alt="Logo" width={192} height={192} className="w-7"/>

            <div className="flex flex-row gap-10">
                <a className="headerText" href="#" rel="noopener noreferrer">Home</a>
                <a className="headerText" href="#projects" rel="noopener noreferrer">Projects</a>
                <a className="headerText" href="#" rel="noopener noreferrer">Tech Stacks</a>
                <a className="headerText" href="#" rel="noopener noreferrer">Contact</a>
            </div>

            <div className="flex flex-row gap-10">
                <a className="headerInfo" href="https://www.linkedin.com/in/Mormito" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                <a className="headerInfo" href="https://www.github.com/Mormito" target="_blank" rel="noopener noreferrer"><FaGithubAlt/></a>
                <a className="headerInfo" href="https://www.github.com/Mormito?tab=repositories" target="_blank" rel="noopener noreferrer"><RiGitRepositoryFill/></a>
            </div>

        </nav>
    );
}