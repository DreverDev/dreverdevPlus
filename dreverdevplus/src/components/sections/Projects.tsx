"use client";

import { useEffect, useState } from "react";
import { useProject } from "@/hooks/useProject";
import { ProjectType } from "@/types";
import ProjectsSlider from "../ProjectsSlider";

export default function Projects() {

    const [projects, setprojects] = useState<ProjectType[]>([]);
    const { getAll } = useProject();

    useEffect(() => {

        const fetchData = async () => {
            try {
                setprojects(await getAll());
            } catch (error) {
                console.log(error);
            }
        }
        fetchData();
    }, [])

    return (
        <>
            <h2 className="text-4xl text-blue-500 self-start mt-0 mb-2">PROJECTS SHOWCASE</h2>
            {projects.length > 0 ? (
                <div className="block">
                    <ProjectsSlider projects={projects} />
                </div>
            ) : (
                <span>No hay elementos disponibles</span>
            )}
        </>
    );
}