import Link from "next/link";
import { socialLinks } from "../utils/dataBase";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";

function HeroSection() {
  const renderSocialIcons = () => 
    socialLinks.map(({ href, icon, label }) => (
      <Link
        key={label}
        href={href}
        aria-label={label}
        target="_blank"
        className="text-black transition hover:text-orange-500 duration-300"
      >
        {icon}
      </Link>
    ));

  return (
    <section
      id="home"
      className="grid max-w-6xl gap-4 mx-auto my-6 md:my-12 md:grid-cols-2"
    >
      <div className="self-center justify-self-center">
        <TextGenerateEffect
            className="text-base font-semibold md:text-xl"
            duration={2}
            filter={false}
            words="HII i am  "
        />    
        <div className="self-center justify-self-center">
        <TextGenerateEffect
            className=" text-orange-400 md:text-xl"
            duration={2}
            filter={false}
            words="HII i am radith yugan  "
        /> 
        <TextGenerateEffect
            className=" text-3xl font-extrabold md:text-5xl"
            duration={2}
            filter={false}
            words="Full stack  "
        /> 
        <TextGenerateEffect
            className="ml-[5.4rem] md:ml-[8.5rem] mb-4 text-3xl font-extrabold
             md:text-5xl"
            duration={2}
            filter={false}
            words="web developer  "
        /> 

      </div>
      
    </section>
  );
}

export default HeroSection;
