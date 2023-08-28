import { faGithub } from "@fortawesome/free-brands-svg-icons";

import { ProjectType } from "@/types";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function ProjectSlide({ project }: { project: ProjectType }) {

    return (
        <div className="flex">
            <div className="w-1/2 px-10">
                <img
                    src={`/images/projects/${project.image}`}
                    alt={project.name}
                    className=""
                />
            </div>
            <div className="w-1/2 flex flex-col justify-center text-right px-10">
                <div className="flex flex-col gap-4">
                    <header>
                        <h2 className="font-bold">{project.name}</h2>
                    </header>
                    <div className="bg-blue-500 p-4 rounded">
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