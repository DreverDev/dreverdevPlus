import { ProjectType } from "@/types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Project({ project }: { project: ProjectType}) {



    return (
        <article className="">
            <div className="relative overflow-hidden group rounded-lg shadow-md shadow-subtext/50">
                <img className="w-full h-full" src={`/images/projects/${project.image}`} alt={project.name} />
                <div className="
                absolute w-full transition-all 
                duration-300
                overflow-hidden h-full px-4
                bg-gradient-to-b from-black to-black/60
                rounded-lg
                bottom-0
                md:-bottom-[calc(100%-2.5rem)]
                md:transform group-hover:-translate-y-[calc(100%-2.5rem)]
                ">
                    <header className="h-10 flex items-center">
                    <h2 className="text-lg text-title font-medium">
                        <span>{project.name}</span>
                    </h2>
                    </header>
                    <div className="text-subtext text-xs md:text-sm font-mono">
                        {project.desc}
                    </div>
                    <footer className="w-full md:absolute md:bottom-0 pb-4">
                        <div className="flex justify-between ">
                            <div className="flex justify-center w-full">
                                <a href={project.link} target="_blank">
                                    <FontAwesomeIcon className="md:text-xl transition-colors hover:text-subtext" icon={faPaperPlane} />
                                </a>
                            </div>
                            <span className="border-l-[1px] border-solid w-[1px]"></span>
                            <div className="flex justify-center w-full">
                                <a href={project.github} target="_blank">
                                    <FontAwesomeIcon className="md:text-xl transition-colors hover:text-subtext" icon={faGithub} />
                                </a>
                            </div>
                        </div>

                    </footer>
                </div>
            </div>
        </article>
    )
}
