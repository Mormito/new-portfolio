import Footer from "@/components/footer";
import Header from "@/components/header";
import PersonalStuff from "@/components/personalstuff";

export default function Home(){
  return(
    <div className="w-11/12 lg:w-8/12 min-h-screen flex flex-col gap-10 ">
    <Header />

    <main className="flex-1">
    <PersonalStuff />
    </main>

    <Footer />
    </div>
  );
}