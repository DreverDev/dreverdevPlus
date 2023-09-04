import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { ProjectType } from "@/types";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectSlide({ project }: { project: ProjectType }) {

    return (
        <div className="flex flex-col md:flex-row">
            <div className="md:w-1/2 md:px-10 flex justify-center">
                <img
                    src={`/images/projects/${project.image}`}
                    alt={project.name}
                    className="h-36"
                />
            </div>
            <div className="md:w-1/2 flex flex-col justify-center md:px-10 md:text-right">
                <div className="flex flex-col gap-4">
                    <header>
                        <h2 className="font-bold">{project.name}</h2>
                    </header>
                    <div className="bg-blue-500 px-4 h-60 md:h-auto rounded text-[14px] md:text-[16px] flex items-center">
                        <p>{project.desc}</p>
                    </div>
                    <footer className="flex gap-4 justify-end">
                        <a href={project.github} target="_blank"><FontAwesomeIcon className="text-xl" icon={faGithub} /></a>
                        <a href={project.link} target="_blank"><FontAwesomeIcon className="text-xl" icon={faArrowUpRightFromSquare} /></a>
                    </footer>
                </div>

            </div>
        </div>
    );

}