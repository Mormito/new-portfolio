import Image from "next/image";
import { FaGithubAlt, FaLinkedin } from "react-icons/fa";
import { RiGitRepositoryFill } from "react-icons/ri";

export default function Header(){
    return (
        <div className="w-full flex flex-row justify-between items-center px-5 py-3 border rounded-2xl">

            <Image src={'/images/logo.png'} alt="Logo" width={192} height={192} className="w-7"/>

            <div className="flex flex-row gap-10">
                <a className="headerText" href="#" rel="noopener noreferrer">Inicio</a>
                <a className="headerText" href="#" rel="noopener noreferrer">Stacks</a>
                <a className="headerText" href="#" rel="noopener noreferrer">Projetos</a>
                <a className="headerText" href="#" rel="noopener noreferrer">Contato</a>
            </div>

            <div className="flex flex-row gap-10">
                <a className="headerInfo" href="https://www.linkedin.com/in/Mormito" target="_blank" rel="noopener noreferrer"><FaLinkedin/></a>
                <a className="headerInfo" href="https://www.github.com/Mormito" target="_blank" rel="noopener noreferrer"><FaGithubAlt/></a>
                <a className="headerInfo" href="https://www.github.com/Mormito?tab=repositories" target="_blank" rel="noopener noreferrer"><RiGitRepositoryFill/></a>
            </div>

        </div>
    );
}