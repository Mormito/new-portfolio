import Footer from "@/components/footer";
import Header from "@/components/header";
import PersonalStuff from "@/components/personalstuff";
import Projects from "@/components/projects";
import TechStacks from "@/components/stacks";

export default function Home(){
  return(
    <div className="w-11/12 lg:w-8/12 min-h-screen flex flex-col gap-10">
    <Header/>

    <main className="w-full flex-1 flex flex-col gap-30">
    {/* <PersonalStuff />
    <Projects /> 
    <TechStacks /> */}
     
    </main>

    <Footer />
    </div>
  );
}