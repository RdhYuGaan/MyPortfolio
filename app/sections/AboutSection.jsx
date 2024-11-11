function AboutSection() {
  return (
    <section
        id="about me"
        className="flex flex-col max-w-6xl mx:auto md:flex-row items-center justify-center
         md;gap-[3rem] md:my-[6rem]"
    
    >
        <Image
            className="hidden md:block"
            src="/2.JPG"
            alt="2nd-image"
            height={500}
            weight=[500]
            quality={100}
        />

        <div className="self-center justify-self-center">
            <h2 className="mb-4 text-3xl font-bold">About Me</h2>
            <p className="mb-4 text-black/60">
                with background in design and a deep understand ofuser-centralized ,i foucs on crafting design that are not 
                only visually appealing but also highly functional.
            </p>

            {skills.map(skill,index)=>(
                <Prograss
                    key={index}
                    name={skill.name}
                    value={skill.value}
                />
            ))}
        

            
        </div>    


    </section>
  );

}

export default AboutSection;