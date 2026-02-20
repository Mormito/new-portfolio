import Image from "next/image";

export default function PersonalStuff(){
    return(
        <div id="personalstuff" className="w-full flex 
        flex-col justify-center text-center 
        md:text-start md:flex-row md:justify-around 
        items-center mt-20 lg:mt-30">

            <Image src={'/images/magistrada.png'} alt="Magistrada" width={428} height={428} className="w-100 rounded-4xl border border-focus cursor-pointer hover:shadow-focus hover:shadow-md "/>

            <section id="introduction" className="">
                <p className="hidden md:inline md:text-xl lg:text-2xl">Hi there 👋🏻, i'm</p>
                <h1 className="text-2xl lg:text-4xl font-semibold text-focus">Guilherme Mormito</h1>
                <p className="hidden lg:inline lg:text-lg">A curious full-stack developer who is always studying and improving his skill set.</p>
                <p className="text-lg lg:hidden">Fullstack Developer</p>
            </section>


        </div>
    );
}