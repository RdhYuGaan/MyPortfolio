import Button from '../components/Button';
import {projects} from '../utils/dataBase';
import ProjectCard from '../components/ProjectCard';

function ProjectsSection() {
    return (
        <section
            id="projects"
            className="my-[3rem] max-w-6xl mx-auto md:my-[6rem]"
        >
            <h2 className="mb-4 text-3xl font-bold text-center lg:mb-8">
                My Projects
            </h2>

            <p className="mb-4 lg:mb-8 text-center mx-auto max-w-[36rem] text-black/60">
                Explore my portfolio of diverse projects, showcasing my expertise in design and development.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
                <Button className="bg-gray-100 border hover:bg-gray-200 hover:border-orange-400">
                    All
                </Button>
                <Button className="bg-gray-100 border hover:bg-gray-200 hover:border-orange-400">
                    UI/UX
                </Button>
                <Button className="bg-gray-100 border hover:bg-gray-200 hover:border-orange-400">
                    Web Design
                </Button>
                <Button className="bg-gray-100 border hover:bg-gray-200 hover:border-orange-400">
                   App design
                </Button>
                <Button className="bg-gray-100 border hover:bg-gray-200 hover:border-orange-400">
                    Grapic design
                </Button>
            </div>

            <div className="grid grid-cols-1 gap-6 mt-8 md:grid-cols-2 lg:grid-cols-3">
                {projects.map((project,index)=>(
                    <ProjectCard
                        key={index}
                        imgSrc={project.imgSrc}
                        altText={project.altText}
                        title={project.title}
                    />
                ))}
            </div>


        </section>
    );
}

export default ProjectsSection;
