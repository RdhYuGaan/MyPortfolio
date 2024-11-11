import Image from "next/image";
import Prograss from "../components/Prograss";  // Ensure the correct path to Progress component

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
                className="hidden md:block"
                src="/2.JPG"
                alt="2nd-image"
                height={500}
                width={500}
                quality={100}
            />

            <div className="self-center justify-self-center">
                <h2 className="mb-4 text-3xl font-bold">About Me</h2>
                <p className="mb-4 text-black/60">
                    With a background in design and a deep understanding of user-centered principles, I focus on crafting designs that are both visually appealing and highly functional.
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
