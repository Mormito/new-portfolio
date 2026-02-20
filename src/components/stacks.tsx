import { GrMysql } from "react-icons/gr";
import { RiPhpFill } from "react-icons/ri";
import { RxDividerVertical } from "react-icons/rx";
import { SiCss3, SiHtml5, SiJavascript, SiNextdotjs, SiPostgresql, SiPython, SiSqlite, SiTypescript } from "react-icons/si";

export default function TechStacks(){
    const size:number = 30;
    return(
        <div className="w-full flex justify-around items-center mt-30 border">

            <section className="flex flex-row gap-3 animate-marquee">
                <SiHtml5 size={size}/>
                <SiCss3 size={size}/>
                <SiNextdotjs size={size}/>

                <RxDividerVertical size={size}/>
                
                <SiPython size={size}/>
                <SiTypescript size={size}/>
                <RiPhpFill size={size}/>
                
                <RxDividerVertical size={size}/>

                <GrMysql size={size}/>
                <SiPostgresql size={size} />
                <SiSqlite size={size} />

                <RxDividerVertical size={size}/>
            </section>

        </div>
    );
}