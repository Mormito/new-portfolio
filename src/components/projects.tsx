import Image from "next/image"
import { FaPython, FaQuestion } from "react-icons/fa";
import { RiGitRepositoryFill, RiPhpFill } from "react-icons/ri";
import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiPostgresql, SiPython, SiTailwindcss, SiTypescript } from "react-icons/si";
import RepoBtn from "./repositorybtn";
import { GrMysql } from "react-icons/gr";

export default function Projects(){
    return(
        <div className="w-full flex flex-col items-start lg:px-14 gap-5">

        <h2 className="text-2xl lg:text-3xl text-left font-semibold text-focus">Projects</h2>

        <div id="projects" className="grid grid-cols-1 grid-row-3 md:grid-cols-3 md:grid-row-2 gap-10">
        {/* Pensei em forma melhor de montar esse sistema de projetos, eu até poderia criar um componente, mas honestamente seria ridiculamente trabalhoso configurar cada prop.*/}
        
            <div id="Card1" className="card">

                <div className="flex flex-row items-center gap-2">
                    <h3 className="lg:text-xl font-semibold">BMR Calculator</h3>

                    <div className="cardStacks">
                        <SiHtml5 />
                        <SiCss3 />
                        <SiTailwindcss/>
                        <SiJavascript />
                    </div>
                </div>

                <p className="text-sm">A calorie calculator that helps you plan cutting and bulking diets based on your goals.</p>

                <section className="flex flex-row gap-2">
                <RepoBtn link={"https://github.com/Mormito/BMR-Calculator"} repo={true}/>
                <RepoBtn link={"https://mormito.github.io/BMR-Calculator/"} repo={false}/>
                </section>

            </div>

            <div id="Card2" className="card">

                <div className="flex flex-row items-center gap-2">
                    <h3 className="lg:text-xl font-semibold">Password Manager</h3>

                    <div className="cardStacks">
                        <SiNextdotjs />
                        <SiTailwindcss />
                        <SiTypescript />
                        <SiPostgresql />
                    </div>
                </div>

                <p className="text-sm">A full-stack password manager with login and authentication for enhanced security.</p>

                <RepoBtn link={"https://github.com/Mormito/TypescriptPasswordManager"} repo={true}/>
            </div>

            <div id="Card3" className="card">

                <div className="flex flex-row items-center gap-2">
                    <h3 className="lg:text-xl font-semibold">DoS System</h3>

                    <div className="cardStacks">
                        <SiPython />
                    </div>
                </div>

                <p className="text-sm">A Denial of Service (DoS) tool developed as part of my undergraduate thesis.</p>
                <RepoBtn link={"https://github.com/Mormito/TypescriptPasswordManager"} repo={true}/>
            </div>

            <div id="Card4" className="card">

                <div className="flex flex-row items-center gap-2">
                    <h3 className="lg:text-xl font-semibold">Fan-Made Game Website</h3>

                    <div className="cardStacks">
                        <SiNextdotjs />
                        <SiTailwindcss />
                    </div>
                </div>

                <p className="text-sm">A fan-made website dedicated to the game Divinity: Original Sin 2.</p>
                <RepoBtn link={"https://github.com/Mormito/DivinityOriginalSin2Website"} repo={true}/>
            </div>

            <div id="Card5" className="card">

                <div className="flex flex-row items-center gap-2">
                    <h3 className="lg:text-xl font-semibold">MuscleDB</h3>

                    <div className="cardStacks">
                        <SiTailwindcss />
                        <RiPhpFill />
                        <GrMysql />
                    </div>
                </div>

                <p className="text-sm">A full-stack project developed to store your gym exercises.</p>
                <RepoBtn link={"https://github.com/Mormito/MuscleDB"} repo={true}/>
            </div>

            <div id="Card6" className="card">

                <div className="flex flex-row items-center gap-2">
                    <h3 className="lg:text-xl font-semibold">Coming soon</h3>

                    <div className="cardStacks">
                        <FaQuestion/>
                    </div>
                </div>

                <p className="text-sm">Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto itaque placeat nulla similique.</p>
                <RepoBtn link={"https://github.com/Mormito/MuscleDB"} repo={true}/>
            </div>

        </div>

        </div>
    );
}