"use client";
import { useEffect, useState } from "react";
import { useProject } from "@/hooks/useProject";
import Project from "./Project";
import { ProjectType } from "@/types";
import Loader from "./Loader";
export default function ProjectsPage() {

    const [projects, setProjects] = useState<ProjectType[]>([]);
    const { getAll } = useProject();

    useEffect(() => {
        const fetchData = async () => {
            try {
                setProjects(await getAll());
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            {
                projects.length > 0 ? (
                    <section className="gap-5 w-full grid grid-cols-1 md:grid-cols-4">
                        {
                            projects.map((project) => (
                                <Project key={project._id} project={project} />
                            ))
                        }
                    </section>
                ) : (
                    <div className="w-full flex justify-center"><Loader /></div>
                )
            }
        </>
    )
}