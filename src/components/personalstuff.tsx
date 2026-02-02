import Image from "next/image";

export default function PersonalStuff(){
    return(
        <div className="w-full flex justify-around items-center">

            <section id="introduction" className="">
                <p className="lg:text-2xl">Hi there 👋🏻, i'm</p>
                <p className="lg:text-4xl font-semibold text-focus">Guilherme Mormito</p>
                <p className="lg:text-lg">A curious fullstack developer who is always studying and improving my skill set</p>
            </section>

            <Image src={'/images/conhecimento.png'} alt="Conhecimento" width={428} height={428} className="w-100 rounded border border-focus"/>

        </div>
    );
}