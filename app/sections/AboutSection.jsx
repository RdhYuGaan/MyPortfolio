import Image from "next/image";
import Progress from "../components/Progress";  // Ensure the correct path to Progress component

const skills = [
    { name: "JavaScript", value: 80 },
    { name: "React", value: 75 },
    { name: "CSS", value: 85 },
    // Add more skills as needed
];

function AboutSection() {
    return (
        <section
            id="about-me"
            className="flex flex-col max-w-6xl mx-auto md:flex-row items-center justify-center md:gap-[3rem] md:my-[6rem]"
        >
            <Image
                className="hidden md:block md:scale-150"
                src="/profile.png"
                alt="about-cection-photo"
                height={500}
                width={500}
                quality={100}
            />

            <div className="self-center justify-self-center">
                <h2 className="mb-4 text-3xl font-bold">About Me</h2>
                <p className="mb-4 text-black/60">
                With a strong foundation in software engineering and a passion for solving complex challenges, I specialize in building scalable, efficient, and innovative solutions. 
                </p>

                {skills.map((skill, index) => (
                    <Progress
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
