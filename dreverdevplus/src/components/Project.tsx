import { ProjectType } from "@/types";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Project({ project }: { project: ProjectType }) {



    return (
        <article className="bg-[#1C2335] rounded relative flex flex-col group">
            <div className="py-3 px-2 w-full">
                <div className="overflow-hidden inline-block">
                    <img className=" h-full rounded transition-transform duration-300 ease-in-out group-hover:scale-110" src={`/images/projects/${project.image}`} alt={project.name} />
                </div>
            </div>
            <div className="flex flex-col mb-14">
                <div className="p-2">
                    <h2 className="text-xl">{project.name}</h2>
                </div>
                <div className="p-2">
                    <p className="text-sm font-mono text-subtext">{project.desc}</p>
                </div>

            </div>
            <div className="absolute bottom-0 right-0 flex gap-5 p-3">
                <a className="flex items-center" href={project.link} target="_blank">
                    <FontAwesomeIcon className="md:text-xl transition-colors hover:text-subtext" icon={faPaperPlane} />
                </a>
                <a className="flex items-center" href={project.github} target="_blank">
                    <FontAwesomeIcon className="md:text-xl transition-colors hover:text-subtext" icon={faGithub} />
                </a>
            </div>

        </article>
    )
}
