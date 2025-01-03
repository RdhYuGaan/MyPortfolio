import Link from "next/link";
import Image from "next/image";
import { socialLinks } from "../utils/dataBase";
import { TextGenerateEffect } from "@/components/ui/text-generate-effect";
import Button from "../components/Button"; // adjust path as needed

function HeroSection() {
  const renderSocialIcons = () =>
    socialLinks.map(({ href, icon, label }) => (
      <Link
        key={label}
        href={href}
        aria-label={label}
        target="_blank"
        className="text-[#10adad] transition hover:text-[#0B7474] duration-300"
      >
        {icon}
      </Link>
    ));

  const paraText = `Full Stack Development involves expertise in both front-end and back-end technologies, 
    enabling seamless web application experiences from design to database management. 
    I am skilled in creating efficient, responsive applications using a range of tools 
    across the development spectrum.`;

  return (
    <section
      id="home"
      className="grid max-w-6xl gap-8 mx-auto my-6 md:my-12 md:grid-cols-2"
    >
      <div className="flex flex-col items-center justify-center text-center md:text-left">
        <TextGenerateEffect
          className="text-base font-semibold md:text-xl"
          duration={2}
          filter={true}
          words="Hi, I am"
        />
        <TextGenerateEffect
          className="text-[#10adad] md:text-xl"
          duration={2}
          filter={false}
          words="Radith YuGan"
        />
        <TextGenerateEffect
          className="text-3xl font-extrabold md:text-5xl"
          duration={2}
          filter={false}
          words="Full Stack"
        />
        <TextGenerateEffect
          className="mb-4 text-3xl font-extrabold md:text-5xl"
          duration={2}
          filter={false}
          words="Web Developer"
        />
        <TextGenerateEffect
          className="mb-4 text-black/60 max-w-lg"
          duration={1}
          filter={false}
          words={paraText}
        />

        <Button className="text-white bg-[#10adad] hover:bg-[#0B7474] mt-4">
          Hire Me
        </Button>

        <div className="flex items-center gap-4 mt-4 md:hidden">
          {renderSocialIcons()}
        </div>
      </div>

      <div className="flex flex-col items-center justify-center md:items-end">
        <Image 
          src="/profile.png"
          alt="Profile image"
          height={800}
          width={800}
          quality={100}
          className="rounded-lg"
          priority
        />

        <div className="hidden mt-4 gap-4  md:flex">
          {renderSocialIcons()}
        </div>  
      </div>
    </section>
  );
}

export default HeroSection;
